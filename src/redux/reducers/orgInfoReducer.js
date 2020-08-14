const orgInfoReducer = (state = {}, action) => {
  if (action.type === "SET_ORG_INFO") {
    console.log(action.payload);
    return action.payload; 
  }
  return state;
};

export default orgInfoReducer;
