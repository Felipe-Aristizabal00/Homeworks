import React, { useState } from "react";

export const TodoAdd = (props) => {
	const handleNewTodo = props.handleNewTodo;

	const [TODOtitle, setTODOtitle] = useState("");

	const agregarTODO = (event) => {
		event.preventDefault();
		const newTODO = {
			id: new Date().getTime(),
			description: TODOtitle,
			done: false,
		};
		handleNewTodo(newTODO);
		setTODOtitle("");
	};

	return (
		<div>
			<hr />
			<h4> Agregar TODO </h4>
			<form onSubmit={agregarTODO}>
				<input value={TODOtitle} onChange={(event) => setTODOtitle(event.target.value)}></input>
				<button type="submit"> Agregar </button>
			</form>
		</div>
	);
};
