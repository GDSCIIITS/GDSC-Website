import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { Box, Modal, tooltipClasses } from "@mui/material";
import Divider from "@mui/material/Divider";
import styles from "./EventCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteEvent, pingAdmin } from "../admin/admin-actions";
import { eventActions } from "../store/events";
import moment from "moment";

const CustomWidthTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 150,
  },
});

const EventCard = (props) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  const { event, isAdmin } = props;
  const themeData = useSelector((state) => state.DarkMode);
  const speakers = useSelector((state) => state.activity.speakers);
  const classname = themeData.theme && !isAdmin ? styles.dark : "";
  const colors = ["#DB4437", "#F4B400", "#0F9D58"];

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const eventDate = new Date(event.date);

  const getSpeakers = () => {
    let speakerList = [];
    speakers.forEach((item, index) => {
      if (event.speakers.includes(item._id)) {
        speakerList.push(item);
      }
    });
    return speakerList;
  };

  const eventSpeakers = getSpeakers();
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(pingAdmin()).then((response) => {
      if (response.payload.msg === "token is not valid") {
        localStorage.setItem("isAuthenticated", "false");
        dispatch(eventActions.setAuthStatus(false));
        history.replace({
          pathname: "/admin",
          state: { message: "Session expired! Please login again" },
        });
      } else {
        dispatch(deleteEvent(event._id)).then((response) => {
          dispatch(eventActions.deleteEvent(event._id));
          setOpen(false);
        });
      }
    });
  };

  const formattedEventDate = moment(eventDate).format("D MMM YYYY, h:mm A");

  return (
    <div className={classname}>
      <Modal
        open={open}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Are you sure?</h2>
          <p id="parent-modal-description">
            Deleting this event will remove all the data related to this event
          </p>
          <div className="container d-flex justify-content-between">
            <Button
              onClick={() => {
                setOpen(false);
              }}
            >
              Cancel
            </Button>
            <button className="btn btn-danger" onClick={deleteHandler}>
              Delete
            </button>
          </div>
        </Box>
      </Modal>
      <div className={styles.event_card}>
        <Tooltip title={event.title} placement="top">
          <h5 className={styles.event_title}>{event.title}</h5>
        </Tooltip>
        <span style={{ marginBottom: "5px" }}>{formattedEventDate}</span>
        {event.venue}
        <Divider
          style={{ width: "100%", marginTop: "10px", marginBottom: "10px" }}
        ></Divider>
        Speakers
        <div className={styles.event_speakers_inner}>
          {eventSpeakers.slice(0, 3).map((speaker, index) => {
            return (
              <Tooltip title={speaker.name} placement="top" key={speaker.name}>
                <Avatar
                  style={{
                    height: "30px",
                    width: "30px",
                    marginLeft: "-5px",
                    backgroundColor: colors[index],
                  }}
                  src={speaker.photo}
                  alt={speaker.name}
                />
              </Tooltip>
            );
          })}
          <div style={{ marginLeft: "2px", fontSize: "0.9rem" }}>
            {event.speakers.length > 3 ? (
              <CustomWidthTooltip
                title={eventSpeakers.slice(3).join(", ")}
                placement="top"
              >
                <span>{`+${eventSpeakers.length - 3} more`}</span>
              </CustomWidthTooltip>
            ) : (
              ""
            )}
          </div>
        </div>
        {isAdmin && (
          <div className="container d-flex justify-content-between">
            <Button
              style={{ textTransform: "none" }}
              onClick={() => {
                dispatch(pingAdmin()).then((response) => {
                  if (response.payload.msg === "token is not valid") {
                    localStorage.setItem("isAuthenticated", "false");
                    dispatch(eventActions.setAuthStatus(false));
                    history.replace({
                      pathname: "/admin",
                      state: { message: "Session expired! Please login again" },
                    });
                  } else {
                    history.push(`/admin/event-form?id=${event._id}`);
                  }
                });
              }}
            >
              Edit event
            </Button>
            <Button
              style={{ textTransform: "none", color: "red" }}
              onClick={() => {
                setOpen(true);
              }}
            >
              Delete
            </Button>
          </div>
        )}
        <Button
          style={{ textTransform: "none" }}
          disabled={event.link === ""}
          onClick={() => {
            openInNewTab(event.link);
          }}
        >
          See More
        </Button>
      </div>
    </div>
  );
};

export default EventCard;
