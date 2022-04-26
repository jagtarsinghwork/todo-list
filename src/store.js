/** @format */

import { createStore } from "redux";

function counterReducer(state = { value: 0 }, action) {
	switch (action.type) {
		case "INCREMENT":
			return { value: state.value + 1 };
		case "DECREMENT":
			return { value: state.value - 1 };
		default:
			return state;
	}
}

// Its API is { subscribe, dispatch, getState }.
let store = createStore(counterReducer);

store.subscribe(() => console.log(store.getState()));
// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({ type: "counter/incremented" });
// {value: 1}
store.dispatch({ type: "counter/incremented" });
// {value: 2}
store.dispatch({ type: "counter/decremented" });
// {value: 1}

export default store;
