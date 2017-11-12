import React from 'react';
import {shallow} from 'enzyme';
import {ContentButtonTitle} from
    'components/contentButtonTitle/ContentButtonTitle';

const contentButtonTitle = (
    <ContentButtonTitle/>
)

describe('ContentButtonTitle', () => {
    it('should render', () => {
        const wrapper = shallow(contentButtonTitle);
        expect(wrapper.exists()).toBe(true);
    })
})