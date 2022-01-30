import React from "react";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import Typewriter from "typewriter-effect";
import Button from "@mui/material/Button";
import GoogleDevelopersIcon from "../assets/gdsc_logo.png";
import GoogleDevelopersIcon2 from "../assets/touchicon-180.png";
import GDSC from "../assets/gdsc.png";
import { Divider } from "@mui/material";
import styles from "./Home.module.css";

const Home = () => {
  const themeData = useSelector((state) => state.DarkMode);
  const classname = themeData.theme ? styles.dark : "";

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className={classname}>
      <div className={styles.homepage_main}>
        <Helmet>
          <title>GDSC IIITS</title>
        </Helmet>
        <div className={styles.homepage}>
          <div className={styles.gdsciiits}>
            <img
              className={styles.gdsclogo}
              src={GoogleDevelopersIcon}
              alt="Google Developers Icon"
            />
            <Typewriter
              options={{
                strings: ["GDSC IIITS"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div
            style={{
              fontSize: "3vmin",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            Google Developer Student Clubs - Indian Institute of Information
            Technology, Sri City
          </div>

          <div className={styles.joinus_btns}>
            <Button
              style={{
                fontSize: "2.7vmin",
                textTransform: "none",
                marginRight: "5px",
                padding: "7px",
                paddingLeft: "15px",
                paddingRight: "15px",
                backgroundColor: "#2475e5",
              }}
              size="small"
              variant="contained"
              onClick={() =>
                openInNewTab(
                  "https://gdsc.community.dev/indian-institute-of-information-technology-sri-city/"
                )
              }
            >
              <img src={GoogleDevelopersIcon2} alt="gd" height="15px" />
              &nbsp; Join Chapter
            </Button>
            <Button
              style={{
                fontSize: "2.7vmin",
                textTransform: "none",
                marginLeft: "5px",
                padding: "7px",
                paddingLeft: "15px",
                paddingRight: "15px",
                backgroundColor: "#2475e5",
              }}
              size="small"
              variant="contained"
              onClick={() => openInNewTab("https://discord.gg/DZrq3Y73We")}
            >
              <i
                style={{ backgroundColor: "transparent" }}
                className="bi bi-discord"
              ></i>
              &nbsp; Join Discord
            </Button>
          </div>
        </div>
      </div>
      <div style={{ marginLeft: "5%", marginRight: "5%" }}>
        <Divider style={{ width: "100%" }} />
      </div>
      <div className={styles.about_us}>
        <div className={styles.about_us_content}>
          <div className={styles.subheading}>Who are we?</div>
          <div className={styles.description}>
            Google Developer Student Clubs IIIT Sri City is an university-based
            community groups for students interested in Google developer
            technologies. Students from all undergraduate or graduate programs
            with an interest in growing as a developer are welcome. <br />
            <br />
            By joining a GDSC, students expand their knowledge in a peer-to-peer
            learning environment and build solutions for local businesses and
            their community. Our purpose is to bridge the gap between theory and
            practice.
          </div>
        </div>
        <img src={GDSC} alt="DSC" style={{ width: "45vw" }} />
      </div>
    </div>
  );
};

export default Home;
