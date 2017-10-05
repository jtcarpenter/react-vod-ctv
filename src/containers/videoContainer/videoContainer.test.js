import React from 'react';
import {shallow} from 'enzyme';
import {VideoContainer} from 'containers/videoContainer/VideoContainer';

const videoData = {
    src: 'test'
};
const player = (
    <VideoContainer
        data={videoData}
    />
)

describe('VideoContainer', () => {
    it('should render', () => {
        const wrapper = shallow(player);
        expect(wrapper.exists()).toBe(true);
    })
})