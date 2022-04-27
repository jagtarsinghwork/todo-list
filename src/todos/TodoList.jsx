/** @format */

import React from "react";
import { deleteTodo, updateTodo } from "../redux/reducers/todoSlice";
import { useDispatch } from "react-redux";

function TodoList({ todos, setTodos, setShow, setId }) {
	const handleDeleteTodos = (id) => {
		console.log(id);
		setTodos(todos.filter((todo) => todo.id !== id));
	};
	// const [show, setShow] = React.useState(false);
	const dispatch = useDispatch();
	const openDialogBox = (id) => {
		setId(id);
		setShow(true);
	};
	const hanleMarkAsCompleted = (e, id) => {
		dispatch(updateTodo({ id: id, completed: e.target.checked }));
	};

	return (
		<div>
			<ul className='todo-list-conatiner'>
				{todos?.map((todo) => (
					<li key={todo.id}>
						<div>
							<div>
								<input
									type='checkbox'
									value={todo.completed}
									onChange={(e) => {
										hanleMarkAsCompleted(e, todo.id);
									}}
								/>
							</div>
							<p>{todo?.id}</p>
						</div>
						<div>
							<p>{todo?.title}</p>
						</div>
						<div>
							<button
								onClick={() => dispatch(deleteTodo({ id: todo?.id }))}>
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
