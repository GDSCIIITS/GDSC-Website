import React from "react";
import { useSelector } from "react-redux";

import Avatar from "@mui/material/Avatar";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import styles from "./TeamCard.module.css";

const TeamCard = (props) => {
  const { member } = props;
  const themeData = useSelector((state) => state.DarkMode);
  const classname = themeData.theme ? styles.dark : "";
  return (
    <div className={`${styles.team_card}`}>
      <div className={`${styles.team_card_main} ${classname}`}>
        <Avatar
          src={member.avatar ? member.avatar : member.name}
          alt={member.name}
          style={{ width: "150px", height: "150px" }}
        />
        <h5 className={`${styles.member_name} ${classname}`}>{member.name}</h5>
        <span className={`${styles.member_role} ${classname}`}>
          {member.role}
        </span>
        <div className={`${styles.icons_container} ${classname}`}>
          <InstagramIcon
            fontSize="verysmall"
            className={`${styles.social_media_icon} ${classname}`}
          />
          <LinkedInIcon
            fontSize="verysmall"
            className={`${styles.social_media_icon} ${classname}`}
          />
          <GitHubIcon
            fontSize="verysmall"
            className={`${styles.social_media_icon} ${classname}`}
          />
          <TwitterIcon
            fontSize="verysmall"
            className={`${styles.social_media_icon} ${classname}`}
          />
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
