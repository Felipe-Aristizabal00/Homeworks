import React, { useReducer } from "react";

export const TodoList = ({ todos, deleteTodo, doneTodo }) => {
	return (
		<div>
			<ul>
				{todos.map((td) => {
					return (
						<li key={td?.id}>
							<span className={`${td.done ? "textoTachado" : ""}`} onClick={() => doneTodo(td)}>
								{td?.description}
							</span>
							<button onClick={() => deleteTodo(td)}> Borrar To-do </button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
