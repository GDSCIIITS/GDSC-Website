import React from "react";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { tooltipClasses } from "@mui/material";
import Divider from "@mui/material/Divider";
import styles from "./EventCard.module.css";
import { useSelector } from "react-redux";

const CustomWidthTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 150,
  },
});

const EventCard = (props) => {
  const { event } = props;
  const themeData = useSelector((state) => state.DarkMode);
  const classname = themeData.theme ? styles.dark : "";
  const colors = ["#DB4437", "#F4B400", "#0F9D58"];

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className={classname}>
      <div className={styles.event_card}>
        <Tooltip title={event.title} placement="top">
          <h5 className={styles.event_title}>{event.title}</h5>
        </Tooltip>
        <span style={{ marginBottom: "5px" }}>
          {event.date}, {event.time}
        </span>
        {event.venue}
        <Divider
          style={{ width: "100%", marginTop: "10px", marginBottom: "10px" }}
        ></Divider>
        Speakers
        <div className={styles.event_speakers_inner}>
          {event.speakers.slice(0, 3).map((speaker, index) => {
            return (
              <Tooltip title={speaker} placement="top" key={speaker}>
                <Avatar
                  style={{
                    height: "30px",
                    width: "30px",
                    marginLeft: "-5px",
                    backgroundColor: colors[index],
                  }}
                  src={speaker}
                  alt={speaker}
                />
              </Tooltip>
            );
          })}
          <div style={{ marginLeft: "2px", fontSize: "0.9rem" }}>
            {event.speakers.length > 3 ? (
              <CustomWidthTooltip
                title={event.speakers.slice(3).join(", ")}
                placement="top"
              >
                <span>{`+${event.speakers.length - 3} more`}</span>
              </CustomWidthTooltip>
            ) : (
              ""
            )}
          </div>
        </div>
        <Button style={{ textTransform: "none" }} onClick={() => {
          openInNewTab(event.link)
        }}>See More</Button>
      </div>
    </div>
  );
};

export default EventCard;
