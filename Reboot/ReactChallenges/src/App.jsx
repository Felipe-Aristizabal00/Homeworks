//Challenge 6

import React from "react";
import "./App.css";
import { useCounter } from "./hooks/useCounter";

const App = () => {
	const { counter, increment, decrement, reset } = useCounter(0);

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
		</>
	);
};

export default App;
