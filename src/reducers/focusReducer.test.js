import focusReducer from './focusReducer'
import * as focusTypes from '../constants/focusActionTypes'

const focusKey = 'testKey';
const state = {
    currentFocus: focusKey
}
const keyPressedAction = {
    type: focusTypes.CHANGE_FOCUS,
    payload: focusKey
}

describe('focusReducer', () => {
    it('should change currentFocus to the new key', () => {
        const actual = focusReducer(state, keyPressedAction);
        expect(actual.currentFocus).toEqual(keyPressedAction.payload);
    })
})