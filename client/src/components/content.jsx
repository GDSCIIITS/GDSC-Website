import React from "react";
import classes from "./content.module.css";
const Content = () => {
  return (
    <div className="container container--fluid">
      <div className="row align-center justify-start">
        <div
          className={"col-sm-12 col-md-3 col-lg-3 col-12 " + classes.contentCol}
        >
          <p className={classes.contentHeading}>About</p>
          <div>
            <a className={classes.links} href="">
              GDSC IIITS
            </a>
          </div>
          <div>
            <a className={classes.links} href="">
              WomenTechmakers
            </a>
          </div>
          <div>
            <a className={classes.links} href="">
              Google Developers Groups
            </a>
          </div>
        </div>
        <div
          className={"col-sm-12 col-md-3 col-lg-3 col-12 " + classes.contentCol}
        >
          <p className={classes.contentHeading}>Resources</p>
          <div>
            <a className={classes.links} href="">
              Become a Sponsor
            </a>
          </div>
          <div>
            <a className={classes.links} href="">
              Some Link Name
            </a>
          </div>
        </div>
        <div
          className={"col-sm-12 col-md-3 col-lg-3 col-12 " + classes.contentCol}
        >
          <p className={classes.contentHeading}>Developer Console</p>
          <div>
            <a className={classes.links} href="">
              Google API Console
            </a>
          </div>
          <div>
            <a className={classes.links} href="">
              Google Play Console
            </a>
          </div>
          <div>
            <a className={classes.links} href="">
              Firebase Console
            </a>
          </div>
        </div>
        <div
          className={"col-sm-12 col-md-3 col-lg-3 col-12 " + classes.contentCol}
        >
          <p className={classes.contentHeading}>GDSCIIITS</p>
          <div>
            <a className={classes.links} href="">
              Code Of Conduct
            </a>
          </div>
          <div>
            <a className={classes.links} href="">
              Terms & Services
            </a>
          </div>
          <div>
            <a className={classes.links} href="">
              Community Guidelines
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
