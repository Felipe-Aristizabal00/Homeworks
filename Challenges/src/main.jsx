import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./Challenge13/Home";
import Login from "./Challenge13/Login";
import TodoApp from "./Challenge13/TodoApp";
import PrivateRoute from "./components/PrivateRoute";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Counter from "./Challenge13/Counter";

ReactDOM.createRoot(document.getElementById("root")).render(
	<AuthProvider>
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/todoapp" element={<TodoApp />} />
					<Route path="/counterapp" element={<Counter />} />
					<Route element={<PrivateRoute children={<Home />} />}>
						<Route path="/" element={<Home />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</Provider>
	</AuthProvider>
);
