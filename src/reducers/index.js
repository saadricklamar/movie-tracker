import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import usersReducer from "./usersReducer";
import { moviesReducer } from "./moviesReducer";

const rootReducer = combineReducers({
  movies: moviesReducer,
  users: usersReducer,
  error: errorReducer
});

export default rootReducer;
