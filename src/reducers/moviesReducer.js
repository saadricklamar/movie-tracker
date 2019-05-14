const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case "LOAD_MOVIES":
      const movies = action.movies.results.map(movie => {
        return {
          title: movie.title || movie.name,
          vote_average: movie.vote_average,
          id: movie.id,
          release_date: movie.release_date,
          overview: movie.overview,
          poster_path:
            "https://image.tmdb.org/t/p/w185_and_h278_bestv2" +
            movie.poster_path
        };
      });
      return [...state, ...movies];
    default:
      return state;
  }
};

export default moviesReducer;
