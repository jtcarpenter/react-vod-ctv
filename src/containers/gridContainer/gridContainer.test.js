import React from 'react';
import {shallow} from 'enzyme';
import {GridContainer} from './GridContainer';

const gridData = {data: {items: []}};
const keyData = {lastKeyPressed: null};
const mockDispatch = () => ({});
const gridContainer = (
    <GridContainer
        gridState={gridData}
        keyState={keyData}
        dispatch={mockDispatch}
    >
    </GridContainer>
);

describe('GridContainer', () => {
    it('should render', () => {
        const wrapper = shallow(gridContainer);
        expect(wrapper.exists()).toBe(true);
    })
})
