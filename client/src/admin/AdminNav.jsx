import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../assets/gdsc_logo.png";
import classes from "./AdminNav.module.css";
import { useHistory } from "react-router-dom";
import { pingAdmin } from "./admin-actions";
import { eventActions } from "../store/events";
// import Toggler from "./Toggler";

const AdminNav = (props) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const navLinks = [
    {
      name: "Events",
      to: "/admin/events",
    },
    {
      name: "Speakers",
      to: "/admin/speakers",
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

  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(pingAdmin()).then((response) => {
      if (response.payload.msg === "token is not valid") {
        localStorage.setItem("isAuthenticated", "false")
        dispatch(eventActions.setAuthStatus(false));
        history.replace({pathname: "/admin", state: {message: "Session expired! Please login again"}});
      }
    });
  }, []);

  return (
    <div
      className={
        isNavExpanded
          ? classes["nav-container-expanded"]
          : classes["nav-container"]
      }
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="/" className={classes["nav-logo"]}>
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
          {props.isAuth &&  navLinks.map((navLink) => {
            return (
              <li>
                <NavLink
                  exact
                  to={navLink.to}
                  className={classes["nav-item"]}
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
          {/* <li>
            <Toggler
              isNavExpanded={isNavExpanded}
              setIsNavExpanded={setIsNavExpanded}
            />
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default AdminNav;
