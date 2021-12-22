const setUser = (username, password) => {
	return {
		type: "SET_USER",
		user: {
			username,
			password
		}
	}
};

module.exports = {
	setUser
}