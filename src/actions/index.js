export const loadMovies = movies => ({
  type: "LOAD_MOVIES",
  movies
});

export const login = user => ({
  type: "LOGIN",
  user
});

export const toggleFavorite = id => ({
  type: "TOGGLE_FAVORITE",
  id
});

export const signOut = () => ({
  type: "SIGN_OUT"
});

export const loading = bool => ({
  type: "IS_LOADING",
  bool
});

export const throwError = bool => ({
  type: "IS_ERROR",
  bool
});
