import playerReducer from 'reducers/playerReducer';
import * as types from 'constants/playerActionTypes';
import * as playerStates from 'constants/playerStates';

const state = {
    data: {
        id: null,
        src: null
    }
}
const loadedAction = {
    type: types.LOADED,
    payload: {
        id: 1,
        src: 'test'
    }
}
const playVideoAction = {
    type: types.PLAY_VIDEO
}
const pauseVideoAction = {
    type: types.PAUSE_VIDEO
}
const didPlayVideoAction = {
    type: types.DID_PLAY_VIDEO
}
const didPauseVideoAction = {
    type: types.DID_PAUSE_VIDEO
}

describe('playerReducer', () => {
    it('should create return state with loaded data', () => {
        const actual = playerReducer(state, loadedAction);
        expect(actual.data).toEqual(loadedAction.payload);
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