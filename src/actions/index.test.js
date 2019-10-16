import * as actions from "./index";

describe("actions", () => {
  it("should return a type of LOAD_MOVIES with a movie ", () => {
    const movies = [{ title: "The Avengers" }];
    const expected = {
      type: "LOAD_MOVIES",
      movies
    };

    const result = actions.loadMovies(movies);

    expect(result).toEqual(expected);
  });

  it("should return a type of LOGIN with a user ", () => {
    const user = "Anon";
    const expected = {
      type: "LOGIN",
      user
    };

    const result = actions.login(user);

    expect(result).toEqual(expected);
  });

  it("should return a type of SIGN_OUT with a user ", () => {
    const expected = {
      type: "SIGN_OUT"
    };

    const result = actions.signOut();

    expect(result).toEqual(expected);
  });

  it("should return a type of LOADING with a bool", () => {
    const bool = true;
    const expected = {
      type: "IS_LOADING",
      bool
    };
    const result = actions.loading(bool);
    expect(result).toEqual(expected);
  });

  it("should return a type of ISERROR with a bool", () => {
    const bool = true;
    const expected = {
      type: "IS_ERROR",
      bool
    };
    const result = actions.throwError(bool);
    expect(result).toEqual(expected);
  });
});
