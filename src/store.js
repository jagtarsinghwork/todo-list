/** @format */

import { configureStore } from "@reduxjs/toolkit";
import redcuers from "./redux/reducers";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import { pokemonApi } from "./services/pokemon";

export const store = configureStore({
	reducer: {
		...redcuers,
		// Add the generated reducer as a specific top-level slice
		[pokemonApi.reducerPath]: pokemonApi.reducer,
	},
	// Adding the api middleware enables caching, invalidation, polling,
	// and other useful features of `rtk-query`.
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(pokemonApi.middleware),
});

// store.subscribe(() => console.log(store.getState()));
// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
// store.dispatch({ type: "counter/incremented" });
// {value: 1}
// store.dispatch({ type: "counter/incremented" });
// {value: 2}
// store.dispatch({ type: "counter/decremented" });
// {value: 1}

export default store;
