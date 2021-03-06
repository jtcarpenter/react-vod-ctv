import React from 'react';
import {shallow} from 'enzyme';
import {BackButtonContainer} from
    'containers/backButtonContainer/BackButtonContainer';

const item = {data: {id: 1}};
const handleBack = () => {};
const backButtonContainer = (
    <BackButtonContainer
        item={item}
        handleBack={handleBack}
    >
    </BackButtonContainer>
);

describe('BackButtonContainer', () => {
    it('should render', () => {
        const wrapper = shallow(backButtonContainer);
        expect(wrapper.exists()).toBe(true);
    })
})