import {combineReducers} from 'redux';
import gridReducer from './gridReducer';
import playerReducer from './playerReducer';
import keyReducer from './keyReducer';
import focusReducer from './focusReducer';

export default combineReducers({
    gridReducer,
    playerReducer,
    keyReducer,
    focusReducer
});