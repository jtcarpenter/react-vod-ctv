import * as playerTypes from '../constants/playerActionTypes';
import * as playerStates from '../constants/playerStates';

const defaultState = {
    data: {
        id: null,
        src: null
    },
    videoState: null
}

export default function playerReducer(state = defaultState, action) {
    switch (action.type) {
        case playerTypes.LOADED:
            return Object.assign({}, state, {
                data: {
                    id: action.payload.id,
                    src: action.payload.src
                }
            });
        case playerTypes.PLAY_VIDEO:
            return Object.assign({}, state, {
                videoState: playerStates.WILL_PLAY
            });
        case playerTypes.PAUSE_VIDEO:
            return Object.assign({}, state, {
                videoState: playerStates.WILL_PAUSE
            });
        case playerTypes.DID_PLAY_VIDEO:
            return Object.assign({}, state, {
                videoState: playerStates.PLAYING
            });
        case playerTypes.DID_PAUSE_VIDEO:
            return Object.assign({}, state, {
                videoState: playerStates.PAUSED
            });
        default:
            return state;
    }
}