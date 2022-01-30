import React from "react";
import classes from "./Toggler.module.css";
import { themeActions } from "../store/DarkThemeReducer";
import { useSelector, useDispatch } from "react-redux";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Toggler = (props) => {
  const { isNavExpanded, setIsNavExpanded } = props;
  const themeData = useSelector((state) => state.DarkMode);
  const dispatch = useDispatch();
  const toggleDarkMode = () => {
    dispatch(themeActions.toggleTheme(true));
  };
  const toggleLightMode = () => {
    dispatch(themeActions.toggleTheme(false));
  };
  const classname = themeData.theme ? classes.dark : "";
  return (
    <div
      className={classname}
      onClick={() => {
        if (isNavExpanded) {
          setIsNavExpanded(false);
        }
      }}
    >
      {themeData.theme ? (
        <LightModeIcon
          style={{ cursor: "pointer" }}
          onClick={toggleLightMode}
        />
      ) : (
        <DarkModeIcon style={{ cursor: "pointer" }} onClick={toggleDarkMode} />
      )}
    </div>
  );
};

export default Toggler;
