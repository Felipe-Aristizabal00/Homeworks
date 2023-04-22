import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import SideBar from "./SideBar";

const PrivateRoute = ({ children }) => {
	const { isLoggedIn } = useContext(AuthContext);
	const navigate = useNavigate();

	const { pathname, search } = useLocation();
	localStorage.setItem("lastPath", `${pathname}${search}`);

	const goToLogIn = () => {
		navigate("/login");
	};

	return isLoggedIn ? (
		children
	) : (
		<>
			<SideBar />
			<h1> YOU ARE NOT LOGGED IN</h1>
			<h2> YOU CAN NOT BE HERE, GET OUT </h2>
			<button onClick={() => goToLogIn()}> Go to Log In </button>
		</>
	);
};
export default PrivateRoute;
