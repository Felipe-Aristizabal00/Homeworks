import React, { useReducer } from "react";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { TodoReducer } from "./TodoReducer";
import "../App.css";

const initialState = [
	{
		id: new Date().getTime(),
		description: "Hacer los challenges",
		done: false,
	},
];

export const TodoApp = () => {
	const [todos, dispatchTodo] = useReducer(TodoReducer, initialState);

	const handleNewTodo = (todo) => {
		const action = {
			type: "[TODO] ADD TODO",
			payload: todo,
		};
		dispatchTodo(action);
	};

	return (
		<>
			<h1>
				TodoApp: 10, <small> Pendientes: 2 </small>
			</h1>
			<hr />
			<div>
				<div>
					<TodoList todos={todos} />
				</div>
				<div>
					<TodoAdd handleNewTodo={handleNewTodo} />
				</div>
			</div>
		</>
	);
};
