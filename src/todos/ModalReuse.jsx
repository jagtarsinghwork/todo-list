/** @format */

import React from "react";

function ModalReuse({ modal, Modaltitle, setShow, setTodos, todos }) {
	console.log(modal);
	const [title, setTitle] = React.useState("");
	const [description, setDescription] = React.useState("");
	const [completed, setCompleted] = React.useState(false);

	const handleChange = (e) => {
		console.log(e.target.value);
	};
	const savetodos = () => {
		console.log(title, description, completed);
		setTodos([
			...todos,
			{
				id: todos.length + 1,
				title,
				description,
				completed,
			},
		]);
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
						<input value={title} onChange={(e) => setTitle(e.target.value)} />
						<label>Description</label>
						<input
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
						<input type='button' value='save' onClick={(e) => savetodos(e)} />
					</div>
					<div className='modal-footer'>
						<h1>Modal footer</h1>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ModalReuse;
