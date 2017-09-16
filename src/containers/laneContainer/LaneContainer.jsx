import React, {Component} from 'react';
import Lane from '../../components/lane/Lane.jsx';

export class LaneContainer extends Component {

    constructor(props) {
        super();
        this.props = props;
    }

    componentDidUpdate() {
        if (
            this.props.isCurrentFocus &&
            (!this.state || this.state.lastFocused !== this.props.currentFocus)
        ) {
            this.setState({
                lastFocused: this.props.currentFocus
            });
        }
    }

    render() {
        let {currentFocus} = this.props;
        if (
            this.state &&
            this.state.lastFocused &&
            !this.props.isCurrentFocus
        ) {
            currentFocus = this.state.lastFocused;
        }
        return (
            <Lane
                data={this.props.data}
                handleSelect={this.props.handleSelect}
                currentFocus={currentFocus}
                initialFocusKey={this.props.initialFocusKey}
            />
        )
    }
}

export default LaneContainer;