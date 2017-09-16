import React from 'react';
import {shallow} from 'enzyme';
import {HomeContainer, getFocusedLaneIndex} from './HomeContainer';

const homeData = {
    data: {
        items: [
            {category: 'one'},
            {category: 'one'},
            {category: 'two'},
            {category: 'one'}
        ]
    }
};
const laneData = [
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
];
const focusData = {currentFocus: '0'};
const mockLoad = () => ({});
const homeContainer = (
    <HomeContainer
        homeState={homeData}
        focusState={focusData}
        load={mockLoad}
    >
    </HomeContainer>
);

describe('HomeContainer', () => {
    it('should render', () => {
        const wrapper = shallow(homeContainer);
        expect(wrapper.exists()).toBe(true);
    })
});

describe('getFocusedLaneIndex', () => {
    it('should return correct lane index', () => {
        expect(getFocusedLaneIndex(laneData, 'test_1')).toEqual(0);
        expect(getFocusedLaneIndex(laneData, 'test_2')).toEqual(0);
        expect(getFocusedLaneIndex(laneData, 'test_3')).toEqual(1);
        expect(getFocusedLaneIndex(laneData, 'test_4')).toEqual(1);
    })
});