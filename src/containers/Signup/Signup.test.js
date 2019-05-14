import React from 'react';
import ReactDOM from 'react-dom';
import {Signup} from './Signup';
import {shallow} from 'enzyme';
import {validateEmail} from './Signup';
import { addUser } from '../../util/fetchData';
import { Provider } from 'react-redux';
//npm i redux-mock-store
import configureMockStore from 'redux-mock-store'


jest.mock('../../util/fetchData')

const mockStore = configureMockStore();
// const store = mockStore({});
const mockChangeEvent = {
  target: {
    name:'name',
    value: 'Anon'
  }
}

beforeEach(() => {
  addUser.mockImplementation(() => ({error: false}))
})

describe('Signup', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
    <Signup />)
  })

it('should match the snapshot', () => {
  expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot if it renders the redirect', () => {
    wrapper.state().validUser = true
    expect(wrapper).toMatchSnapshot()
  });


  it('should have a defult state', () => {
    const mockDefaultState = {
      name: '',
      email: '',
      password: '',
      status: '',
      validUser: false,
      formCompleted: false,
      validEmail: false,
      duplicateUser: false,
      error: ''
    };

    wrapper = shallow(<Signup />, { disableLifecycleMethods: true });
    expect(wrapper.state()).toEqual(mockDefaultState);
  });


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

      it('should target and update the name in default state', () => {
        const expected = 'Anon'
        wrapper.instance().handleChange(mockChangeEvent)
        expect(wrapper.state().name).toEqual(expected)
      });

    })

  })

})