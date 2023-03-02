//Challenge 8

import React from "react";
import "./App.css";
import { useCounter } from "./hooks/useCounter";
import { useFetch } from "./hooks/useFetch";

export const MultipleCustomHooks = () => {
	const { counter, increment, decrement, reset } = useCounter(0);
	const url = `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`;
	const { data, isLoading, hasError } = useFetch(url);

	return (
		<>
			<div>
				<h1> Counter </h1>
				<span> El contador está en: {counter} </span>
				<hr></hr>
				<button onClick={() => increment()}> +1 </button>
				<button onClick={() => decrement()}> -1 </button>
				<button onClick={() => reset()}> Reset </button>
			</div>

			<hr></hr>

			<h1>MultipleCustomHooks</h1>
			<hr></hr>
			{isLoading ? (
				<div>Loading...</div>
			) : (
				data.map((item) => (
					<blockquote>
						<p>{item.quote}</p>
						<footer> {item.author} </footer>
					</blockquote>
				))
			)}
		</>
	);
};

export default MultipleCustomHooks;
