import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import GridViewIcon from "@mui/icons-material/GridView";
import TableRowsIcon from "@mui/icons-material/TableRows";
import StickyHeadTable from "../components/StickHeadTable";
import EventCard from "../components/EventCard";
import { upcomingEvents, pastEvents } from "../store/events";
import styles from "./Events.module.css";

const Events = () => {
  const themeData = useSelector((state) => state.DarkMode);
  const [gridView, setGridView] = useState(true);
  // const classname = themeData.theme ? styles.dark : "";
  return (
    <div>
      <Helmet>
        <title>GDSC IIITS | Events</title>
      </Helmet>
      <h2
        className="container"
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
        {upcomingEvents.length > 0
          ? upcomingEvents.map((event) => {
              return <EventCard key={event.title} event={event} />;
            })
          : "There are no upcoming events!"}
      </div>
      <div
        className={`container ${styles.sameline}`}
        style={{ marginTop: "30px" }}
      >
        <h2>
          <strong>Past Events</strong>
        </h2>
        {/* <div className={"col-md-6 "}>
          <input
            className={"form-control " + classname}
            name="SEARCH"
            type="text"
            placeholder="Search"
          />{" "}
        </div> */}
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
          <GridViewIcon fontSize="small" />
        </IconButton>
        <IconButton
          style={{ height: "35px", width: "35px" }}
          onClick={() => {
            if (gridView) {
              setGridView(false);
            }
          }}
        >
          <TableRowsIcon fontSize="small" />
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
          {pastEvents.length > 0
            ? pastEvents.map((event) => {
                return <EventCard key={event.title} event={event} />;
              })
            : "There are no past events!"}
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
