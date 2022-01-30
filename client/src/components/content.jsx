import React from "react";
import { HashLink } from "react-router-hash-link";
import classes from "./content.module.css";

const Content = (props) => {
  return (
    <div className={"container container--fluid " + props.name}>
      <div className={"row d-flex align-center justify-content-between " + props.name}>
        <div
          className={
            "col-sm-12 col-md-3 col-lg-3 col-12 " +
            classes.contentCol +
            " " +
            props.name
          }
        >
          <p className={classes.contentHeading + " " + props.name}>About</p>
          <div className={props.name}>
            <a
              className={classes.links + " " + props.name}
              href="https://gdsc.community.dev/indian-institute-of-information-technology-sri-city/"
              target="_blank"
              rel="noreferrer"
            >
              GDSC IIITS
            </a>
          </div>
          <div className={props.name}>
            <a
              className={classes.links + " " + props.name}
              href="https://developers.google.com/community/gdg"
              target="_blank"
              rel="noreferrer"
            >
              Google Developers Groups
            </a>
          </div>
          <div className={props.name}>
            <a
              className={classes.links + " " + props.name}
              href="https://developers.google.com/community/gdsc"
              target="_blank"
              rel="noreferrer"
            >
              Google Developer Student Clubs
            </a>
          </div>
        </div>
        <div
          className={
            "col-sm-12 col-md-3 col-lg-3 col-12 " +
            classes.contentCol +
            " " +
            props.name
          }
        >
          <p className={classes.contentHeading + " " + props.name}>Resources</p>
          <div className={props.name}>
            <a className={classes.links + " " + props.name} href="mailto:gdsc@iiits.in">
              Become a Sponsor
            </a>
          </div>
          {/* <div className={props.name}>
            <a className={classes.links + " " + props.name} href="/">
              Some Link Name
            </a>
          </div> */}
        </div>
        <div
          className={
            "col-sm-12 col-md-3 col-lg-3 col-12 " +
            classes.contentCol +
            " " +
            props.name
          }
        >
          <p className={classes.contentHeading + " " + props.name}>
            Developer Console
          </p>
          <div className={props.name}>
            <a
              className={classes.links + " " + props.name}
              href="https://console.developers.google.com/"
              target="_blank"
              rel="noreferrer"
            >
              Google API Console
            </a>
          </div>
          <div className={props.name}>
            <a
              className={classes.links + " " + props.name}
              href="https://play.google.com/apps/publish"
              target="_blank"
              rel="noreferrer"
            >
              Google Play Console
            </a>
          </div>
          <div className={props.name}>
            <a
              className={classes.links + " " + props.name}
              href="https://console.firebase.google.com/"
              target="_blank"
              rel="noreferrer"
            >
              Firebase Console
            </a>
          </div>
        </div>
        <div
          className={
            "col-sm-12 col-md-3 col-lg-3 col-12 " +
            classes.contentCol +
            " " +
            props.name
          }
        >
          <p className={classes.contentHeading + " " + props.name}>GDSCIIITS</p>
          <div className={props.name}>
            <HashLink to="/about#code-of-conduct" className={classes.links + " " + props.name}>
              Code Of Conduct
            </HashLink>
          </div>
          <div className={props.name}>
            <HashLink to="/about#community-guidelines" className={classes.links + " " + props.name}>
              Community Guidelines
            </HashLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
