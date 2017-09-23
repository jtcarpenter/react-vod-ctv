import * as homeTypes from 'constants/homeActionTypes';

const defaultState = {
    data: {
        items: []
    },
    cols: 3
}

export default function homeReducer(state = defaultState, action) {
    switch (action.type) {
        case homeTypes.LOADED:
            return Object.assign({}, state, {
                data: action.payload
            });
        default:
            return state;
    }
}