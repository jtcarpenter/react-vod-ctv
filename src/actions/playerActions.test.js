import * as actions from './playerActions'
import * as types from '../constants/playerActionTypes'

describe('playerActions', () => {
    it('should create an action to increment counter', () => {
        const expectedAction = {
            type: types.LOAD
        }
        expect(actions.load()).toEqual(expectedAction);
    })
})
