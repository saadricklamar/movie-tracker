import React from 'react';
import ReactDOM from 'react-dom';
import MovieCard from './MovieCard';



describe('MovieCard', () => {
    let wrapper
  
  it('should match the snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
    });
  
  
  
  })