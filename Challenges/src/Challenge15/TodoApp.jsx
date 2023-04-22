import React from "react";
import { TodoList } from "../components/TodoList";
import { TodoAdd } from "../components/TodoAdd";
import { useTODO } from "../Hooks/useTODO";
import "../App.css";
import SideBar from "../components/SideBar";

const TodoApp = () => {
	const { todos, deleteTodo, doneTodo, handleNewTodo, countTodos, countPendingTodos } = useTODO();

	return (
		<div>
			<SideBar />
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
		</div>
	);
};

export default TodoApp;
