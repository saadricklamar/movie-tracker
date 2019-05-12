import { login }  from '../actions/';
import {signUserIn} from './signUserIn';

describe('signUserIn', () => {
    let mockUrl
    let mockDispatch

    beforeEach(() => {
        mockUrl = 'www.mockmovieurl.com'
        mockDispatch = jest.fn()
       
    })

    it('should dispatch login', async () => {
        const mockUser = { id: 1, name: 'Anon', password: 'moviebuff', email: 'anon@gmail.com'}
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
          ok: true,
          json: () => Promise.resolve({
            user: mockUser
          })
        }))
        const thunk = signUserIn(mockUrl)
        await thunk(mockDispatch)
        expect(mockDispatch).toHaveBeenCalledWith(login())
      });

      it('should return an error message when fetch fails', async () => {
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
          ok: false
        }))
        const thunk = signUserIn(mockUrl) 
        const result = await thunk(mockDispatch)
        expect(result).toEqual(Error('Error: Wrong user information'))
      })
})
