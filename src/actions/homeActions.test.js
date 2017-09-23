import * as actions from 'actions/homeActions'
import * as homeTypes from 'constants/homeActionTypes'

const homeData = {items: []};

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
});