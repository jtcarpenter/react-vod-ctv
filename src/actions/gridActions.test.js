import * as actions from './gridActions'
import * as types from '../constants/gridActionTypes'

const gridData = {items: []};

describe('gridActions', () => {
    it('should create an action to load data', () => {
        const expectedAction = {
            type: types.LOAD
        }
        expect(actions.load()).toEqual(expectedAction);
    });

    it('should create an action to return data', () => {
        const expectedAction = {
            type: types.LOADED,
            payload: gridData
        }
        expect(actions.loaded(gridData)).toEqual(expectedAction);
    });
})
