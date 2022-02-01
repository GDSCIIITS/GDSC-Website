import React, { useEffect, useState } from "react";
import styles from "../pages/Events.module.css";
import SpeakerCard from "../components/SpeakerCard";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { pingAdmin } from "./admin-actions";
import { eventActions } from "../store/events";
import { CircularProgress, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { useLocation } from "react-router-dom";


const AdminSpeakers = () => {
  const speakers = useSelector((state) => state.activity.speakers);
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState(false)
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const location = useLocation();
  const [snacks, setSnacks] = useState(location.state);
  const [open, isOpen] = useState(snacks?.message !== undefined);

  
  useEffect(() => {
    setSnacks(location.state)
    history.replace({ state: {} });
    dispatch(pingAdmin()).then((response) => {
      if (response.payload.msg === "token is not valid") {
        dispatch(eventActions.setAuthStatus(false));
        localStorage.setItem("isAuthenticated", "false");
        history.replace({pathname: "/admin", state: {message: "Session expired! Please login again"}});
      }
    });
  }, []);


  return (
    loading ? <div className="container d-flex justify-content-center align-items-center" style={{height: '100vh', width: '100vw'}}>
      <CircularProgress />
    </div>
     : <div>
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
        <button
          className="btn btn-primary shadow-none"
          to="/admin/speaker-form"
          onClick={(event) => {
            setLoading(true)
            event.preventDefault()
            dispatch(pingAdmin()).then((response) => {
              if (response.payload.msg === "token is not valid") {
                localStorage.setItem("isAuthenticated", "false");
                dispatch(eventActions.setAuthStatus(false));
                setLoading(false)
                history.replace({pathname: "/admin", state: {message: "Session expired! Please login again"}});
              } else {
                setLoading(false)
                history.push("/admin/speaker-form");
              }
            });
          }}
        >
          Create Speaker
        </button>
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
            return <SpeakerCard key={index} speaker={speaker} isAdmin={true} />;
          })
        ) : (
          <p>There are no speakers!</p>
        )}
      </div>
    </div>
  );
};

export default AdminSpeakers;
