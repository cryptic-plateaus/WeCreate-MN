const employerUserOppsReducer = (state = [], action) => {
    if (action.type === "SET_ALL_USER_OPPORTUNITIES") {
        console.log(action.payload);
        return action.payload; //<----- check
    }
    return state;
};

export default employerUserOppsReducer;