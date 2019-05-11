import * as actions from './index';

describe('actions', () => {
    it('should return a type of ADD_TODO with a movie ', () => {

        const movies = [{ title: 'The Avengers'}];
        const expected = {
            type:'LOAD_MOVIES',
            movies
        };

        const result = actions.loadMovies(movies);

        expect(result).toEqual(expected);
    });

    it('should return a type of LOGIN with a user ', () => {
        const user = 'Anon'
        const expected = {
            type:'LOGIN',
            user
        };

        const result = actions.login(user);

        expect(result).toEqual(expected);
    });

    it('should return a type of SIGN_OUT with a user ', () => {
        const expected = {
            type:'SIGN_OUT',
        };

        const result = actions.signOut();

        expect(result).toEqual(expected);
    });

  it('should return a type of LOADING with favorites', () => {
    const favorites = []
    const expected = {
      type: 'IS_LOADING',
      favorites
    }
    const result = actions.loading(favorites)
    expect(result).toEqual(expected)
  })


})
