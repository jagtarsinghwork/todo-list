/** @format */

import React from "react";
import Modal from "./Modal";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";
import { useSelector, useDispatch } from "react-redux";

function TodoLayout() {
	const [show, setShow] = React.useState(false);
	const [id, setId] = React.useState("");
	// console.log(id);
	// const [todos, setTodos] = React.useState([
	// 	{
	// 		id: 1,
	// 		title: "Learn React",
	// 		description: "Learn React",
	// 		completed: false,
	// 	},
	// ]);
	const todos = useSelector((state) => state.todo?.todos);
	console.log(todos);
	const dispatch = useDispatch();
	return (
		<div>
			<h1>Todo </h1>
			{show && (
				<Modal
					Modaltitle={` ${id ? "Update" : "Add"} Todo`}
					modal={show}
					setShow={setShow}
					// updateTodo={updateTodo}
					todos={todos}
					id={id}
				/>
			)}
			<TodoAdd
				// updateTodo={updateTodo}
				todos={todos}
				setShow={setShow}
				setId={setId}
			/>
			<div>
				<TodoList
					todos={todos}
					// updateTodo={updateTodo}
					setShow={setShow}
					setId={setId}
				/>
			</div>
		</div>
	);
}

export default TodoLayout;
