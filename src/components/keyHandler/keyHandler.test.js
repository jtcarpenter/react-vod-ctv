import React from 'react';
import {shallow} from 'enzyme';
import {KeyHandler} from 'components/keyHandler/KeyHandler';

const keyHandler = (
    <KeyHandler>
    </KeyHandler>
);

describe('KeyHandler', () => {
    it('should render', () => {
        const wrapper = shallow(keyHandler);
        expect(wrapper.exists()).toBe(true);
    })
});