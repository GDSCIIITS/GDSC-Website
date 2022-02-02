import React from "react";
import { Helmet } from "react-helmet-async";
import styles from "./Contact.module.css";
import ContactSVG from "../assets/contact.svg";

const Contact = () => {
  return (
    <div style={{ margin: "30px 60px 0px 60px" }}>
      <Helmet>
        <title>GDSC IIITS | Contact</title>
      </Helmet>
      <h2 className={`container ${styles.contact}`}>
        <span className={styles.subheading}>Contact</span> GDSC Sri City
      </h2>
      <div className={`container ${styles.container}`}>
        <p className={styles.maintext}>
          Our events are open to newbies, developers, managers, and
          organizations who are interested in Google's technologies or use them
          as part of their projects.
          <br />
          <br /> Google Developers Group Sri City is an initiative to
          concentrate the efforts of many developers in and around Sri City to
          learn, share and get productive using the various Google products.
          <br />
          <br /> Questions?{" "}
          <b>
            Please contact us at:{" "}
            <a href="mailto:gdsc@iiits.in">gdsc@iiits.in</a>
          </b>
        </p>
        <img src={ContactSVG} alt="unimportant" />
      </div>
    </div>
  );
};

export default Contact;
