import React from "react";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTODO } from "../Hooks/useTODO";
import "../App.css";

export const TodoApp = () => {
	const { todos, deleteTodo, doneTodo, handleNewTodo, countTodos, countPendingTodos } = useTODO();

	return (
		<>
			<h1>
				TodoApp: {countTodos()}, <small> Pendientes: {countPendingTodos()} </small>
			</h1>
			<hr />
			<div>
				<div>
					<TodoList todos={todos} deleteTodo={deleteTodo} doneTodo={doneTodo} />
				</div>
				<div>
					<TodoAdd handleNewTodo={handleNewTodo} />
				</div>
			</div>
		</>
	);
};
