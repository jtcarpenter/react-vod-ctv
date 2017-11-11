import * as playerTypes from 'constants/playerActionTypes';
import * as playerStates from 'constants/playerStates';
import * as copy from 'constants/copy';

const defaultState = {
    movie: {
        id: null,
        title: null,
        src: null
    },
    videoState: null
}

export const movieSelector = (movies, movie) => {
    let title = null;
    if (movies[movie.id]) {
        ({title} = movies[movie.id]);
    } else {
        title = copy.DEEP_LINK_TITLE;
    }
    return Object.assign({}, movie, {
        title
    });
}

export default function playerReducer(state = defaultState, action) {
    switch (action.type) {
        case playerTypes.LOADED:
            return Object.assign({}, state, {
                movie: {
                    id: action.payload.id,
                    src: action.payload.src
                }
            });
        case playerTypes.FAILED:
            return Object.assign({}, state, {
                error: action.payload.error
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