export const TodoReducer = (initialState, action) => {
	switch (action.type) {
		case "[TODO] ADD TODO":
			return [...initialState, action.payload];
		case "[TODO] DONE TODO":
			const doneTODO = initialState.map((todo) => {
				if (todo.id === action.payload.id) {
					todo.done = !todo.done;
				}
				return todo;
			});
			return doneTODO;
		case "[TODO] DELETE TODO":
			return initialState.filter((todo) => action.payload.id !== todo.id);
		default:
			return initialState;
	}
};
