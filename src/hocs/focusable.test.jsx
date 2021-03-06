import React, {Component} from 'react';
import {shallow} from 'enzyme';
import {Focusable} from 'hocs/focusable';

class Dummy extends Component {
    render() {
        return (<div>Dummy</div>);
    }
}

const mockItem = {
    nav: {
        focusKey: 'testKey'
    }
}
const mockFocusState = {};
const mockKeyState = {};
const mockChangeFocus = () => {};
const focusable = (
    <Focusable
        item={mockItem}
        focusState={mockFocusState}
        WrappedComponent={Dummy}
        keyState={mockKeyState}
        changeFocus={mockChangeFocus}
    >
    </Focusable>
);

describe('Focusable', () => {
    it('should render', () => {
        const wrapper = shallow(focusable);
        expect(wrapper.exists()).toBe(true);
    })
});