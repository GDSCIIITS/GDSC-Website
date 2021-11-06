import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.module.css";

const Navbar = () => {
	return (
		<div className="nav-container">
			<Link to="/" className="nav-logo"> GDSC IIITS </Link>
			<nav>	
				<ul className="nav_links">
					<li>
						<Link
							to="/"
							className="nav-item"
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							to="/events"
							className="nav-item"
						>
							Events
						</Link>
					</li>
					<li>
						<Link
							to="/blogs"
							className="nav-item"
						>
							Blogs
						</Link>
					</li>
					<li>
						<Link
							to="/team"
							className="nav-item"
						>
							Team
						</Link>
					</li>
					{/* <li>
						<Link
							to="/speakers"
							className="nav-item"
						>
							Speakers
						</Link>
					</li> */}
					<li>
						<Link
							to="/about"
							className="nav-item"
						>
							About
						</Link>
					</li>
					<li>
						<Link
							to="/contact"
							className="nav-item"
						>
							Contact
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
