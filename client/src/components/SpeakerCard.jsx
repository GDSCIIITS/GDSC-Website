import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Divider from "@mui/material/Divider";
import styles from "./EventCard.module.css";
import { useHistory } from "react-router-dom";
import { Box, Modal } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteSpeaker, pingAdmin } from "../admin/admin-actions";
import { eventActions } from "../store/events";

const SpeakerCard = (props) => {
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

  const { speaker, isAdmin } = props;
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const deleteHandler = (event) => {
    dispatch(pingAdmin()).then((response) => {
      if (response.payload.msg === "token is not valid") {
        localStorage.setItem("isAuthenticated", "false");
        dispatch(eventActions.setAuthStatus(false));
        history.replace({
          pathname: "/admin",
          state: { message: "Session expired! Please login again" },
        });
      } else {
        dispatch(deleteSpeaker(speaker._id)).then((response) => {
          dispatch(eventActions.deleteSpeaker(speaker._id));
          setOpen(false);
        });
      }
    });
  };

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Are you sure?</h2>
          <p id="parent-modal-description">
            Deleting this speaker will remove all the data related to this
            speaker
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
        <div className={styles.event_speakers_inner}>
          <Avatar
            style={{
              height: "4em",
              width: "4em",
              marginLeft: "-5px",
            }}
            src={speaker.photo}
            alt={"Altern"}
          />
        </div>
        <Tooltip title={speaker.name} placement="top">
          <h5 className={styles.event_title}>{speaker.name}</h5>
        </Tooltip>
        {speaker.domain} {"-"} {speaker.rank}
        {isAdmin && (
          <>
            <Divider
              style={{ width: "100%", marginTop: "10px", marginBottom: "10px" }}
            ></Divider>
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
                        state: {
                          message: "Session expired! Please login again",
                        },
                      });
                    } else {
                      history.push(`/admin/speaker-form?id=${speaker._id}`);
                    }
                  });
                }}
              >
                Edit speaker
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
          </>
        )}
      </div>
    </div>
  );
};

export default SpeakerCard;
