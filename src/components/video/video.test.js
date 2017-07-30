import React from 'react';
import {shallow} from 'enzyme';
import {Video} from './Video';

const videoData = {
    src: 'test'
};
const player = (
    <Video
        data={videoData}
    />
)

describe('Video', () => {
    it('should render', () => {
        const wrapper = shallow(player);
        expect(wrapper.exists()).toBe(true);
    })
})