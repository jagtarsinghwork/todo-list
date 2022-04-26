/** @format */

import React from "react";
import Modal from "./Modal";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";

function TodoLayout() {
	const [show, setShow] = React.useState(false);
	const [id, setId] = React.useState("");
	// console.log(id);
	const [todos, setTodos] = React.useState([
		{
			id: 1,
			title: "Learn React",
			description: "Learn React",
			completed: false,
		},
	]);
	return (
		<div>
			<h1>Todo </h1>
			{show && (
				<Modal
					Modaltitle={` ${id ? "Update" : "Add"} Todo`}
					modal={show}
					setShow={setShow}
					setTodos={setTodos}
					todos={todos}
					id={id}
				/>
			)}
			<TodoAdd setTodos={setTodos} todos={todos} setShow={setShow} setId={setId} />
			<div>
				<TodoList
					todos={todos}
					setTodos={setTodos}
					setShow={setShow}
					setId={setId}
				/>
			</div>
		</div>
	);
}

export default TodoLayout;
