import React from 'react';
import {shallow} from 'enzyme';
import {PlayerContainer} from 'containers/playerContainer/PlayerContainer';

const playerData = {data: {id: 1}};
const mockLoad = () => ({});
const mockMatch = {params: {}}
const mockKeyState = {};
const mockPlayVideo = () => {};
const mockPauseVideo = () => {};
const playerContainer = (
    <PlayerContainer
        load={mockLoad}
        playerState={playerData}
        match={mockMatch}
        keyState={mockKeyState}
        playVideo={mockPlayVideo}
        pauseVideo={mockPauseVideo}
    >
    </PlayerContainer>
);

describe('PlayerContainer', () => {
    it('should render', () => {
        const wrapper = shallow(playerContainer);
        expect(wrapper.exists()).toBe(true);
    })
})