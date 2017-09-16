import React from 'react';
import {shallow} from 'enzyme';
import {Home} from './Home';

const homeData = {
    lanes: [
        {
            items: [
                {nav: {focusKey: 'test_1'}},
                {nav: {focusKey: 'test_2'}},
            ]
        },
        {
            items: [
                {nav: {focusKey: 'test_3'}},
                {nav: {focusKey: 'test_4'}},
            ]
        }
    ]
};
const home = (
    <Home
        data={homeData}
    >
    </Home>
);

describe('Home', () => {
    it('should render', () => {
        const wrapper = shallow(home);
        expect(wrapper.exists()).toBe(true);
    })
});