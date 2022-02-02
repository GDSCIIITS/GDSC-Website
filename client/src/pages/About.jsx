import React from "react";
import { Helmet } from "react-helmet-async";
import { styled } from "@mui/material/styles";

import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

// import heroimg from "../assets/herosectionnbg.png";
import heroimg from "../assets/about.png";
import gdsciiits from "../assets/gdsciiits.png";
import code_of_conduct from "../assets/code-of-conduct.svg";
import community_guidelines from "../assets/community-guidelines.svg";
import anti_harrasment_1 from "../assets/anti-harrasment-1.svg";
import anti_harrasment_2 from "../assets/anti-harrasment-2.svg";
import anti_harrasment_3 from "../assets/anti-harrasment-3.svg";
import styles from "./About.module.css";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>1. Be respectful</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We're all part of the same community, so be friendly, welcoming, and
            generally a nice person. Be someone that other people want to be
            around.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>2. Be respectful and constructive</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Remember to be respectful and constructive with your communication
            to fellow members. Don't get into flamewars, make personal attacks,
            vent, or rant unconstructively. Everyone should take responsibility
            for the community and take the initiative to diffuse tension and
            stop a negative thread as early as possible.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>3. Be collaborative</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Work together! We can learn a lot from each other. Share knowledge,
            and help each other out.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

const About = () => {
  return (
    <div style={{ margin: "30px 60px 0px 60px" }}>
      <Helmet>
        <title>GDSC IIITS | About</title>
      </Helmet>
      <h2 className={`container ${styles.about}`}>
        <span className={styles.subheading}>About</span>
      </h2>
      <div className={`container ${styles.content}`}>
        <div className={"row"}>
          <div className={"col-md-4 " + styles.heroimg}>
            <img src={heroimg} alt="" />
          </div>
          <div className={"col-md " + styles.maintext}>
            <img src={gdsciiits} alt="title" />
            <p>
              Google Developers Group Sri City is an initiative to concentrate
              the efforts of many developers in and around Sri City to learn,
              share and get productive using the various Google products. Our
              events are open to newbies, developers, managers, and
              organizations who are interested in Google's technologies or use
              them as part of their projects.
              <br />
              <a
                href="mailto:gdsc@iiits.in"
                className={"btn btn-primary shadow-none " + styles.contact}
              >
                Contact us
              </a>
            </p>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>

      <hr />
      <div className={`container ${styles.container}`}>
        <nav className={`sidenav ${styles.sidenav}`}>
          <br />
          <h4 className={"google-font"}> About Us</h4>
          <ol>
            <li>
              <a href="#community-guidelines">Community Guidelines</a>
            </li>
            <li>
              <a href="#code-of-conduct">Code of Conduct</a>
            </li>
            <li>
              <a href="#anti-harrasment-policy">Anti Harrasment Policy</a>
            </li>
          </ol>
        </nav>

        <div className={styles.maintext}>
          <div id="community-guidelines">
            <br />
            <h2 className={"google-font"}>
              <b>Community Guidelines</b>
            </h2>
            <div className={"row"}>
              <div className="col-md">
                <div className={"google-font"}>
                  <CustomizedAccordions />
                </div>
              </div>

              <div className="col-md">
                <img
                  className={`image_about ${styles.image_about}`}
                  src={community_guidelines}
                  alt=""
                />
              </div>
            </div>
          </div>

          <br />
          <hr />

          <div id="code-of-conduct">
            <br />
            <h2 className={"google-font"}>
              <b>Code of Conduct</b>
            </h2>
            <img src={code_of_conduct} alt="" />
            <p>
              When you join our programs, you're joining a community. And like
              any growing community, a few ground rules about expected behavior
              are good for everyone. These guidelines cover both online (e.g.
              mailing lists, social channels) and offline (e.g. in-person
              meetups) behavior. Violations of this code of conduct can result
              in members being removed from the program. Use your best judgment,
              and if you'd like more clarity or have questions feel free to
              reach out.
            </p>
          </div>

          <br />
          <hr />

          <div id="anti-harrasment-policy">
            <br />
            <h2 className={"google-font"}>
              <b>Anti Harrasment Policy</b>
            </h2>
            <br />
            <img src={anti_harrasment_1} alt="" />
            <div className={"google-font"}>
              <h5>
                <b>
                  Why do we have an official Anti-Harassment policy for GDG Sri
                  City events?
                </b>
              </h5>
              <ul>
                • It sets expectations for behavior at the event. Simply having
                an anti-harassment policy can prevent harassment.
                <br />
                • It encourages people to attend who have had bad experiences at
                other events.
                <br />• It gives event staff/volunteers instructions on how to
                handle harassment quickly, with minimum amount of disruption for
                the event.
              </ul>
            </div>
            <br />
            <h5>
              <b>
                GDG Sri City is dedicated to providing a harassment-free event
                experience for everyone, regardless of:
              </b>
            </h5>
            <ul>
              • Gender
              <br />
              • Sexual Orientation
              <br />
              • Disability
              <br />
              • Gender Identity
              <br />
              • Age
              <br />
              • Race
              <br />
              • Religion
              <br />
              • Nationality
              <br />
            </ul>
            The above is not an exhaustive list -- we do not tolerate harassment
            of event spanarticipants in any form.
            <br />
            <img src={anti_harrasment_2} alt="" />
            <br />
            <h6 className={`impoint ${styles.imppoint}`}>
              Sexual language and imagery is not appropriate for any event
              venue, including talks. Event participants violating these rules
              may be expelled from the event, and event banned from future
              events at the discretion of the event organizers/management.
            </h6>
            <br />
            <h5>
              <b>Harassment includes (but is not limited to):</b>
            </h5>
            <ul>
              • Offensive verbal comments related to gender, sexual orientation,
              disability, gender identity, age, race, religion.
              <br />
              • The use or display of sexual images in public spaces
              <br />
              • Deliberate intimidation
              <br />
              • Stalking
              <br />
              • Harassing photography or recording
              <br />
              • Sustained disruption of talks or other events
              <br />
              • Inappropriate physical contact
              <br />
              • Unwelcome sexual attention
              <br />
              • Advocating for, or encouraging, any of the above
              <br />
            </ul>
            <br />
            <img src={anti_harrasment_3} alt="" />
            <h6 className={`impoint ${styles.imppoint}`}>
              Participants asked to stop any harassing behavior are expected to
              comply immediately.
              <br />
              <br />
              Exhibiting partners and guests are also subject to the
              anti-harassment policy. In particular, exhibitors and speakers
              should not use sexualized images, activities, or other material,
              or otherwise create a sexualized environment in their slide decks,
              exhibit material, exhibit staffing, promotional items or demo
              material.
              <br />
              <br />
              If you are being harassed, notice that someone else is being
              harassed, or have any other concerns, please contact an organizer
              or event volunteer immediately. Organizers and event volunteers
              may be identified by t-shirts or special badges/lanyards.
              Organizers will investigate the issue and take appropriate action.
              This may include helping participants contact venue security or
              local law enforcement, provide escorts, or otherwise assist these
              experiencing harassment to fell safe for the duration of the
              event.
              <br />
              <br />
              Though we hope that we never have to invoke this policy, we
              believe that having this document helps everyone think a little
              more about how their actions and words affect the whole community,
              as well as individuals in the community.
            </h6>
            <br />
            <hr />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
