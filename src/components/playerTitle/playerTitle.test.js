import React from 'react';
import {shallow} from 'enzyme';
import {PlayerTitle} from
    'components/playerTitle/PlayerTitle';

const playerTitle = (
    <PlayerTitle/>
)

describe('PlayerTitle', () => {
    it('should render', () => {
        const wrapper = shallow(playerTitle);
        expect(wrapper.exists()).toBe(true);
    })
})