import React from 'react';
import {shallow, mount} from 'enzyme';
import {ContentButton} from './ContentButton';
import {MemoryRouter} from 'react-router-dom';

const contentButtonData = {
    id: 1,
    title: 'test'
};
const contentButtonSelectHandler = () => null;
const contentButton = (
    <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <ContentButton
            item={contentButtonData}
            handleSelect={contentButtonSelectHandler}
        >
        </ContentButton>
    </MemoryRouter>
)

describe('ContentButton', () => {
    it('should render', () => {
        const wrapper = shallow(contentButton);
        expect(wrapper.exists()).toBe(true);
    })

    it('should render correct title', () => {
        const wrapper = mount(contentButton);
        expect(wrapper.find(`#${contentButtonData.id}`).text())
            .toEqual(contentButtonData.title);
    })
})