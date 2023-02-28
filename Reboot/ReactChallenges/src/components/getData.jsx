export const getData = async (counter) => {
	const url = `https://breakingbadapi.com/api/quotes/${counter}`;
	const resp = await fetch(url);
	return resp;
};

export default getData;
