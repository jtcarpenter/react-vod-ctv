import * as actions from 'actions/homeActions'
import * as homeTypes from 'constants/homeActionTypes'

const homeData = {items: []};
const error = 'an error';

describe('homeActions', () => {
    it('should create an action to load data', () => {
        const expectedAction = {
            type: homeTypes.LOAD
        }
        expect(actions.load()).toEqual(expectedAction);
    });

    it('should create an action to return data', () => {
        const expectedAction = {
            type: homeTypes.LOADED,
            payload: homeData
        }
        expect(actions.loaded(homeData)).toEqual(expectedAction);
    });

    it('should create an action to return an error', () => {
        const expectedAction = {
            type: homeTypes.FAILED,
            payload: error
        }
        expect(actions.failed(error)).toEqual(expectedAction);
    });
});