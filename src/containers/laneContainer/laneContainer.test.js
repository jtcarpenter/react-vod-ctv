import React from 'react';
import {shallow} from 'enzyme';
import {LaneContainer} from 'containers/laneContainer/LaneContainer';

const laneContainer = (
    <LaneContainer
    >
    </LaneContainer>
);

describe('LaneContainer', () => {
    it('should render', () => {
        const wrapper = shallow(laneContainer);
        expect(wrapper.exists()).toBe(true);
    })
})