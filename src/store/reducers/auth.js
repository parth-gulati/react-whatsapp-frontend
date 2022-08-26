let initialState = null;

if (window.localStorage.getItem("auth")) {
  initialState = JSON.parse(window.localStorage.getItem("auth"));
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGGED_IN_USER":
      return { ...state, ...action.payload };
    case "LOGOUT":
      return action.payload;
    default:
      return state;
  }
};
