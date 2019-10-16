import { loadMovies } from "../actions/";
import { throwError } from "../actions/";
import { loading } from "../actions/";

export const fetchMovies = url => {
  return async dispatch => {
    try {
      dispatch(loading(true));
      const response = await fetch(url);

      const movies = await response.json();
      console.log(movies);
      console.log(movies);
      dispatch(loadMovies(movies));
      dispatch(loading(false));
    } catch (error) {
      dispatch(throwError(true));
      return "Error: fetchMovies encountered a problem.";
    }
  };
};
