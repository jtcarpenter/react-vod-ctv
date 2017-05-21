import keyReducer from './keyReducer'
import * as keyTypes from '../constants/keyActionTypes'

const keyType = 'testKey';
const state = {
    lastKeyPressed: {
        keyType
    }
}
const keyPressedAction = {
    type: keyTypes.KEY_PRESSED,
    payload: {keyType}
}
const nonKeyPressedAction = {
    type: 'nonKeyPressedActionType'
}

describe('keyReducer', () => {
    it('should create return state with keyPressed', () => {
        const actual = keyReducer(state, keyPressedAction);
        expect(actual.lastKeyPressed).toEqual(keyPressedAction.payload);
    })

    it('should create return state with keyPressed reset to null', () => {
        const actual = keyReducer(state, nonKeyPressedAction);
        expect(actual.lastKeyPressed).toEqual(null);
    })
})
