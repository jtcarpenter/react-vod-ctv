import {combineReducers} from 'redux';
import homeReducer from 'reducers/homeReducer';
import playerReducer from 'reducers/playerReducer';
import keyReducer from 'reducers/keyReducer';
import focusReducer from 'reducers/focusReducer';

export default combineReducers({
    homeReducer,
    playerReducer,
    keyReducer,
    focusReducer
});