import React from 'react';
import ReactDOM from 'react-dom';
import MovieCard from './MovieCard';
import { shallow, mount, render } from 'enzyme';
import {mapStateToProps} from './MovieCard'
import * as actions from '../../util/fetchData';

jest.mock('../../util/fetchData')


describe('MovieCard', () => {
    let wrapper;
    let mockMovie;
    let enzyme = require('enzyme');

    
    beforeEach(() => {
      mockMovie={
        title: 'Avengers',
        rating: 10,
        id: 1,
        releaseDate: 2019,
        synopsis: 'a darn good movie',
        posterImage:  undefined 

      }
      wrapper = enzyme.shallow(
        <MovieCard movie={mockMovie} user_id={1}/>
      );
  
    })

    describe('MovieCard', () => {

      it.skip('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
      });

      describe('ComponentDidMount', () => {
        it.skip('should call getFavorites on componentDidMount', async () => {
          actions.getFavorites.mockImplementation(() => ({data: [mockMovie]}))
          wrapper = shallow(<MovieCard movie={mockMovie} user_id={1}/>, { disableLifecycleMethods: true })
          await wrapper.instance().componentDidMount()
          expect(actions.getFavorites).toHaveBeenCalled()
        });


        it.skip('set favorite to true if its a current favorite', async () => {
          actions.getFavorites.mockImplementation(() => ({data: [{movie_id: 1}]}))
          wrapper = shallow(<MovieCard movie={mockMovie} user_id={1}/>, { disableLifecycleMethods: true })
          await wrapper.instance().componentDidMount()
          expect(wrapper.state().favorite).toBe(true)
        });

        it.skip('set favorite to false if its a current favorite', async () => {
          actions.getFavorites.mockImplementation(() => ({data: [{movie_id: 2}]}))
          wrapper = shallow(<MovieCard movie={mockMovie} user_id={1}/>, { disableLifecycleMethods: true })
          await wrapper.instance().componentDidMount()
          expect(wrapper.state().favorite).toBe(false)
        })

      })
    })
})
