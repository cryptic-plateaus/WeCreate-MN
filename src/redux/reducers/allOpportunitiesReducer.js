const allOpportunitiesReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_ALL_OPPORTUNITIES":
      return action.payload;
    default:
      return state;
  }
};

export default allOpportunitiesReducer;
