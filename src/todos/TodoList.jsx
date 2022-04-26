/** @format */

import React from "react";

function TodoList({ todos, setTodos, setShow, setId }) {
	const handleDeleteTodos = (id) => {
		console.log(id);
		setTodos(todos.filter((todo) => todo.id !== id));
	};
	// const [show, setShow] = React.useState(false);
	const openDialogBox = (id) => {
		console.log(id);
		setId(id);
		setShow(true);
	};

	return (
		<div>
			<ul className='todo-list-conatiner'>
				{todos.map((todo) => (
					<li key={todo.id}>
						<div>
							<p>{todo?.id}</p>
						</div>
						<div>
							<p>{todo?.title}</p>
						</div>
						<div>
							<button onClick={() => handleDeleteTodos(todo?.id)}>
								Delete
							</button>
						</div>
						<div>
							<p onClick={() => openDialogBox(todo?.id)}>
								<span className='more'>.</span>
								<span className='more'>.</span>
								<span className='more'>.</span>
							</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

export default TodoList;