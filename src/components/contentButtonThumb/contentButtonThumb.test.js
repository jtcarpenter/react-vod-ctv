import React from 'react';
import {shallow} from 'enzyme';
import {ContentButtonThumb} from
    'components/contentButtonThumb/ContentButtonThumb.jsx';

const contentButtonThumb = (
    <ContentButtonThumb />
)

describe('ContentButtonThumb', () => {
    it('should render', () => {
        const wrapper = shallow(contentButtonThumb);
        expect(wrapper.exists()).toBe(true);
    })
})