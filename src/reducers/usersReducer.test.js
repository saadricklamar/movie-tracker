import usersReducer from './usersReducer';
import * as actions from '../actions';

describe('usersReducer', () => {


    it('should return the default state', () => {
        const expected = {name: null}
        const result = usersReducer(undefined, {})
        expect(result).toEqual(expected)
      });

  it('should return the state with user information', () => {
    const initialState = {}
    const user = { id: 1, name: 'Anon', email: 'moviebuff@gmail.com', password:'movaaayyysss' }
    const expectedUser = {id: 1, name: 'Anon', email: 'moviebuff@gmail.com', password:'movaaayyysss'}
    const result = usersReducer(initialState, actions.login(user))
    expect(result).toEqual(expectedUser)

  });

  it('should return state as an empty object when the user signs out', () => {
    const initialState = { id: 1, name: 'Anon', email: 'moviebuff@gmail.com', password:'movaaayyysss' }
    const expected = {}
    const result = usersReducer(initialState, actions.signOut())
    expect(result).toEqual(expected)
  })



})