import playerReducer from 'reducers/playerReducer';
import * as playerTypes from 'constants/playerActionTypes';
import * as playerStates from 'constants/playerStates';

const state = {
    movie: {
        id: null,
        src: null
    }
}
const error = 'an error';
const loadedAction = {
    type: playerTypes.LOADED,
    payload: {
        id: 1,
        src: 'test'
    }
}
const failedAction = {
    type: playerTypes.FAILED,
    payload: {error}
}
const playVideoAction = {
    type: playerTypes.PLAY_VIDEO
}
const pauseVideoAction = {
    type: playerTypes.PAUSE_VIDEO
}
const didPlayVideoAction = {
    type: playerTypes.DID_PLAY_VIDEO
}
const didPauseVideoAction = {
    type: playerTypes.DID_PAUSE_VIDEO
}

describe('playerReducer', () => {
    it('should create return state with loaded data', () => {
        const actual = playerReducer(state, loadedAction);
        expect(actual.movie).toEqual(loadedAction.payload);
    });

    it('should create return state with error on after fail action', () => {
        const actual = playerReducer(state, failedAction);
        expect(actual.error).toEqual(failedAction.payload.error);
    });

    it('should return videoState oF WILL_PLAY', () => {
        const actual = playerReducer(state, playVideoAction);
        expect(actual.videoState).toEqual(playerStates.WILL_PLAY);
    });

    it('should return videoState oF WILL_PAUSE', () => {
        const actual = playerReducer(state, pauseVideoAction);
        expect(actual.videoState).toEqual(playerStates.WILL_PAUSE);
    });

    it('should return videoState oF PLAYING', () => {
        const actual = playerReducer(state, didPlayVideoAction);
        expect(actual.videoState).toEqual(playerStates.PLAYING);
    });

    it('should return videoState oF PAUSED', () => {
        const actual = playerReducer(state, didPauseVideoAction);
        expect(actual.videoState).toEqual(playerStates.PAUSED);
    });
});