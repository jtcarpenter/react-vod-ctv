import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import BackButton from '../../components/backButton/BackButton.jsx';

export class BackButtonContainer extends Component {

    constructor(props) {
        super();
        this.props = props;
        this.handleSelect = this.handleSelect.bind(this);
    }

    render() {
        if (this.state && this.state.selected) {
            return <Redirect push to="/" />
        }
        return (
            <BackButton
                handleSelect={this.handleSelect}
                item={this.props.item}
                initialFocus={this.props.initialFocus}
            />
        )
    }

    handleSelect() {
        this.setState({selected: true});
    }
}

export default BackButtonContainer;