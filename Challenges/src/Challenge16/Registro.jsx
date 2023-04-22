import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../hooks/useForm";
import { registerAuth, signInWithGoogle, signOutUser } from "../slices/thunks";
import { onAuthStateChanged } from "firebase/auth";
import { logout, register, authenticated } from "../slices/AuthSlice";
import { auth } from "../firebase/config";
import SideBar from "../components/SideBar";

const Registro = () => {
	const dispatch = useDispatch();

	const { email, password, onInputChange, formState } = useForm({
		email: "faboxinho@gmail.com",
		password: "123456",
	});

	const handleSignInWithGoogle = () => {
		dispatch(signInWithGoogle());
	};

	const handleLogOut = async () => {
		dispatch(signOutUser());
	};

	const onSubmit = (e) => {
		try {
			e.preventDefault();
			console.log(formState);
			dispatch(registerAuth(email, password));
		} catch (error) {
			console.log("ERRROR IN REGISTER");
			console.log(error);
		}
	};

	useEffect(() => {
		onAuthStateChanged(auth, async (user) => {
			if (!user) return dispatch(logout());
			dispatch(register({ email: user.email }));
		});
	}, []);

	const authenticated = useSelector((state) => state.auth.authenticated);

	console.log(authenticated);

	const isUserAuthenticated = useMemo(() => {
		return authenticated === true;
	}, [authenticated]);

	return (
		<>
			<SideBar />

			{!isUserAuthenticated && (
				<>
					<h1>Register</h1>
					<form action="" onSubmit={(e) => onSubmit(e)}>
						<input type="email" name="email" onChange={(e) => onInputChange(e)} value={email} />
						<input type="password" name="password" onChange={(e) => onInputChange(e)} value={password} />
						<button disabled={isUserAuthenticated} type="submit">
							Registro
						</button>
					</form>
					<hr />
					<h1> Register with Google </h1>
					<button onClick={() => handleSignInWithGoogle()}>Sign In with Google</button>
					<hr />
				</>
			)}

			{isUserAuthenticated && (
				<>
					<h1> Log Out </h1>
					<button onClick={() => handleLogOut()}> Press me to Log Out </button>
				</>
			)}
		</>
	);
};

export default Registro;
