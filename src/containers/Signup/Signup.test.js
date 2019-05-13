import React from 'react';
import ReactDOM from 'react-dom';
import Signup from './Signup';
import {shallow} from 'enzyme';
import {validateEmail} from './Signup';
import { addUser } from '../../util/fetchData';
import { Provider } from 'react-redux';
//npm i redux-mock-store
import configureMockStore from 'redux-mock-store'


jest.mock('../../util/fetchData')

const mockStore = configureMockStore();
const store = mockStore({});

beforeEach(() => {
  addUser.mockImplementation(() => ({error: false}))
})

describe('Signup', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
    <Provider store={store}><Signup /></Provider>)
  })

it('should match the snapshot', () => {
  expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot if it renders the redirect', () => {
    wrapper.state().validUser = true
    expect(wrapper).toMatchSnapshot()
  });

  it('should have a default state', () => {
    const expected ={
      name: '',
      email: '',
      password: '',
      status: '',
      validUser: false,
      formCompleted: false,
      validEmail: false,
      duplicateUser: false,
      error: ''
    }
    expect(wrapper.state()).toEqual(expected)
  })

  describe('validateEmail', () => {

    it('should return validEmail as true if no email is valid', () => {
      const email = wrapper.state().email = 'bac@gmail.com';
      const result= wrapper.instance().validateEmail(email);
      expect(result).toEqual(true)
    });

    it('should return validEmail as false if email is invalid', () => {
      const email = wrapper.state().email = 'bacgmail';
      const result = wrapper.instance().validateEmail(email);
      expect(result).toEqual(false);
    })

    describe('handleChange', () => {

      const mockEvent = {target: {name: 'Anon', value: 'anon@gmail.com'}}

      it.skip('should target and update the name in default state', () => {
        const expected = 'Anon'
        wrapper.instance().handleChange(mockEvent)
        expect(wrapper.state().name).toEqual(expected)
      });

    })

  })

})