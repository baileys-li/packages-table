const filterReducer = (state = { filterString: "" }, action) => {
	switch (action.type) {
		case "INPUT":
			return {
				filterString: action.payload,
			};

		default:
			return state;
	}
};

export default filterReducer;
