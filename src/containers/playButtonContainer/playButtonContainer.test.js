import React from 'react';
import {shallow} from 'enzyme';
import {PlayButtonContainer} from './PlayButtonContainer';

const item = {data: {id: 1}};
const playButtonContainer = (
    <PlayButtonContainer
        item={item}
    >
    </PlayButtonContainer>
);

describe('PlayButtonContainer', () => {
    it('should render', () => {
        const wrapper = shallow(playButtonContainer);
        expect(wrapper.exists()).toBe(true);
    })
})