import React, {Component, Children} from 'react';
import {connect} from 'react-redux';
import {keyPressed} from 'actions/keyActions';
import {keys} from 'PLATFORM/constants/keys';
import * as keyTypes from 'constants/keyTypes';

export class KeyHandler extends Component {

    constructor(props) {
        super();
        this.props = props;
    }

    render() {
        return (
            Children.toArray(this.props.children)
        )
    }

    componentDidMount() {
        window.addEventListener('keydown', (event) => {
            this.props.keyPressed(event);
        }, false);

        window.addEventListener('popstate', () => {
            if (window.history.state !== 'backhandler') {
                const event = new document.defaultView.CustomEvent('keydown');
                event.keyCode = Object
                    .keys(keys)
                    .find((key) => keys[key] === keyTypes.KEY_BACK);
                window.dispatchEvent(event);

                window.history.pushState('backhandler', null, null);
            }
        });
        window.history.pushState('backhandler', null, null);
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        keyPressed: (event) => {
            dispatch(keyPressed(keys[event.keyCode]));
        }
    }
};

export default connect(null, mapDispatchToProps)(KeyHandler);