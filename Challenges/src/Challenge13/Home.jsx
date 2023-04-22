import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import SideBar from "../components/SideBar";
import { useNavigate } from "react-router-dom";

const Home = () => {
	let { isLoggedIn } = useContext(AuthContext);
	const { logout } = useContext(AuthContext);
	const { user } = useContext(AuthContext);
	const navigate = useNavigate();

	console.log(isLoggedIn);

	const logOut = () => {
		logout();
		navigate("/login");
	};

	return (
		<div>
			<SideBar />
			<h1>HELLO</h1>
			<h2>YOU ARE LOGGED IN, YOU CAN BE IN THIS PAGE</h2>
			<h2> These is your data :</h2>
			<h3> {`User: ${user.user}`} </h3>
			<h3> {`Password: ${user.password}`} </h3>
			<button onClick={() => logOut()}> Log out </button>
		</div>
	);
};

export default Home;
