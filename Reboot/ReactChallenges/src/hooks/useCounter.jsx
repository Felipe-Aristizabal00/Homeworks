import { useState, useEffect } from "react";

export const useCounter = (value) => {
	const [counter, setCounter] = useState(value);

	const handleAdd = () => {
		setCounter(counter + 1);
	};

	const handleSubstract = () => {
		setCounter(counter - 1);
	};

	const handleReset = () => {
		setCounter(0);
	};

	useEffect(() => {
		handleReset();
	}, []);

	return {
		counter,
		increment: handleAdd,
		decrement: handleSubstract,
		reset: handleReset,
	};
};
