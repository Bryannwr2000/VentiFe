//Reducer is a function that accept the state and action
//Based on the action, we can perform some logic
//To return action or the state changed by the action
//const reducer = (state, action) => {... some logics}

export default (posts, action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return posts;
    default:
      return posts;
  }
};
