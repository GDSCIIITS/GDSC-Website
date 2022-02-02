import { Close } from "@mui/icons-material";
import { CircularProgress, IconButton, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { eventActions } from "../store/events";
import { sendSpeaker, updateSpeaker } from "./admin-actions";
import { useLocation } from "react-router-dom";
import { Prompt } from "react-router-dom";

const SpeakerForm = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const speakers = useSelector((state) => state.activity.speakers);
  const id = params.get("id");
  const thisSpeaker = speakers.filter((item) => item._id === id);
  const initData = id
    ? {
        name: thisSpeaker[0].name,
        domain: thisSpeaker[0].domain,
        rank: thisSpeaker[0].rank,
      }
    : {
        name: "",
        domain: "none",
        rank: "none",
      };
  const initPhoto = id ? thisSpeaker[0].photo : "";
  const [data, setData] = useState(initData);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isBlocking, setIsBlocking] = useState(false);
  const [photo, setPhoto] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const photoHandler = (event) => {
    setPhoto(event.target.files[0]);
    setIsBlocking(true);
  };

  const validateForm = () => {
    const errorList = [];
    if (!id && !photo) {
      errorList.push("Please upload Profile photo");
    }
    if (data.domain === "") {
      errorList.push("Please select a domain");
    }
    if (data.rank === "") {
      errorList.push("Please select a rank");
    }
    return errorList;
  };

  const formSubmitHandler = (event) => {
    setIsBlocking(false);
    setLoading(true);
    event.preventDefault();
    const errorList = validateForm();
    setErrors(errorList);
    if (errorList.length > 0) {
      setLoading(false);
      return;
    }
    if (!id) {
      dispatch(sendSpeaker(photo, data)).then((response) => {
        if (response.payload.msg === "token is not valid") {
          dispatch(eventActions.setAuthStatus(false));
          history.replace({
            pathname: "/admin",
            state: { message: "Session expired! Please login again" },
          });
        } else {
          dispatch(eventActions.addSpeaker(response.body));
          setLoading(false);
          history.replace({
            pathname: "/admin/speakers",
            state: {
              message: "Speaker created successfully",
              severity: "success",
            },
          });
        }
      });
    } else {
      dispatch(updateSpeaker(id, initPhoto, photo, data)).then((response) => {
        if (response.payload.msg === "token is not valid") {
          dispatch(eventActions.setAuthStatus(false));
          history.replace({
            pathname: "/admin",
            state: { message: "Session expired! Please login again" },
          });
        } else {
          dispatch(eventActions.updateSpeaker(response.body));
          setLoading(false);
          history.replace({
            pathname: "/admin/speakers",
            state: {
              message: "Speaker updated successfully",
              severity: "success",
            },
          });
        }
      });
    }
  };

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

  return loading ? (
    <div className="container d-flex justify-content-center">
      <CircularProgress />
    </div>
  ) : (
    <div className="container">
      <Prompt message={"Are you sure to leave this page"} when={isBlocking} />
      <div className="row">
        <form className="" onSubmit={formSubmitHandler}>
          <h1
            className="mb-3"
            style={{ width: "90%", margin: "0.4em 0.5em", marginTop: "1em" }}
          >
            Speaker form
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
              label="Name of the Speaker"
              type={"text"}
              value={data.name}
              sx={{ width: "90%", margin: "0.4em 1em" }}
              onChange={(event) => {
                setData({ ...data, name: event.target.value });
                if (event.target.value.trim().length > 0) {
                  setIsBlocking(true);
                }
              }}
              required
            />
          </div>
          <div className="col-md-12 col-sm-12 col-lg-12">
            <label style={{ width: "90%", margin: "0.4em 1em" }}>
              Profile pic of the speaker{" "}
              {id ? (
                <a
                  href={initPhoto}
                  rel="noreferrer"
                  target={"_blank"}
                  className="btn btn-link shadow-none"
                >
                  Preview
                </a>
              ) : (
                "Passport size recommended"
              )}
            </label>
            <input
              type="file"
              accept="image/*"
              className="form-control shadow-none"
              id="floatingTitle"
              placeholder="@"
              style={{ width: "90%", margin: "0.4em 1em 1em 1em" }}
              onChange={photoHandler}
            />
          </div>
          <div className="col-md-12 col-sm-12 col-lg-12">
            <select
              className="form-select mb-3 shadow-none"
              required
              defaultValue={data.domain}
              aria-label="Default select example"
              style={{ width: "90%", margin: "0.4em 1em" }}
              onChange={(event) => {
                setData({ ...data, domain: event.target.value });
                if (event.target.value.trim().length > 0) {
                  setIsBlocking(true);
                }
              }}
            >
              <option value="none" disabled>
                Select the domain *
              </option>
              <option value="Web Development">Web Development</option>
              <option value="App Development">App Development</option>
              <option value="AI / ML">AI / ML</option>
              <option value="Design Team">Design Team</option>
              <option value="Public Relation">Public Relation</option>
              <option value="Management Team">Management Team</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="col-md-12 col-sm-12 col-lg-12">
            <select
              className="form-select mb-3 shadow-none"
              required
              defaultValue={data.rank}
              aria-label="Default select example"
              style={{ width: "90%", margin: "0.4em 1em" }}
              onChange={(event) => {
                setData({ ...data, rank: event.target.value });
                if (event.target.value.trim().length > 0) {
                  setIsBlocking(true);
                }
              }}
            >
              <option value="none" disabled>
                Select the role in the domain *
              </option>
              <option value="Lead">Lead</option>
              <option value="Core">Core</option>
              <option value="Member">Member</option>
              <option value="Other">Other</option>
            </select>
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
                history.goBack();
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

export default SpeakerForm;
