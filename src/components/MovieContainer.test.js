import React from 'react';
import ReactDOM from 'react-dom';
import MovieContainer from './MovieContainer';

describe('MovieContainer', () => {
  let wrapper

it('should match the snapshot with all data passed in', () => {
  expect(wrapper).toMatchSnapshot();
  });

})