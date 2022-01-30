import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Divider from "@mui/material/Divider";
import styles from "./EventCard.module.css";

const SpeakerCard = (props) => {
  const { speaker } = props;

  return (
    <div>
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
        <Divider
          style={{ width: "100%", marginTop: "10px", marginBottom: "10px" }}
        ></Divider>
        <Button style={{ textTransform: "none" }}>Edit speaker</Button>
      </div>
    </div>
  );
};

export default SpeakerCard;
