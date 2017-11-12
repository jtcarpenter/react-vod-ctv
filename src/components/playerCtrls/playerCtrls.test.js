import React from 'react';
import {shallow} from 'enzyme';
import {PlayerCtrls} from
    'components/playerCtrls/PlayerCtrls';

const playerCtrls = (
    <PlayerCtrls/>
)

describe('PlayerCtrls', () => {
    it('should render', () => {
        const wrapper = shallow(playerCtrls);
        expect(wrapper.exists()).toBe(true);
    })
})