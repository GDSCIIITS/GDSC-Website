import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import EventCard from "../components/EventCard";
import styles from "../pages/Events.module.css";
import { CircularProgress, IconButton, Snackbar } from "@mui/material";
import { GridView, TableRows } from "@mui/icons-material";
import StickyHeadTable from "../components/StickHeadTable";
import { useDispatch, useSelector } from "react-redux";
import { pingAdmin } from "./admin-actions";
import { useHistory } from "react-router-dom";
import { eventActions } from "../store/events";
import MuiAlert from "@mui/material/Alert";
import { useLocation } from "react-router-dom";

const AdminEvents = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const events = useSelector((state) => state.activity.events);
  const pastEvents = events.filter((event) => event.status === "Completed");
  const upComingEvents = events.filter((event) => event.status !== "Completed");

  const [gridView, setGridView] = useState(true);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const [snacks, setSnacks] = useState(location.state);
  const [open, isOpen] = useState(snacks?.message !== undefined);

  useEffect(() => {
    setSnacks(location.state)
    history.replace({ state: {} });
    setLoading(true);
    dispatch(
      eventActions.setAuthStatus(
        localStorage.getItem("isAuthenticated") === "true"
      )
    );
    dispatch(pingAdmin()).then((response) => {
      if (response.payload.msg === "token is not valid") {
        localStorage.setItem("isAuthenticated", "false");
        dispatch(eventActions.setAuthStatus(false));
        setLoading(false);
        history.replace({
          pathname: "/admin",
          state: { message: "Session expired! Please login again" },
        });
      } else {
        setLoading(false);
      }
    });
  }, []);
  // const classname = themeData.theme ? styles.dark : "";

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return loading ? (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: "100vh", width: "100vw" }}
    >
      <CircularProgress />
    </div>
  ) : (
    <div>
      <Helmet>
        <title>GDSC IIITS | Events</title>
      </Helmet>
      <Snackbar
        open={open}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
        onClose={() => {
          isOpen(false);
        }}
      >
        <Alert
          onClose={() => {
            isOpen(false);
          }}
          severity={snacks?.severity}
          sx={{ width: "100%" }}
        >
          {snacks?.message}
        </Alert>
      </Snackbar>
      <h2
        className="container"
        style={{ marginBottom: "30px", textAlign: "center", marginTop: "30px" }}
      >
        <strong>Upcoming Events</strong>
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "10%",
        }}
      >
        <button
          className="btn btn-primary shadow-none"
          to="/admin/event-form"
          onClick={(event) => {
            setLoading(true);
            dispatch(pingAdmin()).then((response) => {
              if (response.payload.msg === "token is not valid") {
                localStorage.setItem("isAuthenticated", "false");
                dispatch(eventActions.setAuthStatus(false));
                setLoading(false);
                history.replace({
                  pathname: "/admin",
                  state: { message: "Session expired! Please login again" },
                });
              } else {
                setLoading(false);
                history.push("/admin/event-form");
              }
            });
          }}
        >
          Create Event
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {upComingEvents.length > 0 ? (
          upComingEvents.map((event, index) => {
            return <EventCard key={index} event={event} isAdmin={true} onDelete={setSnacks} />;
          })
        ) : (
          <p>There are no upcoming events!</p>
        )}
      </div>
      <div
        className={`container ${styles.sameline}`}
        style={{ marginTop: "30px" }}
      >
        <h2>
          <strong>Past Events</strong>
        </h2>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "10%",
        }}
      >
        <IconButton
          style={{ height: "35px", width: "35px" }}
          onClick={() => {
            if (!gridView) {
              setGridView(true);
            }
          }}
        >
          <GridView fontSize="small" />
        </IconButton>
        <IconButton
          style={{ height: "35px", width: "35px" }}
          onClick={() => {
            if (gridView) {
              setGridView(false);
            }
          }}
        >
          <TableRows fontSize="small" />
        </IconButton>
      </div>
      {gridView ? (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          {pastEvents.length > 0 ? (
            pastEvents.map((event) => {
              return (
                <EventCard key={event.title} event={event} isAdmin={true} onDelete={setSnacks} />
              );
            })
          ) : (
            <p>There are no past events!</p>
          )}
        </div>
      ) : (
        <div
          className={`container ${styles.container}`}
          style={{ marginTop: "10px", width: "90%" }}
        >
          <StickyHeadTable />
        </div>
      )}
    </div>
  );
};

export default AdminEvents;
