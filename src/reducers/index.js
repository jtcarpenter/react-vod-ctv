import {combineReducers} from 'redux';
import gridReducer from './gridReducer';
import playerReducer from './playerReducer';
import keyReducer from './keyReducer';

export default combineReducers({
    gridReducer,
    playerReducer,
    keyReducer
});