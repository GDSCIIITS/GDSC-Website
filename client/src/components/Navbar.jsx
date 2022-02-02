import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../assets/gdsc_logo.png";
import classes from "./Navbar.module.css";
import Toggler from "./Toggler";

const Navbar = () => {
  const themeData = useSelector((state) => state.DarkMode);
  const classname = themeData.theme ? classes.dark : "";
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const navLinks = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "Events",
      to: "/events",
    },
    {
      name: "Team",
      to: "/team",
    },
    {
      name: "About",
      to: "/about",
    },
    {
      name: "Contact",
      to: "/contact",
    },
  ];
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  useEffect(() => {
    if (screenWidth > 850 && isNavExpanded) {
      setIsNavExpanded(false);
    }
  }, [screenWidth, isNavExpanded]);

  return (
    <div
      className={
        isNavExpanded
          ? classes["nav-container-expanded"] + " " + classname
          : classes["nav-container"] + " " + classname
      }
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="/" className={classes["nav-logo"] + " " + classname}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={Logo}
              alt="Logo"
              height="40px"
              width="40px"
              style={{ marginRight: "5px" }}
            />
            GDSC IIITS
          </div>
        </Link>
        {isNavExpanded ? (
          <span
            className={classes["close-icon"]}
            onClick={() => setIsNavExpanded(false)}
          >
            <CloseIcon />
          </span>
        ) : (
          ""
        )}
      </div>
      {isNavExpanded ? (
        ""
      ) : (
        <span
          className={classes["menu-icon"]}
          onClick={() => setIsNavExpanded(true)}
        >
          <MenuIcon />
        </span>
      )}
      <nav>
        <ul className={classes["nav_links"]}>
          {navLinks.map((navLink, index) => {
            return (
              <li key={navLink.name + index}>
                <NavLink
                  exact
                  to={navLink.to}
                  className={classes["nav-item"] + " " + classname}
                  activeClassName={classes.active}
                  onClick={() => {
                    if (isNavExpanded) {
                      setIsNavExpanded(false);
                    }
                  }}
                >
                  {navLink.name}
                </NavLink>
              </li>
            );
          })}
          <li>
            <Toggler
              isNavExpanded={isNavExpanded}
              setIsNavExpanded={setIsNavExpanded}
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
