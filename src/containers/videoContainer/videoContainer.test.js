import React from 'react';
import {shallow} from 'enzyme';
import {VideoContainer} from 'containers/videoContainer/VideoContainer';

const videoData = {
    src: 'test'
};
const playerState = {}
const onDidPlay = () => {}
const onDidPause = () => {}
const player = (
    <VideoContainer
        data={videoData}
        playerState={playerState}
        onDidPlay={onDidPlay}
        onDidPause={onDidPause}
    />
)

describe('VideoContainer', () => {
    it('should render', () => {
        const wrapper = shallow(player);
        expect(wrapper.exists()).toBe(true);
    })
})