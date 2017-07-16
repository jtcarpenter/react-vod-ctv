import React from 'react';
import {shallow} from 'enzyme';
import {HomeContainer} from './HomeContainer';

const homeData = {data: {items: []}};
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
})