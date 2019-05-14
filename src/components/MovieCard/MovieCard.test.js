import React from 'react';
import ReactDOM from 'react-dom';
import {MovieCard} from './MovieCard';
import { shallow, mount, render } from 'enzyme';
import {mapStateToProps} from  './MovieCard'
import * as actions from '../../util/fetchData';
import { Provider } from 'react-redux';

jest.mock('../../util/fetchData')



describe('MovieCard', () => {
    let wrapper;
    let mockMovie;
    let enzyme = require('enzyme');

    
    beforeEach(() => {
      mockMovie={
        title: 'Avengers',
        vote_average: 10,
        id: 1,
        release_date: 2019,
        overview: 'a darn good movie',
        poster_path:  undefined 

      }
      wrapper = enzyme.shallow(
        <MovieCard movie={mockMovie} user_id={1}/>
      );
  
    })

    describe('MovieCard', () => {

      it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
      });

      describe('ComponentDidMount', () => {
        it('should call getFavorites on componentDidMount', async () => {
          actions.getFavorites.mockImplementation(() => ({data: [mockMovie]}))
          wrapper = shallow(<MovieCard movie={mockMovie} user_id={1}/>, { disableLifecycleMethods: true })
          await wrapper.instance().componentDidMount()
          expect(actions.getFavorites).toHaveBeenCalled()
        });


        it('set favorite to true if its a current favorite', async () => {
          actions.getFavorites.mockImplementation(() => ({data: [{movie_id: 1}]}))
          wrapper = shallow(<MovieCard movie={mockMovie} user_id={1}/>, { disableLifecycleMethods: true })
          await wrapper.instance().componentDidMount()
          expect(wrapper.state().favorite).toBe(true)
        });

        it('set favorite to false if its a current favorite', async () => {
          actions.getFavorites.mockImplementation(() => ({data: [{movie_id: 2}]}))
          wrapper = shallow(<MovieCard movie={mockMovie} user_id={1}/>, { disableLifecycleMethods: true })
          await wrapper.instance().componentDidMount()
          expect(wrapper.state().favorite).toBe(false)
        })

      })
    })
})
