import React from 'react';
import {shallow} from 'enzyme';
import {ProgressBar} from './ProgressBar';

const player = (
    <ProgressBar />
)

describe('ProgressBar', () => {
    it('should render', () => {
        const wrapper = shallow(player);
        expect(wrapper.exists()).toBe(true);
    })
})