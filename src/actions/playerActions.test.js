import * as actions from './playerActions'
import * as types from '../constants/playerActionTypes'

const playerOpts = {id: 0};
const playerData = {
    id: 0,
    title: 'test',
    src: 'test'
}

describe('playerActions', () => {
    it('should create an action to load data', () => {
        const expectedAction = {
            type: types.LOAD,
            payload: playerOpts
        }
        expect(actions.load(playerOpts)).toEqual(expectedAction);
    });

    it('should create an action to return data', () => {
        const expectedAction = {
            type: types.LOADED,
            payload: playerData
        }
        expect(actions.loaded(playerData)).toEqual(expectedAction);
    });

    it('should create an action to attempt to start playback', () => {
        const expectedAction = {
            type: types.PLAY_VIDEO
        }
        expect(actions.playVideo()).toEqual(expectedAction);
    });

    it('should create an action to attempt to pause playback', () => {
        const expectedAction = {
            type: types.PAUSE_VIDEO
        }
        expect(actions.pauseVideo()).toEqual(expectedAction);
    });

    it('should create an action for play did start', () => {
        const expectedAction = {
            type: types.DID_PLAY_VIDEO
        }
        expect(actions.didPlayVideo()).toEqual(expectedAction);
    });

    it('should create an action for play did pause', () => {
        const expectedAction = {
            type: types.DID_PAUSE_VIDEO
        }
        expect(actions.didPauseVideo()).toEqual(expectedAction);
    });
})