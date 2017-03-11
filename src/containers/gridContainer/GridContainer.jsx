import React, {Component} from 'react';
import {connect} from 'react-redux';
import Counter from '../../components/counter/Counter.jsx';
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
        const {grid} = this.props;
        return (
            <div>
                <Counter></Counter>
                <Grid cols="3" data={grid.data} handleSelect={this.handleSelect}></Grid>
            </div>
        )
    }

    load() {
        this.props.dispatch(load());
    }

    handleSelect(index) {
        console.log(index + ' selected');
    }
}

export default connect((state) =>({
    grid: state.grid
}))(GridContainer);