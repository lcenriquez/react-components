const initialState = {
  user: {
  	username: '',
  	password: ''
  }
};

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case "SET_USER":
			return {
				...state,
				user: action.user
			};
		default:
			return state;
	}
}

export default reducer;