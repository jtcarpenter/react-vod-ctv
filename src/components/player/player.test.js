import React from 'react';
import {shallow} from 'enzyme';
import {Player} from 'components/player/Player';

const playerData = {
    id: 1,
    src: 'test'
};
const navItems = [{}, {}];
const player = (
    <Player
        data={playerData}
        navItems={navItems}
    >
    </Player>
)

describe('Player', () => {
    it('should render', () => {
        const wrapper = shallow(player);
        expect(wrapper.exists()).toBe(true);
    })
})