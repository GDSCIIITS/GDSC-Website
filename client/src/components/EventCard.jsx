import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import styles from "./EventCard.module.css";

const EventCard = (props) => {
  const { event } = props;
  return (
    <div className={styles.event_card}>
      <Tooltip title={event.title} placement="top">
        <h5 className={styles.event_title}>{event.title}</h5>
      </Tooltip>
      <div className={styles.event_details}>
        <h6>
          <b>Date & Time:</b> {event.date}, {event.time}
        </h6>
        <div className={styles.event_speakers}>
          <h6>
            <b>Speakers: </b>
          </h6>
          <div className={styles.event_speakers_inner}>
            {event.speakers.slice(0, 3).map((speaker) => {
              return (
                <Avatar
                  className={styles.event_speaker_avatar}
                  key={speaker}
                  src={speaker}
                  alt={speaker}
                />
              );
            })}
            <div style={{ marginBottom: "0.5rem", marginLeft: "2px" }}>
              {event.speakers.length > 3
                ? `+${event.speakers.length - 3} more`
                : ""}
            </div>
          </div>
        </div>
        <Button style={{ textTransform: "none" }}>See More</Button>
      </div>
    </div>
  );
};

export default EventCard;
