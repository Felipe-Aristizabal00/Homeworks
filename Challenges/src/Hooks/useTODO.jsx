import React, { useReducer } from "react";
import { TodoReducer } from "../reducer/TodoReducer";

const initialState = [
	{
		id: new Date().getTime(),
		description: "Hacer los challenges",
		done: false,
	},
];

const useTODO = () => {
	const [todos, dispatchTodo] = useReducer(TodoReducer, initialState);

	const handleNewTodo = (todo) => {
		const action = {
			type: "[TODO] ADD TODO",
			payload: todo,
		};
		dispatchTodo(action);
	};

	const doneTodo = (todo) => {
		const action = {
			type: "[TODO] DONE TODO",
			payload: todo,
		};
		dispatchTodo(action);
	};

	const deleteTodo = (todo) => {
		const action = {
			type: "[TODO] DELETE TODO",
			payload: todo,
		};
		dispatchTodo(action);
	};

	const countTodos = () => {
		const allTodos = todos.length;
		return allTodos;
	};

	const countPendingTodos = () => {
		const allPendingTodos = todos.filter((todo) => todo.done === false);
		let numberPendingTodos = allPendingTodos.length;
		return numberPendingTodos;
	};

	return { todos, handleNewTodo, doneTodo, deleteTodo, countTodos, countPendingTodos };
};

export { useTODO };
