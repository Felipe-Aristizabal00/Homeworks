//Challenge7

import { useEffect, useState } from "react";

export const useFetch = (url) => {
	const [state, setState] = useState({
		data: [],
		isLoading: true,
		hasError: null,
	});

	const getFetch = async () => {
		setState({
			data: [],
			isLoading: true,
			hasError: null,
		});
		const api = await fetch(url);
		const data = await api.json();

		setState({
			data,
			isLoading: false,
			hasError: null,
		});
		return state;
	};

	useEffect(() => {
		getFetch();
		console.log(url);
	}, [url]);

	return state;
};
