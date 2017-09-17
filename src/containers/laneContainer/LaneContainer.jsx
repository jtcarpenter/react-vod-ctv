import React, {Component} from 'react';
import Lane from '../../components/lane/Lane.jsx';

export class LaneContainer extends Component {

    constructor(props) {
        super();
        this.props = props;
    }

    shouldComponentUpdate(nextProps) {
        return Boolean(nextProps.isCurrentFocus);
    }

    render() {
        return (
            <Lane
                data={this.props.data}
                handleSelect={this.props.handleSelect}
                currentFocus={this.props.currentFocus}
                initialFocusKey={this.props.initialFocusKey}
            />
        )
    }
}

export default LaneContainer;