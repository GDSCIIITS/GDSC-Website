import React from "react";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import styles from "./Home.module.css";

const Home = () => {
  const themeData = useSelector((state) => state.DarkMode);
  const classname = themeData.theme ? styles.dark : "";
  return (
    <div>
      <Helmet>
        <title>GDSC IIITS</title>
      </Helmet>
      <h2 className={classname}>Home page</h2>
    </div>
  );
};

export default Home;
