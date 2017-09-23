import homeReducer from 'reducers/homeReducer'
import * as homeTypes from 'constants/homeActionTypes'

const state = {
    data: {
        items: []
    }
}
const loadedAction = {
    type: homeTypes.LOADED,
    payload: {items: []}
}

describe('homeReducer', () => {
    it('should create return state with loaded data', () => {
        const actual = homeReducer(state, loadedAction);
        expect(actual.data).toEqual(loadedAction.payload);
    })
});