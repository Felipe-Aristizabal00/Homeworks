import React from "react";

export const TodoList = (props) => {
	const todos = props.todos;

	return (
		<div>
			<ul>
				{todos.map((td) => {
					return <li key={td.id}> {td.description} </li>;
				})}
			</ul>
		</div>
	);
};
