import homeReducer from 'reducers/homeReducer'
import * as homeTypes from 'constants/homeActionTypes'

const state = {
    data: {
        items: []
    }
}
const error = 'an error';
const loadedAction = {
    type: homeTypes.LOADED,
    payload: {items: []}
}
const failedAction = {
    type: homeTypes.FAILED,
    payload: {error}
}

describe('homeReducer', () => {
    it('should create return state with loaded data', () => {
        const actual = homeReducer(state, loadedAction);
        expect(actual.data).toEqual(loadedAction.payload);
    });

    it('should create return state with error on after fail action', () => {
        const actual = homeReducer(state, failedAction);
        expect(actual.error).toEqual(failedAction.payload.error);
    });
});