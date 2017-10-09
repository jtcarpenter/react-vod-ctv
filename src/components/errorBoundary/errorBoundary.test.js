import React from 'react';
import {shallow} from 'enzyme';
import ErrorBoundary from 'components/errorBoundary/ErrorBoundary';

const errorBoundary = (
    <ErrorBoundary>
        <div></div>
    </ErrorBoundary>
);

describe('ErrorBoundary', () => {
    it('should render', () => {
        const wrapper = shallow(errorBoundary);
        expect(wrapper.exists()).toBe(true);
    })
})