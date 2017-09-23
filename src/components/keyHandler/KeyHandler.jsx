import React, {Component} from 'react';
import {connect} from 'react-redux';
import {keyPressed} from 'actions/keyActions';
import {keys} from 'constants/keys';

export class KeyHandler extends Component {

    constructor(props) {
        super();
        this.props = props;
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }

    componentDidMount() {
        window.addEventListener('keydown', (event) => {
            this.props.keyPressed(event);
        }, false);

        // @TODO: This is firetv specific, different on other platforms
        window.addEventListener('popstate', () => {
            if (window.history.state !== 'backhandler') {
                const event = new document.defaultView.CustomEvent('keydown');
                event.keyCode = 8;
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