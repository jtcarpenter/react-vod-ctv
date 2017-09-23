import * as keyTypes from 'constants/keyActionTypes';

const defaultState = {
    lastKeyPressed: null
}

export default function keyReducer(state = defaultState, action) {
    switch (action.type) {
        case keyTypes.KEY_PRESSED:
            return Object.assign({}, state, {
                lastKeyPressed: action.payload
            });
        default:
            return Object.assign({}, state, {
                lastKeyPressed: null
            });
    }
}