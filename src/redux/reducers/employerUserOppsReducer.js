// const employerUserOppsReducer = (state = [], action) => {
//     if (action.type === "SET_ALL_USER_OPPORTUNITIES") {
//         console.log(action.payload);
//         return action.payload; //<----- check
//     }
//     return state;
// };

// export default employerUserOppsReducer;

const employerUserOppsReducer = (state = [], action) => {
    switch (action.type) {
        case "SET_ALL_USER_OPPORTUNITIES":
            return action.payload;
        default:
            return state;
    }
};

export default employerUserOppsReducer;