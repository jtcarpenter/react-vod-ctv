import * as types from 'constants/playerActionTypes';

export function load(payload) {
    return {
        type: types.LOAD,
        payload
    };
}

export function loaded(payload) {
    return {
        type: types.LOADED,
        payload
    }
}

export function playVideo() {
    return {
        type: types.PLAY_VIDEO
    }
}

export function pauseVideo() {
    return {
        type: types.PAUSE_VIDEO
    }
}

export function didPlayVideo() {
    return {
        type: types.DID_PLAY_VIDEO
    }
}

export function didPauseVideo() {
    return {
        type: types.DID_PAUSE_VIDEO
    }
}