import React from 'react';
import {shallow} from 'enzyme';
import {PlayButtonContainer} from
    'containers/playButtonContainer/PlayButtonContainer';

const item = {data: {id: 1}};
const playerState = {};
const playVideo = () => {};
const pauseVideo = () => {};
const playButtonContainer = (
    <PlayButtonContainer
        item={item}
        playerState={playerState}
        playVideo={playVideo}
        pauseVideo={pauseVideo}
    >
    </PlayButtonContainer>
);

describe('PlayButtonContainer', () => {
    it('should render', () => {
        const wrapper = shallow(playButtonContainer);
        expect(wrapper.exists()).toBe(true);
    })
})