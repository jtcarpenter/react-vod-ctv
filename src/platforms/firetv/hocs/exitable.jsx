import React, {Component} from 'react';
import {connect} from 'react-redux';

export class Exitable extends Component {

    constructor(props) {
        super();
        this.props = props;
        this.exit = this.exit.bind(this);
    }

    exit() {
        window.open('', '_self').close();
    }

    render() {
        const {WrappedComponent} = this.props;

        return (
            <WrappedComponent
                exit={this.exit}
                {...this.props}
            />
        );
    }
}

export function exitable(WrappedComponent) {
    const mapStateToProps = () => {
        return {
            WrappedComponent
        };
    };
    return connect(mapStateToProps)(Exitable);
}

export default exitable;