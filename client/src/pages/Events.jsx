import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import GridViewIcon from "@mui/icons-material/GridView";
import TableRowsIcon from "@mui/icons-material/TableRows";
import StickyHeadTable from "../components/StickHeadTable";
import EventCard from "../components/EventCard";
import styles from "./Events.module.css";

const Events = () => {
  const themeData = useSelector((state) => state.DarkMode);
  const dark = { color: "white", backgroundColor: "#121212" };
  const [gridView, setGridView] = useState(true);
  const events = useSelector((state) => state.activity.events);
  const upcomingEvents = events.filter((event) => event.status !== "Completed");
  const pastEvents = events.filter((event) => event.status === "Completed");

  return (
    <div style={{ margin: "30px 60px 0px 60px" }}>
      <Helmet>
        <title>GDSC IIITS | Events</title>
      </Helmet>
      <h2
        className={`${styles.eventsTitle} container`}
        style={{ marginBottom: "30px", textAlign: "center" }}
      >
        <strong>Upcoming Events</strong>
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {upcomingEvents.length > 0 ? (
          upcomingEvents.map((event) => {
            return <EventCard key={event.title} event={event} />;
          })
        ) : (
          <p style={{ color: themeData.theme ? "#F4B400" : "#0F9D58" }}>
            There are no upcoming events!
          </p>
        )}
      </div>
      <div className={styles.pastEventsSection}>
        <div className={styles.emptyContainer}></div>
        <h2 className={styles.eventsTitle}>
          <strong>Past Events</strong>
        </h2>
        <div className={styles.iconsContainer}>
          <IconButton
            style={{ height: "35px", width: "35px" }}
            onClick={() => {
              if (!gridView) {
                setGridView(true);
              }
            }}
          >
            <GridViewIcon
              fontSize="small"
              className={themeData.theme ? dark : ""}
            />
          </IconButton>
          <IconButton
            style={{ height: "35px", width: "35px" }}
            onClick={() => {
              if (gridView) {
                setGridView(false);
              }
            }}
          >
            <TableRowsIcon
              fontSize="small"
              className={themeData.theme ? dark : ""}
            />
          </IconButton>
        </div>
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
              return <EventCard key={event.title} event={event} />;
            })
          ) : (
            <p style={{ color: themeData.theme ? "#F4B400" : "#0F9D58" }}>
              There are no past events!
            </p>
          )}
        </div>
      ) : (
        <div
          className={`container ${styles.container}`}
          style={{ marginTop: "10px", width: "90%" }}
        >
          <StickyHeadTable theme={themeData.theme} />
        </div>
      )}
    </div>
  );
};

export default Events;
