import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../store/counterSlice";
import SideBar from "../components/SideBar";

const Counter = () => {
	const { counter } = useSelector((state) => state.counter);
	const dispatch = useDispatch();

	return (
		<div>
			<SideBar />
			<h1> COUNTER APP </h1>
			<hr />
			<span> Counter is: {counter} </span>
			<div>
				<button onClick={() => dispatch(increment())}> +1 </button>
				<button onClick={() => dispatch(decrement())}> -1 </button>
			</div>
		</div>
	);
};

export default Counter;
