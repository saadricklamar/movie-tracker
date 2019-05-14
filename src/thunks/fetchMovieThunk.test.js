import { fetchMovies } from "./fetchMovieThunk";
import { loading, loadMovies, throwError } from "../actions/";

describe("fetchMovies", () => {
  let mockUrl;
  let mockDispatch;
  let mockMovie = {
    title: "Avengers",
    rating: 10,
    id: 1,
    releaseDate: 2019,
    synopsis: "a darn good movie",
    posterImage: undefined
  };

  beforeEach(() => {
    mockUrl = "www.mockmovieurl.com";
    mockDispatch = jest.fn();
  });

  it("should dispatch loadMovies with the correct parameters ", async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            movies: mockMovie
          })
      })
    );
    const thunk = fetchMovies(mockUrl);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(
      loadMovies({ movies: mockMovie })
    );
    expect(mockDispatch).toHaveBeenCalledWith(loading(false));
  });

  it("should dispatch to loading(true)", async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true
      })
    );

    const thunk = fetchMovies(mockUrl);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(loading(true));
  });

  it("should dispatch loading(false) if the response is ok", async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true
      })
    );

    const thunk = fetchMovies(mockUrl);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(loading(true));
  });

  it("should return an error message", async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: false
      })
    );
    const thunk = fetchMovies(mockUrl);
    const result = await thunk(mockDispatch);
    expect(result).toEqual("Error: fetchMovies encountered a problem.");
    expect(mockDispatch).toHaveBeenCalledWith(throwError(true));
  });
});
