import {loadMovies} from '../actions';
import {throwError} from '../actions';
import {loading} from '../actions';


  export const fetchMovies = async(url) => {
      return async(dispatch) => {
          try{
              dispatch(loading(true))
              const response = await fetch(url)
              const movies = await response.json()
              dispatch(loadMovies(movies))
              dispatch(loading(false))
          }catch (error) {
              dispatch(throwError(true))
              return 'Error: fetchMovies encountered a problem.'
          }
      }
  }
  