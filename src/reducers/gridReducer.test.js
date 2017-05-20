import gridReducer from './gridReducer'
import * as types from '../constants/gridActionTypes'

const state = {
    data: {
        items: []
    }
}
const loadedAction = {
    type: types.LOADED,
    payload: {items: []}
}

describe('gridReducer', () => {
    it('should create return state with loaded data', () => {
        const actual = gridReducer(state, loadedAction);
        expect(actual.data).toEqual(loadedAction.payload);
    })
})
