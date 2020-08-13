// const orgInfoReducer = (state = [], action) => {
//     switch (action.type) {
//       case "SET_ORG_INFO":
//         return action.payload;
//       default:
//         return state;
//     }
// };

const orgInfoReducer = (state = {}, action) => {
  if (action.type === "SET_ORG_INFO") {
    console.log(action.payload);
    return action.payload; //<----- check
  }
  return state;
};

export default orgInfoReducer;
