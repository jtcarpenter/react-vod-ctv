import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

export class Exitable extends PureComponent {

    constructor(props) {
        super();
        this.props = props;
        this.exit = this.exit.bind(this);
    }

    exit() {
        console.log('EXIT');
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

Exitable.propTypes = {
    WrappedComponent: PropTypes.func.isRequired
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