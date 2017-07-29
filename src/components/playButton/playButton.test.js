import React from 'react';
import {shallow} from 'enzyme';
import {PlayButton} from './PlayButton';

const handlePlay = () => {};
const handlePause = () => {};
const player = (
    <PlayButton
        handlePlay={handlePlay}
        handlePause={handlePause}
    />
)

describe('PlayButton', () => {
    it('should render', () => {
        const wrapper = shallow(player);
        expect(wrapper.exists()).toBe(true);
    })
})