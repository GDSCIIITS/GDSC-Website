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

const App = () => {
	return (
		<Router>
			<div>
				<Navbar />
				<Switch>
					<Route path='/' exact>
						<Home />
					</Route>
					<Route path='/events' exact>
						<Events />
					</Route>
					<Route path='/team' exact>
						<Team />
					</Route>
					Home Home
					<Route path='/speakers' exact>
						<Speakers />
					</Route>
					<Route path='/about' exact>
						<About />
					</Route>
					<Route path='/contact' exact>
						<Contact />
					</Route>
					<Route path='/blogs' exact>
						<Blogs />
					</Route>
				</Switch>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
