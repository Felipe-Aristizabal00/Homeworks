import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import SideBar from "../components/SideBar";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const { login } = useContext(AuthContext);
	const { isLoggedIn } = useContext(AuthContext);
	const { setUser } = useContext(AuthContext);
	const navigate = useNavigate();

	const onSubmit = (data) => {
		login();
		console.log(data);
		setUser(data);

		const lastPath = localStorage.getItem("lastPath") || "/";
		navigate(lastPath, {
			replace: true,
		});
	};

	return (
		<div>
			<SideBar />
			<h1> Wellcome </h1>
			<h2> Please login </h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input {...register("user")} />

				<input {...register("password", { required: true })} />
				{errors.exampleRequired && <span>This field is required</span>}

				<input type="submit" />
			</form>
		</div>
	);
};

export default Login;
