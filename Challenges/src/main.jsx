import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./Challenge16/Home";
import Login from "./Challenge16/Login";
import TodoApp from "./Challenge16/TodoApp";
import Counter from "./Challenge16/Counter";
import Registro from "./Challenge16/Registro";
import Upload from "./Challenge16/Upload";
import PrivateRoute from "./components/PrivateRoute";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
	<AuthProvider>
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Registro />} />
					<Route path="/todoapp" element={<TodoApp />} />
					<Route path="/upload" element={<Upload />} />
					<Route path="/counterapp" element={<Counter />} />
					<Route element={<PrivateRoute children={<Home />} />}>
						<Route path="/" element={<Home />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</Provider>
	</AuthProvider>
);
