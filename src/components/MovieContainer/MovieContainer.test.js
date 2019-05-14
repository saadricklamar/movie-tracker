import React from 'react';
import ReactDOM from 'react-dom';
import {MovieContainer} from './MovieContainer';
import { shallow } from 'enzyme';
import { mapStateToProps, mapDispatchToProps } from './MovieContainer'


// jest.mock('../../utils/apiCalls')
// jest.mock('../../thunks/fetchMovies')


describe("MovieContainer", () => {
  let wrapper;
  let mockEvent;
  let mockUser ={
    name: 'Bridgett'
  }
  let mockMovies
  const mockSignOut = jest.fn()
  const mockLoadMovies = jest.fn()


  beforeEach(() => {
    mockMovies=[{
      title: 'Avengers',
      vote_average: 10,
      id: 1,
      release_date: 2019,
      overview: 'a darn good movie',
      poster_path:  undefined 

    }]
    mockEvent = {target:{value: 'e'}}
    wrapper = shallow(<MovieContainer user={mockUser} movies={mockMovies}/>)
  })

it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
      });
    
it('should have default states', () => {
  const expected = {
    error: '',
    favorites: false,
    favoriteMovies: []
  }

    expect(wrapper.state()).toEqual(expected)
  });
});
