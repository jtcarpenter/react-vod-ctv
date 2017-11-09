import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import BackButton from 'components/backButton/BackButton.jsx';

export class BackButtonContainer extends PureComponent {

    constructor(props) {
        super();
        this.props = props;
        this.handleSelect = this.handleSelect.bind(this);
    }

    render() {
        if (this.state && this.state.selected) {
            return this.props.handleBack();
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

BackButtonContainer.propTypes = {
    item: PropTypes.object.isRequired,
    handleBack: PropTypes.func.isRequired,
    initialFocus: PropTypes.bool
}

export default BackButtonContainer;