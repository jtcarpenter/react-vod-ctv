import React from 'react';
import {shallow} from 'enzyme';
import {BackButton} from 'components/backButton/BackButton';

const player = (
    <BackButton />
)

describe('BackButton', () => {
    it('should render', () => {
        const wrapper = shallow(player);
        expect(wrapper.exists()).toBe(true);
    })
})