import React from "react";
import styles from "../pages/Events.module.css";
import { Link } from "react-router-dom";
import SpeakerCard from "../components/SpeakerCard";
import { useSelector } from "react-redux";

const AdminSpeakers = () => {
  const speakers = useSelector((state) => state.events.speakers);
  
  return (
    <div>
      <div
        className={`container ${styles.sameline}`}
        style={{ marginTop: "30px" }}
      >
        <h2>
          <strong>Speakers</strong>
        </h2>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "10%",
        }}
      >
        <Link className="btn btn-primary shadow-none" to="/admin/speaker-form">
          Create Speaker
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        {speakers.length > 0 ? (
          speakers.map((speaker, index) => {
            return <SpeakerCard key={index} speaker={speaker} />;
          })
        ) : (
          <p>There are no speakers!</p>
        )}
      </div>
    </div>
  );
};

export default AdminSpeakers;
