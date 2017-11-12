import React from 'react';
import {shallow} from 'enzyme';
import {PlayerCtrl} from 'components/playerCtrl/PlayerCtrl';

const playerCtrl = (
    <PlayerCtrl />
)

describe('PlayerCtrl', () => {
    it('should render', () => {
        const wrapper = shallow(playerCtrl);
        expect(wrapper.exists()).toBe(true);
    })
})