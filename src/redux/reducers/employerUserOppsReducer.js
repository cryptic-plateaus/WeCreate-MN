const employerUserOppsReducer = (state = [], action) => {
    switch (action.type) {
        case "SET_ALL_USER_OPPORTUNITIES":
            return action.payload;
        default:
            return state;
    }
};

export default employerUserOppsReducer;