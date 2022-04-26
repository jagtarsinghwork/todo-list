/** @format */

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	todos: [
		{
			id: 1,
			title: "Learn React",
			description: "Learn React",
			completed: false,
		},
	],
	value: 0,
};

export const todoSlcie = createSlice({
	name: "todoSlice",
	initialState,
	reducers: {
		addTodo: (state, action) => {
			state.todos.push(action.payload);
		},
		deleteTodo: (state, action) => {
			state.todos = state?.todos?.filter((todo) => todo.id !== action.payload.id);
		},
		updateTodo: (state, action) => {
			console.log(action);
			state.todos = state?.todos?.map((todo) => {
				if (todo.id === action.payload.id) {
					return { ...todo, ...action.payload };
				}
				return todo;
			});
		},
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
	},
});

console.log(todoSlcie);
console.log(todoSlcie.actions);

export const { addTodo, deleteTodo, updateTodo, increment, decrement } =
	todoSlcie.actions;
export default todoSlcie.reducer;
