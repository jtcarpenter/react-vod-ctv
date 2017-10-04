import React from 'react';
import {shallow} from 'enzyme';
import {Error} from 'components/error/Error';

const player = (
    <Error />
)

describe('Error', () => {
    it('should render', () => {
        const wrapper = shallow(player);
        expect(wrapper.exists()).toBe(true);
    })
})