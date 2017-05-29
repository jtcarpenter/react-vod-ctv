import * as gridTypes from '../constants/gridActionTypes';

const defaultState = {
    data: {
        items: []
    },
    focusedItem: 0,
    cols: 3,
    lastKeyPressed: null
}

export default function gridReducer(state = defaultState, action) {
    switch (action.type) {
        case gridTypes.LOADED:
            return Object.assign({}, state, {
                data: action.payload
            });
        default:
            return state;
    }
}