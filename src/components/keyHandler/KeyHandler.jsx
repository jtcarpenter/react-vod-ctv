import React, {Component} from 'react';
import {connect} from 'react-redux';
import {keyPressed} from '../../actions/keyActions';
import {keys} from '../../constants/keys';
import Nav from '../Nav/Nav.jsx';

function traverse(children) {
    React.Children.forEach(children, (child) => {
        if (child.props.children) {
            traverse(child.props.children);
        } else {
            // Component is wrapped in redux connect, so children are hidden
        }

        console.log(child.type === Nav);
    })
}

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
            // console.log(traverse(this.props.children));
            this.props.dispatch(keyPressed(keys[event.keyCode]));
        });
    }
}

export default connect()(KeyHandler);