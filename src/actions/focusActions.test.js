import * as actions from './focusActions'
import * as focusTypes from '../constants/focusActionTypes'

const focusKey = 'testKey';
const focusData = {focusKey};

describe('focusActions', () => {
    it('should create an action to return a key', () => {
        const expectedAction = {
            type: focusTypes.CHANGE_FOCUS,
            payload: focusData
        }
        expect(actions.changeFocus(focusKey)).toEqual(expectedAction);
    });
})