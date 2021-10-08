const formShowerReducer = (state = { showForm: false }, action) => {
	switch (action.type) {
		case "CHANGE":
			return {
				showForm: !state.showForm,
			};

		default:
			return state;
	}
};

export default formShowerReducer;
