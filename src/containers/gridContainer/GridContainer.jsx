import React, {Component} from 'react';
import {connect} from 'react-redux';
import Grid from '../../components/grid/Grid.jsx';
import {load} from '../../actions/gridActions';

export class GridContainer extends Component {

    constructor(props) {
        super();
        this.load = this.load.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.props = props;
        this.load();
    }

    render() {
        const {gridState, keyState} = this.props;
        return (
            <div>
                <Grid
                    cols={gridState.cols}
                    data={gridState.data}
                    handleSelect={this.handleSelect}
                    currentFocus={keyState.currentFocus}
                ></Grid>
            </div>
        )
    }

    load() {
        this.props.dispatch(load());
    }

    handleSelect(index) {
        console.log(`${index} selected`);
    }
}

export default connect((state) => ({
    gridState: state.gridReducer,
    keyState: state.keyReducer
}), null, null, {withRef: true})(GridContainer);