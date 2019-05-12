import { login }  from '../actions/';

export const signUserIn = (user) => {
    return async (dispatch) => {
        try {
            const response = await fetch('http://localhost:3000/api/users/', {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json()
            dispatch(login(data.data))
        } catch(error) {
            return new Error('Error: Wrong user information')
        }
    }
    
}

//set to empty global object 
//override user data state with empty data
   