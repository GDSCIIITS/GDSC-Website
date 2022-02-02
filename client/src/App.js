import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Team from "./pages/Team";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { themeActions } from "./store/DarkThemeReducer";
import { HelmetProvider } from "react-helmet-async";
import classes from "./App.module.css";
import Admin from "./admin/Admin";
import EventForm from "./admin/EventForm";
import SpeakerForm from "./admin/SpeakerForm";
import AdminAuth from "./admin/AdminAuth";
import AdminSpeakers from "./admin/Speakers";
import AdminEvents from "./admin/Events";
import { getEvents, getSpeakers } from "./admin/admin-actions";
import { eventActions } from "./store/events";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("theme") !== null) {
      dispatch(
        themeActions.toggleTheme(localStorage.getItem("theme") === "true")
      );
    }
    dispatch(getEvents()).then((response) => {
      if (response !== "failure") {
        dispatch(eventActions.setEvents(response));
      }
    });
    dispatch(getSpeakers()).then((response) => {
      if (response !== "failure") {
        dispatch(eventActions.setSpeakers(response));
      }
    });
  }, [dispatch]);
  const themeData = useSelector((state) => state.DarkMode);
  const classname = themeData.theme ? classes.dark : "";
  return (
    <Router>
      <HelmetProvider>
        <Switch>
          <Route path="/admin">
            <Admin>
              <Route path="/admin" exact>
                <AdminAuth />
              </Route>
              <Route path="/admin/events" exact>
                <AdminEvents />
              </Route>
              <Route path="/admin/speakers" exact>
                <AdminSpeakers />
              </Route>
              <Route path="/admin/event-form" exact>
                <EventForm />
              </Route>
              <Route path="/admin/speaker-form" exact>
                <SpeakerForm />
              </Route>
            </Admin>
          </Route>
          <div className={`${classes.main} ${classname}`}>
            <Navbar />
            <Route path="/" exact>
              <Home />
            </Route>
            <div className={`${classes.pageStyle} ${classname}`}>
              <Switch>
                <Route path="/events" exact>
                  <Events />
                </Route>
                <Route path="/team" exact>
                  <Team />
                </Route>
                <Route path="/about" exact>
                  <About />
                </Route>
                <Route path="/contact" exact>
                  <Contact />
                </Route>
                <Route path="/blogs" exact>
                  <Blogs />
                </Route>
              </Switch>
              <div className={classes.footer}>
                <Footer />
              </div>
            </div>
          </div>
        </Switch>
      </HelmetProvider>
    </Router>
  );
};

export default App;
