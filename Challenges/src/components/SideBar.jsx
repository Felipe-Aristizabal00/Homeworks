import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
	return (
		<div className="Nav">
			<Link className="Links" to="/login">
				Login
			</Link>
			<Link className="Links" to="/register">
				Firebase
			</Link>
			<Link className="Links" to="/upload">
				Uplaod
			</Link>
			<Link className="Links" to="/">
				Home
			</Link>
			<Link className="Links" to="/todoapp">
				TodoApp
			</Link>
			<Link className="Links" to="/counterapp">
				CounterApp
			</Link>
		</div>
	);
};

export default SideBar;
