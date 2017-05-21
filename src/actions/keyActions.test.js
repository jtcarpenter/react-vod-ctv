import * as actions from './keyActions'
import * as types from '../constants/keyActionTypes'

const keyType = 'testKey';
const keyData = {keyType};

describe('keyActions', () => {
    it('should create an action to return a key', () => {
        const expectedAction = {
            type: types.KEY_PRESSED,
            payload: keyData
        }
        expect(actions.keyPressed(keyType)).toEqual(expectedAction);
    });
})
