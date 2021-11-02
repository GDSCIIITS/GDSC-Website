import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div>
			<div>Navbar component</div>
			<div>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/events'>Events</Link>
					</li>
					<li>
						<Link to='/team'>Team</Link>
					</li>
					<li>
						<Link to='/speakers'>Speakers</Link>
					</li>
					<li>
						<Link to='/about'>About</Link>
					</li>
					<li>
						<Link to='/contact'>Contact</Link>
					</li>
					<li>
						<Link to='/blogs'>Blogs</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
