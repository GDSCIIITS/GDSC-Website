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
  const speakers = useSelector((state) => state.events.speakers)
  const classname = themeData.theme ? styles.dark : "";
  const colors = ["#DB4437", "#F4B400", "#0F9D58"];

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const eventDate = new Date(event.date)

  const getSpeakers = () => {
    let speakerList = []
    speakers.forEach((item, index) => {
      if(event.speakers.includes(item._id)) {
        speakerList.push(item)
      }
    })
    return speakerList
  }

  const eventSpeakers = getSpeakers()

  return (
    <div className={classname}>
      <div className={styles.event_card}>
        <Tooltip title={event.title} placement="top">
          <h5 className={styles.event_title}>{event.title}</h5>
        </Tooltip>
        <span style={{ marginBottom: "5px" }}>
          {eventDate.toUTCString()}
        </span>
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
        <Button style={{ textTransform: "none" }} onClick={() => {
          openInNewTab(event.link)
        }}>See More</Button>
      </div>
    </div>
  );
};

export default EventCard;
