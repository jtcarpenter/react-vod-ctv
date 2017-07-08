import React from 'react';
import {shallow} from 'enzyme';
import {GridRow} from './GridRow';

const gridRowData = [];
const gridRow = (
    <GridRow
        row={gridRowData}
    >
    </GridRow>
);

describe('GridRow', () => {
    it('should render', () => {
        const wrapper = shallow(gridRow);
        expect(wrapper.exists()).toBe(true);
    })
});