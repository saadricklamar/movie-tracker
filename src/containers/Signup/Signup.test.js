import React from 'react';
import ReactDOM from 'react-dom';
import Signup from './Signup';

describe('Signup', () => {
  let wrapper

it('should match the snapshot with all data passed in', () => {
  expect(wrapper).toMatchSnapshot();
  });

})