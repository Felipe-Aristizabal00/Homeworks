import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
	GoogleAuthProvider,
	signInWithPopup,
    signOut
} from "firebase/auth";

import { register, login, logout } from "./AuthSlice";
import { auth, googleProvider } from "../firebase/config";

export const registerAuth = (email, password) => {
	return async (dispatch) => {
		const response = await createUserWithEmailAndPassword(auth, email, password);
		if (response) {
			await updateProfile(auth.currentUser, {
				displayName: "Jonathan",
				photoURL: "",
			});

			const { email } = response.user;
			dispatch(register({ email }));
		} else {
			throw new Error("REGISTER- Login failed.");
		}
	};
};

export const signInWithGoogle = () => {
    return async (dispatch) => {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      if (result.user) {
        const { displayName, email, photoURL } = result.user;
        dispatch(login({ user: { displayName, email, photoURL } }));
      }
    };
  };

  export const signOutUser = () => {
    return async (dispatch) => {
      try {
        await auth.signOut();
        dispatch(logout());
        console.log("Logout succeded")
      } catch (error) {
        console.log("Logout failed: ", error);
      }
    };
  };