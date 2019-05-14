const defaultState = {
  name: null
};

const usersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.user;
    case "SIGN_OUT":
      return {};
    default:
      return state;
  }
};

export default usersReducer;
