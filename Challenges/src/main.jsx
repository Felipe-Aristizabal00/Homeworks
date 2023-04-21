import React from "react";
import ReactDOM from "react-dom/client";
import { TodoApp } from "./Challenge12/TodoApp";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<TodoApp />
	</BrowserRouter>
);
