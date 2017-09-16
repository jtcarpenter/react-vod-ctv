import React from 'react';
import {shallow} from 'enzyme';
import {Home, getLaneIndex} from './Home';

const homeData = {
    lanes: [
        {
            items: [
                {nav: {focusKey: 'test_1'}},
                {nav: {focusKey: 'test_2'}},
            ]
        },
        {
            items: [
                {nav: {focusKey: 'test_3'}},
                {nav: {focusKey: 'test_4'}},
            ]
        }
    ]
};
const home = (
    <Home
        data={homeData}
    >
    </Home>
);

describe('Home', () => {
    it('should render', () => {
        const wrapper = shallow(home);
        expect(wrapper.exists()).toBe(true);
    })
});

describe('getLaneIndex', () => {
    it('should return correct lane index', () => {
        expect(getLaneIndex(homeData.lanes, 'test_1')).toEqual(0);
        expect(getLaneIndex(homeData.lanes, 'test_2')).toEqual(0);
        expect(getLaneIndex(homeData.lanes, 'test_3')).toEqual(1);
        expect(getLaneIndex(homeData.lanes, 'test_4')).toEqual(1);
    })
})