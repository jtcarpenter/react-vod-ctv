import playerReducer from './playerReducer'
import * as types from '../constants/playerActionTypes'

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

describe('playerReducer', () => {
    it('should create return state with loaded data', () => {
        const actual = playerReducer(state, loadedAction);
        expect(actual.data).toEqual(loadedAction.payload);
    })
})
