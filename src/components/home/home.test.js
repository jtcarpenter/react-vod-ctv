import React from 'react';
import {shallow} from 'enzyme';
import {Home} from './Home';

const homeData = {data: {items: []}};
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
})