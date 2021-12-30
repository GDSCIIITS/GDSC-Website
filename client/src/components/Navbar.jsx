import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import classes from "./Navbar.module.css";
import Toggler from "./Toggler";

const Navbar = () => {
  const themeData = useSelector((state) => state.DarkMode);
  const classname = themeData.theme ? classes.dark : "";
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
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
          ? classes["nav-container-expanded"]
          : classes["nav-container"] + " " + classname
      }
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="/" className={classes["nav-logo"] + " " + classname}>
          GDSC IIITS
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
          <li>
            <Link to="/" className={classes["nav-item"] + " " + classname}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/events"
              className={classes["nav-item"] + " " + classname}
            >
              Events
            </Link>
          </li>
          {/* <li>
				<Link
					to="/blogs"
					className={classes["nav-item"] + " " + classname}
				>
					Blogs
				</Link>
			</li> */}
          <li>
            <Link to="/team" className={classes["nav-item"] + " " + classname}>
              Team
            </Link>
          </li>
          {/* <li>
				<Link
					to="/speakers"
					className="nav-item"
				>
					Speakers
				</Link>
			</li> */}
          <li>
            <Link to="/about" className={classes["nav-item"] + " " + classname}>
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={classes["nav-item"] + " " + classname}
            >
              Contact
            </Link>
          </li>
          <li>
            <Toggler />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
