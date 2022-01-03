import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Avatar from "@mui/material/Avatar";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleScholarIcon from "../assets/google-scholar.svg";
import GoogleScholarDarkIcon from "../assets/google-scholar-dark.svg";
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
          style={{
            width: "150px",
            height: "150px",
            boxShadow: "0px 2px 10px rgb(0 0 0 / 15%)",
          }}
        />
        <h5 className={`${styles.member_name} ${classname}`}>{member.name}</h5>
        <span className={`${styles.member_role} ${classname}`}>
          {member.role}
        </span>
        <div className={`${styles.icons_container} ${classname}`}>
          {member.linkedIn ? (
            <Link
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                color: "black",
              }}
              to={{
                pathname: `https://www.linkedin.com/in/${member.linkedIn}`,
              }}
              target="_blank"
            >
              <LinkedInIcon
                fontSize="verysmall"
                className={`${styles.social_media_icon} ${classname}`}
              />
            </Link>
          ) : (
            ""
          )}
          {member.instagram ? (
            <Link
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                color: "black",
              }}
              to={{
                pathname: `https://www.instagram.com/${member.instagram}`,
              }}
              target="_blank"
            >
              <InstagramIcon
                fontSize="verysmall"
                className={`${styles.social_media_icon} ${classname}`}
              />
            </Link>
          ) : (
            ""
          )}
          {member.github ? (
            <Link
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                color: "black",
              }}
              to={{
                pathname: `https://www.github.com/${member.github}`,
              }}
              target="_blank"
            >
              <GitHubIcon
                fontSize="verysmall"
                className={`${styles.social_media_icon} ${classname}`}
              />
            </Link>
          ) : (
            ""
          )}
          {member.twitter ? (
            <Link
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                color: "black",
              }}
              to={{
                pathname: `https://www.twitter.com/${member.twitter}`,
              }}
              target="_blank"
            >
              <TwitterIcon
                fontSize="verysmall"
                className={`${styles.social_media_icon} ${classname}`}
              />
            </Link>
          ) : (
            ""
          )}
          {member.googleScholar ? (
            <Link
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                color: "black",
              }}
              to={{
                pathname: `https://scholar.google.com/citations?user=${member.googleScholar}`,
              }}
              target="_blank"
            >
              <img
                src={
                  themeData.theme ? GoogleScholarDarkIcon : GoogleScholarIcon
                }
                alt="Google Scholar"
                height="16px"
                width="16px"
              />
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
