import React, {Component} from 'react';
import {connect} from 'react-redux';
import {keyPressed} from '../../actions/keyActions';
import {keys} from '../../constants/keys';

export class KeyHandler extends Component {

    constructor(props) {
        super();
        this.props = props;
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    render() {
        return (
            <div onKeyDown={this.handleKeyDown}>
                {this.props.children}
            </div>
        )
    }

    handleKeyDown(event) {
        this.props.dispatch(keyPressed(keys[event.keyCode]));
    }

    componentDidMount() {
        window.addEventListener('keyup', (event) => {
            this.props.dispatch(keyPressed(keys[event.keyCode]));
        });
    }
}

export default connect()(KeyHandler);