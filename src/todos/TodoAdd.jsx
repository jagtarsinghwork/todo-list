/** @format */

import React from "react";

import Modal from "./Modal";

function TodoAdd({ setTodos, todos, setShow, setId }) {
	const handleTodoAdd = (e) => {
		setShow(true);
		setId("");
	};
	return (
		<div>
			<div className='container-button'>
				<button onClick={() => handleTodoAdd()}>Add</button>
			</div>
		</div>
	);
}

export default TodoAdd;
