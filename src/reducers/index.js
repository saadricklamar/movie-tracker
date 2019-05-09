import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import usersReducer from './usersReducer';


const rootReducer = combineReducers({
    users: usersReducer,
    error: errorReducer
})

export default rootReducer;