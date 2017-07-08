import {combineReducers} from 'redux';
import homeReducer from './homeReducer';
import playerReducer from './playerReducer';
import keyReducer from './keyReducer';
import focusReducer from './focusReducer';

export default combineReducers({
    homeReducer,
    playerReducer,
    keyReducer,
    focusReducer
});