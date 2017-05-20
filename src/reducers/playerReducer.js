import * as types from '../constants/playerActionTypes';

const defaultState = {
    data: {
        id: null,
        src: null
    }
}

export default function playerReducer(state = defaultState, action) {
    switch (action.type) {
        case types.LOADED:
            return Object.assign({}, state, {
                data: {
                    id: action.payload.id,
                    src: action.payload.src
                }
            });
        default:
            return state;
    }
}