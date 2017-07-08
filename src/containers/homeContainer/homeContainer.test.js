import React from 'react';
import {shallow} from 'enzyme';
import {HomeContainer} from './HomeContainer';

const gridData = {data: {items: []}};
const keyData = {lastKeyPressed: null};
const mockLoad = () => ({});
const homeContainer = (
    <HomeContainer
        gridState={gridData}
        keyState={keyData}
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