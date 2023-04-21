import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
	return (
		<div className="Nav">
			<Link className="Links"> TodoApp </Link>
			<Link className="Links"> Home </Link>
			<Link className="Links"> Login </Link>
		</div>
	);
};

export default SideBar;
