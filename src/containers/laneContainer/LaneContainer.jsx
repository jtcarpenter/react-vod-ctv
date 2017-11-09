import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Lane from 'components/lane/Lane.jsx';

export class LaneContainer extends Component {

    constructor(props) {
        super();
        this.props = props;
    }

    shouldComponentUpdate(nextProps) {
        return Boolean(nextProps.isCurrentFocus);
    }

    render() {
        const {data} = this.props;
        return (
            <Lane
                data={data}
                handleSelect={this.props.handleSelect}
                currentFocus={this.props.currentFocus}
                initialFocusKey={this.props.initialFocusKey}
            />
        )
    }
}

LaneContainer.propTypes = {
    data: PropTypes.object.isRequired,
    handleSelect: PropTypes.func.isRequired,
    currentFocus: PropTypes.string,
    initialFocusKey: PropTypes.string.isRequired
}

export default LaneContainer;