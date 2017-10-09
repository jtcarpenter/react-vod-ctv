import React from 'react';
import {shallow} from 'enzyme';
import {LaneContainer} from 'containers/laneContainer/LaneContainer';

const laneData = {};
const handleSelect = () => {};
const currentFocus = null;
const initialFocusKey = 'test';
const laneContainer = (
    <LaneContainer
        data={laneData}
        handleSelect={handleSelect}
        currentFocus={currentFocus}
        initialFocusKey={initialFocusKey}
    >
    </LaneContainer>
);

describe('LaneContainer', () => {
    it('should render', () => {
        const wrapper = shallow(laneContainer);
        expect(wrapper.exists()).toBe(true);
    })
})