import React from "react";
import classes from "./content.module.css";
const Content = (props) => {
  return (
    <div className={"container container--fluid " + props.name}>
      <div className={"row align-center justify-start " + props.name}>
        <div
          className={"col-sm-12 col-md-3 col-lg-3 col-12 " + classes.contentCol + " " + props.name}
        >
          <p className={classes.contentHeading + " " + props.name}>About</p>
          <div className={props.name}>
            <a className={classes.links + " " + props.name} href="">
              GDSC IIITS
            </a>
          </div>
          <div className={props.name}>
            <a className={classes.links + " " + props.name} href="">
              WomenTechmakers
            </a>
          </div>
          <div className={props.name}>
            <a className={classes.links + " " + props.name} href="">
              Google Developers Groups
            </a>
          </div>
        </div>
        <div
          className={"col-sm-12 col-md-3 col-lg-3 col-12 " + classes.contentCol + " " + props.name}
        >
          <p className={classes.contentHeading + " " + props.name}>Resources</p>
          <div className={props.name}>
            <a className={classes.links + " " + props.name} href="">
              Become a Sponsor
            </a>
          </div>
          <div className={props.name}>
            <a className={classes.links + " " + props.name} href="">
              Some Link Name
            </a>
          </div>
        </div>
        <div
          className={"col-sm-12 col-md-3 col-lg-3 col-12 " + classes.contentCol + " " + props.name}
        >
          <p className={classes.contentHeading + " " + props.name}>Developer Console</p>
          <div className={props.name}>
            <a className={classes.links + " " + props.name} href="">
              Google API Console
            </a>
          </div>
          <div className={props.name}>
            <a className={classes.links + " " + props.name} href="">
              Google Play Console
            </a>
          </div>
          <div className={props.name}>
            <a className={classes.links + " " + props.name} href="">
              Firebase Console
            </a>
          </div>
        </div>
        <div
          className={"col-sm-12 col-md-3 col-lg-3 col-12 " + classes.contentCol + " " + props.name}
        >
          <p className={classes.contentHeading + " " + props.name}>GDSCIIITS</p>
          <div className={props.name}>
            <a className={classes.links + " " + props.name} href="">
              Code Of Conduct
            </a>
          </div>
          <div className={props.name}>
            <a className={classes.links + " " + props.name} href="">
              Terms & Services
            </a>
          </div>
          <div className={props.name}>
            <a className={classes.links + " " + props.name} href="">
              Community Guidelines
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
