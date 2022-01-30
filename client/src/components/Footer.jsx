import React from "react";
import Content from "./content";
import classes from "./Footer.module.css";
import gdsciiits from "../assets/gdsciiits.png";
import { useSelector } from "react-redux";

const Footer = () => {
  const themeData = useSelector((state) => state.DarkMode);
  const classname = themeData.theme ? classes.dark : "";
  return (
    <footer className={classname}>
      <div className={`container ${classes.heading} ${classname}`}>
        <img src={gdsciiits} alt="gdsciiits" />
      </div>
      <div className={`container ${classes.content} ${classname}`}>
        <Content name={classname} />
      </div>
      <div className={`container ${classes.trailing} ${classname}`}>
        <div className="row d-flex justify-content-between">
          <div className={`col-md-9 col-sm-12 ${classes.ref} ${classname}`}>
            &copy;{" "}
            <a
              href="https://github.com/GDSCIIITS/GDSC-Website"
              className={classname}
              style={{ color: "black" }}
            >
              {" "}
              <span>GDSCIIITS</span>
            </a>
            , All rights reserved.
          </div>
          <div
            className={`col-md-2 col-sm-12 ${classes.social_media} ${classname}`}
          >
            <div
              className={`d-flex flex-row bd-highlight mb-3 ${classes.icons} ${classname}`}
            >
              <div className={`p-2 bd-highlight ${classname}`}>
                <a
                  href="https://twitter.com/gdsciiits"
                  className={classname}
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className={"bi bi-twitter " + classname}></i>
                </a>
              </div>
              <div className={`p-2 bd-highlight ${classname}`}>
                <a
                  href="https://www.instagram.com/gdsciiits/"
                  className={classname}
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
              <div className={`p-2 bd-highlight ${classname}`}>
                <a
                  href="https://github.com/GDSCIIITS"
                  className={classname}
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="bi bi-github"></i>
                </a>
              </div>
              <div className={`p-2 bd-highlight ${classname}`}>
                <a
                  href="https://in.linkedin.com/company/gdsc-iiit-sri-city"
                  className={classname}
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
