import React from 'react';
import {shallow} from 'enzyme';
import {PlayerContainer} from 'containers/playerContainer/PlayerContainer';

const playerData = {data: {id: 1}};
const mockLoad = () => ({});
const mockMatch = {params: {}}
const playerContainer = (
    <PlayerContainer
        load={mockLoad}
        playerState={playerData}
        match={mockMatch}
    >
    </PlayerContainer>
);

describe('PlayerContainer', () => {
    it('should render', () => {
        const wrapper = shallow(playerContainer);
        expect(wrapper.exists()).toBe(true);
    })
})