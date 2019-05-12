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
            title: 'Avengers',
            rating: 10,
            id: 1,
            releaseDate: 2019,
            synopsis: 'a darn good movie',
            posterImage:  undefined 
        }  
        const expected = [{
                title: 'Avengers',
                rating: 10,
                id: 1,
                releaseDate: 2019,
                synopsis: 'a darn good movie',
                posterImage:  undefined 
        }]  
        
        const result = moviesReducer(defaultState, actions.loadMovies(movie))

        expect(result).toEqual(expected)

    })
})