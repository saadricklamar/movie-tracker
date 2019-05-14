import React from 'react';
import ReactDOM from 'react-dom';
import MovieContainer from './MovieContainer';
import { shallow } from 'enzyme';

describe('MovieContainer', () => {
  let wrapper;
  let mockEvent;
  beforeEach(() => {
    mockEvent = {target:{value: 'e'}}
    wrapper = shallow(<MovieContainer/>)
  })
it('should match the snapshot with all data passed in', () => {
  expect(wrapper).toMatchSnapshot();
  });
it('Should have default states', () => {
    expect(wrapper.state()).toEqual ({
      favorites: '',
      favoriteMovies: []
  });
});
})