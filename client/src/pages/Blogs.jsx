import React from "react";
import { useSelector } from "react-redux";
import styles from "./Blogs.module.css";

const Blogs = () => {
  const themeData = useSelector((state) => state.DarkMode);
  const classname = themeData.theme ? styles.dark : "";
  return (
    <div>
      <h2 className={classname}>Blogs page</h2>
    </div>
  );
};

export default Blogs;
