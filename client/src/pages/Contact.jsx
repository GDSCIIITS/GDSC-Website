import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <>
      <h2 className={`container ${styles.contact}`}>
        <span className={styles.subheading}>Contact</span> GDG Sricity
      </h2>
      <div className={`container ${styles.container}`}>
        <p className={styles.maintext}>
          Our events are open to newbies, developers, managers, and
          organizations who are interested in Google's technologies or use them
          as part of their projects.
          <br />
          <br /> Google Developers Group Sricity is an initiative to concentrate
          the efforts of many developers in and around to learn, share and get
          productive using the various Google products.
          <br />
          <br /> Questions? Please contact us at{" "}
        </p>
        <img
          src="https://myaurapp.web.app/img/contact.23fa5966.svg"
          alt="unimportant"
        />
      </div>
    </>
  );
};

export default Contact;
