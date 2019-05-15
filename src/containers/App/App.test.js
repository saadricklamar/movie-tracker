import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {shallow, mount} from 'enzyme';

describe("App", () => {
  let wrapper;

  it("should match the snapshot with all data passed in", () => {
    expect(wrapper).toMatchSnapshot();
  });


  })
