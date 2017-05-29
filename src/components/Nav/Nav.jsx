import React, {Component} from 'react';
import {connect} from 'react-redux';

export class Nav extends Component {

    constructor(props) {
        super();
        this.props = props;
    }

    render() {
        const focused = (
            this.props.navId.toString() === this.props.keyState.currentFocus
        );
        const childrenWithProps = React.Children.map(this.props.children,
            (child) => React.cloneElement(child, {
                focused
            })
        );
        return (
            <div>
                {childrenWithProps}
            </div>
        )
    }
}

export default connect((state) => ({
    keyState: state.keyReducer
}))(Nav);