import moviesReducer from './moviesReducer';
import * as actions from '../actions';

describe('moviesReducer', () => {
    it('should return a default state', () => {
        const expected = []
        const result = moviesReducer(undefined, {})
        expect(result).toEqual(expected);
    });

    it('should return the state with movies', () => {
        const defaultState = [];
        const movie = {
        results: [{
            title: 'Avengers',
            vote_average: 10,
            id: 1,
            release_date: 2019,
            overview: 'a darn good movie',
            poster_path:  undefined 
        }]
    }
        const expected = [{
                title: 'Avengers',
                vote_average: 10,
                id: 1,
                release_date: 2019,
                overview: 'a darn good movie',
                poster_path: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2undefined'
        }]  
        
        const result = moviesReducer(defaultState, actions.loadMovies(movie))

        expect(result).toEqual(expected)

    })
})