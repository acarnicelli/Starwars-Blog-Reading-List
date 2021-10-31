import React from "react";
import { Link } from "react-router-dom";
import Favorites from "./favorites";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img
					className="navbar-brand mb-0 h1"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Star_wars_1977_us.svg/286px-Star_wars_1977_us.svg.png"
					alt="Star Wars Logo"
					width="30%"
					height="30%"
				/>
			</Link>
			<Favorites />
		</nav>
	);
};
