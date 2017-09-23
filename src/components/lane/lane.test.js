import React from 'react';
import {shallow} from 'enzyme';
import {Lane} from 'components/lane/Lane';

const laneData = {items: []};
const lane = (
    <Lane
        data={laneData}
    >
    </Lane>
);

describe('Lane', () => {
    it('should render', () => {
        const wrapper = shallow(lane);
        expect(wrapper.exists()).toBe(true);
    })
});