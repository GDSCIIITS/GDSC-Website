import { useSelector } from "react-redux";
import styles from "./Contact.module.css";
import ContactSVG from "../assets/contact.svg";

const Contact = () => {
  const themeData = useSelector((state) => state.DarkMode);
  const classname = themeData.theme ? styles.dark : "";
  return (
    <div className={classname}>
      <h2 className={`container ${styles.contact} ${classname}`}>
        <span className={styles.subheading + " " + classname}>Contact</span> GDG
        Sri City
      </h2>
      <div className={`container ${styles.container} ${classname}`}>
        <p className={styles.maintext + " " + classname}>
          Our events are open to newbies, developers, managers, and
          organizations who are interested in Google's technologies or use them
          as part of their projects.
          <br />
          <br /> Google Developers Group Sri City is an initiative to
          concentrate the efforts of many developers in and around Sri City to
          learn, share and get productive using the various Google products.
          <br />
          <br /> Questions?{" "}
          <b className={classname}>
            Please contact us at:{" "}
            <a href="mailto:gdsc@iiits.in" className={classname}>
              gdsc@iiits.in
            </a>
          </b>
        </p>
        <img src={ContactSVG} alt="unimportant" className={classname} />
      </div>
    </div>
  );
};

export default Contact;
