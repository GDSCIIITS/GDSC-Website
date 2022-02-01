import { Visibility, VisibilityOff } from "@material-ui/icons";
import { Close } from "@mui/icons-material";
import { IconButton, InputAdornment, Snackbar, TextField } from "@mui/material";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signin } from "./admin-actions";
import { CircularProgress } from "@mui/material";
import MuiAlert from '@mui/material/Alert';

const AdminAuth = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alerts, setAlerts] = useState([]);
  const history = useHistory();
  const location = useLocation();
  const [snacks, setSnacks] = useState(location.state)

  const formHandler = (event) => {
    setSnacks(location.state)
    history.replace({state: {}})
    event.preventDefault();
    dispatch(signin({ email: email, password: password })).then((response) => {
      localStorage.setItem("token", response.token);
      setLoading(false);
      if (response.token) {
        localStorage.setItem("isAuthenticated", "true");
        history.replace("/admin/events");
      }
    });
  };

  const [open, isOpen] = useState(snacks?.message !== undefined)

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return loading ? (
    <div className="container d-flex justify-content-center">
      <CircularProgress />
    </div>
  ) : (
    <div
      className="container d-flex justify-content-center"
      style={{ textAlign: "center" }}
    >
      <Snackbar open={open} anchorOrigin={{horizontal: "center", vertical: "top"}} autoHideDuration={6000} onClose={
          () => {
            isOpen(false)
        }
      }>
        <Alert onClose={() => {
            isOpen(false)
        }} severity="warning" sx={{ width: '100%' }}>
          {snacks?.message}
        </Alert>
      </Snackbar>
      <form onSubmit={formHandler}>
        <h1 style={{ marginTop: "3em" }}>ADMIN LOGIN</h1>
        {alerts.length !== 0 &&
          alerts.map((err, i) => {
            return (
              <div
                key={i}
                className="container d-flex justify-content-between align-items-center"
                style={{
                  backgroundColor: "red",
                  textAlign: "start",
                  color: "white",
                  padding: "0.4em 0.7em",
                  margin: "0.7em 0",
                  borderRadius: "5px",
                }}
              >
                {err.msg}
                <IconButton
                  onClick={() => {
                    setAlerts((prevState) =>
                      prevState.filter((obj) => obj.param !== err.param)
                    );
                  }}
                >
                  <Close sx={{ color: "white" }} />
                </IconButton>
              </div>
            );
          })}
        <TextField
          label="Email"
          type={"email"}
          sx={{ width: "100%", margin: "1em 0" }}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          required
        />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          sx={{ width: "100%", margin: "1em 0" }}
          onChange={(event) => setPassword(event.target.value)}
          type={showPassword ? "text" : "password"}
          value={password}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          required
        />
        <button className="btn btn-primary">Signin</button>
      </form>
    </div>
  );
};

export default AdminAuth;
