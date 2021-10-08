export const packagesReducer = (state = { list: [] }, action) => {
	switch (action.type) {
		case "UPDATE_LIST":
			return {
				list: action.payload,
			};
		case "ADD_ITEM":
			return {
				list: [...state.list, action.payload],
			};

		default:
			return { list: [] };
	}
};

export default packagesReducer;