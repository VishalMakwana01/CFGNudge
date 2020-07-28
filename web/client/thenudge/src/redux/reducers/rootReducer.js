// Combining different reducers
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import studentReducer from './studentReducer';

export default combineReducers({
    auth: authReducer,
    students: studentReducer
})