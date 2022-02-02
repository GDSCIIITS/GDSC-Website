import { Close } from "@mui/icons-material";
import { CircularProgress, IconButton, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Prompt } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Select from "react-select";
import { eventActions } from "../store/events";
import { sendEvent, updateEvent } from "./admin-actions";
import styles from "./EventForm.module.css";

const EventForm = () => {
  useEffect(() => {
    window.addEventListener("beforeunload", alertUser);
    return () => {
      window.removeEventListener("beforeunload", alertUser);
    };
  }, []);
  const alertUser = (e) => {
    e.preventDefault();
    e.returnValue = "Hello";
  };

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const speakers = useSelector((state) => state.activity.speakers);
  const events = useSelector((state) => state.activity.events);
  const thisEvent = events.filter((item) => item._id === id);
  const getOptions = () => {
    const options = [];
    speakers.forEach((speaker, index) => {
      options.push({ value: speaker._id, label: speaker.name });
    });
    return options;
  };

  const getSpeakers = (s) => {
    const speakerList = [];
    s.forEach((item, index) => {
      speakerList.push({
        value: item,
        label: speakers.filter((item2) => item2._id === item)[0].name,
      });
    });
    return speakerList;
  };

  const options = getOptions();
  const dispatch = useDispatch();

  const thisDate = id ? new Date(thisEvent[0].date) : "";

  const initData = id
    ? {
        title: thisEvent[0].title,
        description: thisEvent[0].description,
        speakers: getSpeakers(thisEvent[0].speakers),
        status: thisEvent[0].status,
        date: thisDate.toISOString().slice(0, 16),
        venue: thisEvent[0].venue,
        link: thisEvent[0].link,
      }
    : {
        title: "",
        description: "",
        speakers: [],
        status: "none",
        date: "",
        venue: "",
        link: "",
      };

  const [data, setData] = useState(initData);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isBlocking, setIsBlocking] = useState(false);
  const history = useHistory();

  const multiHandler = (event) => {
    setData({ ...data, speakers: event });
    setIsBlocking(true);
  };

  const validateForm = () => {
    const errors = [];
    if (data.speakers.length === 0) {
      errors.push("Please select speakers");
    }
    if (data.status === "") {
      errors.push("Please select the status");
    }
    return errors;
  };

  const formSubmitHandler = (event) => {
    setIsBlocking(false);
    setLoading(true);
    event.preventDefault();
    const errorList = validateForm();
    if (errorList.length > 0) {
      setErrors(errorList);
      return;
    }
    if (!id) {
      dispatch(sendEvent({ ...data })).then((response) => {
        if (response.payload.msg === "token is not valid") {
          dispatch(eventActions.setAuthStatus(false));
          history.replace({
            pathname: "/admin",
            state: { message: "Session expired! Please login again" },
          });
        } else {
          dispatch(eventActions.addEvent(response.payload));
          setLoading(false);
          history.replace({
            pathname: "/admin/events",
            state: {
              message: "Event created successfully",
              severity: "success",
            },
          });
        }
      });
    } else {
      dispatch(updateEvent({ ...data, _id: id })).then((response) => {
        if (response.payload.msg === "token is not valid") {
          dispatch(eventActions.setAuthStatus(false));
          history.replace({
            pathname: "/admin",
            state: { message: "Session expired! Please login again" },
          });
        } else {
          dispatch(eventActions.updateEvent(response.body));
          setLoading(false);
          history.replace({
            pathname: "/admin/events",
            state: {
              message: "Event updated successfully",
              severity: "success",
            },
          });
        }
      });
    }
  };
  return loading ? (
    <div className="container d-flex justify-content-center">
      <CircularProgress />
    </div>
  ) : (
    <div className="container">
      <Prompt message={"Are you sure to leave this page"} when={isBlocking} />
      <div className="row">
        <form onSubmit={formSubmitHandler}>
          <h1
            className="mb-3"
            style={{ width: "90%", margin: "0.4em 0.5em", marginTop: "0.5em" }}
          >
            Event Form
          </h1>
          {errors.map((error, index) => {
            return (
              <div className="col-md-12 col-sm-12 col-lg-12" key={index}>
                <div
                  className="d-flex justify-content-between align-items-center"
                  style={{
                    margin: "0.4em 1em",
                    marginTop: "1em",
                    backgroundColor: "red",
                    color: "white",
                    width: "90%",
                    padding: "0.5em 0.5em 0.5em 1.5em",
                  }}
                >
                  <>{error}</>
                  <IconButton
                    onClick={() => {
                      setErrors((prevErrors) =>
                        prevErrors.filter((error1) => error1 !== error)
                      );
                    }}
                  >
                    <Close sx={{ color: "white" }} />
                  </IconButton>
                </div>
              </div>
            );
          })}
          <div className="col-md-12 col-sm-12 col-lg-12">
            <TextField
              label="Title of the event"
              value={data.title}
              sx={{ width: "90%", margin: "0.4em 1em" }}
              onChange={(event) => {
                setData({ ...data, title: event.target.value });
                if (event.target.value.trim().length > 0) {
                  setIsBlocking(true);
                }
              }}
              required
            />
          </div>
          <div className="col-md-12 col-sm-12 col-lg-12">
            <TextField
              multiline
              value={data.description}
              rows={4}
              label="Description of the event"
              sx={{ width: "90%", margin: "0.4em 1em" }}
              onChange={(event) => {
                setData({ ...data, description: event.target.value });
                if (event.target.value.trim().length > 0) {
                  setIsBlocking(true);
                }
              }}
              required
            />
          </div>
          <div className="col-md-12 col-sm-12 col-lg-12">
            <Select
              options={options}
              value={data.speakers}
              className={styles.speakers}
              placeholder={"Select Speakers"}
              isMulti={true}
              onChange={multiHandler}
            />
          </div>
          <div className="col-md-12 col-sm-12 col-lg-12">
            <select
              defaultValue={data.status}
              className="form-select mb-3 shadow-none"
              aria-label="Default select example"
              style={{ width: "90%", margin: "0.4em 1em" }}
              onChange={(event) => {
                setData({ ...data, status: event.target.value });
                if (event.target.value.trim().length > 0) {
                  setIsBlocking(true);
                }
              }}
              required
            >
              <option value="none" disabled>
                Status of the event
              </option>
              <option value="Going on">Going on</option>
              <option value="Completed">Completed</option>
              <option value="Not started">Not started</option>
            </select>
          </div>
          <div className="col-md-12 col-sm-12 col-lg-12">
            <label htmlFor="" style={{ width: "90%", margin: "0em 1em" }}>
              Date & Time of the event
            </label>
            <input
              className="form-control shadow-none"
              value={data.date}
              id="datetime-local"
              type="datetime-local"
              style={{ width: "90%", margin: "0.6em 1em" }}
              onChange={(event) => {
                setData({ ...data, date: event.target.value });
                if (event.target.value.trim().length > 0) {
                  setIsBlocking(true);
                }
              }}
              required
            />
          </div>
          <div className="col-md-12 col-sm-12 col-lg-12">
            <TextField
              label="Venue of the event"
              value={data.venue}
              sx={{ width: "90%", margin: "0.4em 1em" }}
              onChange={(event) => {
                setData({ ...data, venue: event.target.value });
                if (event.target.value.trim().length > 0) {
                  setIsBlocking(true);
                }
              }}
              required
            />
          </div>
          <div className="col-md-12 col-sm-12 col-lg-12">
            <TextField
              label="GDSC Official event link"
              value={data.link}
              sx={{ width: "90%", margin: "0.4em 1em" }}
              onChange={(event) => {
                setData({ ...data, link: event.target.value });
                if (event.target.value.trim().length > 0) {
                  setIsBlocking(true);
                }
              }}
            />
          </div>
          <div className="d-flex">
            <button
              type="submit"
              className="btn btn-primary shadow-none"
              style={{ margin: "0.4em 1em" }}
            >
              Submit
            </button>

            <button
              onClick={() => {
                  history.goBack()
              }}
              className="btn btn-outline-secondary shadow-none"
              style={{ margin: "0.4em 1em" }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventForm;
