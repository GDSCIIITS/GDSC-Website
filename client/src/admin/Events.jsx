import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import EventCard from '../components/EventCard';
import styles from "../pages/Events.module.css";
import { IconButton } from '@mui/material';
import { GridView, TableRows } from '@mui/icons-material';
import StickyHeadTable from '../components/StickHeadTable';
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';

const AdminEvents = () => {
  const pastEvents = useSelector(state => state.events.pastEvents)
  const upComingEvents = useSelector(state => state.events.upComingEvents)
  console.log(pastEvents, upComingEvents)

    const [gridView, setGridView] = useState(true);
    // const classname = themeData.theme ? styles.dark : "";
    return (
      <div>
        <Helmet>
          <title>GDSC IIITS | Events</title>
        </Helmet>
        <h2
          className="container"
          style={{ marginBottom: "30px", textAlign: "center", marginTop: '30px' }}
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
          <Link className='btn btn-primary shadow-none' to="/admin/event-form">Create Event</Link>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {upComingEvents.length > 0
            ? upComingEvents.map((event) => {
                return <EventCard key={event.title} event={event} />;
              })
            : <p>There are no upcoming events!</p>}
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
            <GridView fontSize="small"/>
          </IconButton>
          <IconButton
            style={{ height: "35px", width: "35px" }}
            onClick={() => {
              if (gridView) {
                setGridView(false);
              }
            }}
          >
            <TableRows fontSize="small"/>
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
              : <p>There are no past events!</p>}
          </div>
        ) : (
          <div
            className={`container ${styles.container}`}
            style={{ marginTop: "10px", width: "90%" }}
          >
            <StickyHeadTable/>
          </div>
        )}
      </div>
    );
};

export default AdminEvents;
