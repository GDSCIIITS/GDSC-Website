import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Team from "./pages/Team";
import Speakers from "./pages/Speakers";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { themeActions } from "./store/DarkThemeReducer";
import { HelmetProvider } from "react-helmet-async";
import classes from "./App.module.css";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("theme") !== null) {
      dispatch(
        themeActions.toggleTheme(localStorage.getItem("theme") === "true")
      );
    }
  }, [dispatch]);
  const themeData = useSelector((state) => state.DarkMode);
  const classname = themeData.theme ? classes.dark : "";
  return (
    <Router>
      <HelmetProvider>
        <div className={classname}>
          <Navbar />

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <div style={{ margin: "30px 60px 30px 60px" }}>
              <Route path="/events" exact>
                <Events />
              </Route>
              <Route path="/team" exact>
                <Team />
              </Route>
              <Route path="/speakers" exact>
                <Speakers />
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
            </div>
          </Switch>
          <Footer />
        </div>
      </HelmetProvider>
    </Router>
  );
};

export default App;
