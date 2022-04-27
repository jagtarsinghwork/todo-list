/** @format */

// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//Define the services
export const pokemonApi = createApi({
	reducerPath: "pokemonnApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
	endpoints: (buider) => ({
		getPokemonByName: buider.query({
			query: (name) => `pokemon/${name}`,
		}),
	}),
});
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
console.log(pokemonApi);
export const { useGetPokemonByNameQuery } = pokemonApi;
