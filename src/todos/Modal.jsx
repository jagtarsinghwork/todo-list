/** @format */

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../redux/reducers/todoSlice";

function Modal({ modal, Modaltitle, setShow, todos, id }) {
	const dispatch = useDispatch();
	const [intialTodos, setIntialTodo] = React.useState({
		id: "",
		title: "",
		description: "",
		completed: false,
	});

	// console.log(todos.find((todo) => todo.id === id));

	useEffect(() => {
		if (id) {
			setIntialTodo(todos.find((todo) => todo.id === id));
		}
	}, [id]);

	const savetodos = () => {
		// console.log(title, description, completed);
		if (id) {
			dispatch(
				updateTodo({
					id: id,
					title: intialTodos?.title,
					description: intialTodos?.description,
					completed: intialTodos?.completed,
				}),
			);
		} else {
			dispatch(
				addTodo({
					id: todos.length + 1,
					title: intialTodos?.title,
					description: intialTodos?.description,
					completed: intialTodos?.completed,
				}),
			);
		}
		setShow(false);
	};
	return (
		<div className={`modal-show`}>
			<div className='modal-container'>
				<div className='modal-content'>
					<div className='modal-header'>
						<div>
							<h1>{Modaltitle}</h1>
						</div>
						<div className='mdoal-close'>
							<button onClick={() => setShow(false)}>X</button>
						</div>
					</div>
					<div className='modal-body'>
						<p>
							SOFTPRO{" "}
							<span
								style={{
									border: "2px solid black",
									padding: "2px",
									borderRadius: "5px",
								}}>
								DIGY
							</span>
						</p>
						<label>Title</label>
						<input
							value={intialTodos.title}
							onChange={(e) =>
								setIntialTodo({ ...intialTodos, title: e.target.value })
							}
						/>
						<label>Description</label>
						<input
							value={intialTodos.description}
							onChange={(e) =>
								setIntialTodo({
									...intialTodos,
									description: e.target.value,
								})
							}
						/>
						<input
							type='button'
							className='btn-submit'
							value={id ? "UPDATE" : "SAVE"}
							onClick={(e) => savetodos(e)}
						/>
					</div>
					<div className='modal-footer'>
						<h1>@SOFTPRODIGY</h1>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Modal;
