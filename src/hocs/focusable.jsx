import React, {Component} from 'react';
import {connect} from 'react-redux';
import {changeFocus} from '../actions/focusActions';
import * as keys from '../constants/keys';

const isFocused = (focusKey, focusState) => {
    return focusKey.toString() === focusState.currentFocus
}

export class Focusable extends Component {

    constructor(props) {
        super();
        this.props = props;
    }

    componentDidMount() {
        if (this.props.initialFocus) {
            this.props.changeFocus(
                this.props.item.nav.focusKey
            );
        }
    }

    componentDidUpdate() {
        if (!this.props.item || !this.props.item.nav) {
            return false;
        }
        const focused = isFocused(
            this.props.item.nav.focusKey,
            this.props.focusState
        );
        if (focused && this.props.keyState.lastKeyPressed) {
            switch (this.props.keyState.lastKeyPressed.keyType) {
                case keys.KEY_RIGHT:
                    if (this.props.item.nav.nextRight) {
                        this.props.changeFocus(
                            this.props.item.nav.nextRight
                        );
                    }
                    break;
                case keys.KEY_LEFT:
                        this.props.changeFocus(
                            this.props.item.nav.nextLeft
                        );
                    break;
                case keys.KEY_UP:
                    if (this.props.item.nav.nextUp) {
                        this.props.changeFocus(
                            this.props.item.nav.nextUp
                        );
                    }
                    break;
                case keys.KEY_DOWN:
                    if (this.props.item.nav.nextDown) {
                        this.props.changeFocus(
                            this.props.item.nav.nextDown
                        );
                    }
                    break;
                case keys.KEY_OK:
                    if (this.props.handleSelect) {
                        this.props.handleSelect(
                            this.props.item.nav.focusKey
                        );
                    }
                    break;
                default:
                    break;
            }
        }
        return true;
    }

    render() {
        let focused = false
        const {WrappedComponent} = this.props;
        if (this.props.item && this.props.item.nav) {
            focused = isFocused(
                this.props.item.nav.focusKey,
                this.props.focusState
            );
        }

        return (
            <WrappedComponent
                focused={focused}
                {...this.props}
            />
        );
    }
}

export function focusable(WrappedComponent) {

    const mapStateToProps = (state) => {
        return {
            WrappedComponent,
            keyState: state.keyReducer,
            focusState: state.focusReducer
        };
    };

    const mapDispatchToProps = (dispatch) => {
        return {
            changeFocus: (nextFocus) => {
                dispatch(changeFocus(nextFocus));
            }
        }
    };

    return connect(mapStateToProps, mapDispatchToProps)(Focusable);
}

export default focusable;