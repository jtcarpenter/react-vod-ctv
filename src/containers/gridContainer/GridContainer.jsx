import React, {Component} from 'react';
import {connect} from 'react-redux';
import Grid from '../../components/grid/Grid.jsx';
import {load} from '../../actions/gridActions';

export class GridContainer extends Component {

    constructor(props) {
        super();
        this.handleSelect = this.handleSelect.bind(this);
        this.props = props;
        this.props.load();
    }

    render() {
        const {gridState, keyState} = this.props;
        const data = Object.assign({}, gridState.data, {
            items: gridState.data.items.map((datum, index) => {
                return Object.assign({}, datum, {
                    nav: {
                        focusKey: index.toString(),
                        nextRight: (
                            Math.min(
                                index + 1,
                                gridState.data.items.length - 1
                            )
                        ).toString(),
                        nextLeft: (
                            Math.max(
                                index - 1,
                                0
                            )
                        ).toString(),
                        nextUp: (
                            Math.max(
                                index - gridState.cols,
                                0
                            )
                        ).toString(),
                        nextDown: (
                            Math.min(
                                index + gridState.cols,
                                gridState.data.items.length - 1
                            )
                        ).toString()
                    }
                });
            })
        })

        return (
            <div>
                <Grid
                    cols={gridState.cols}
                    data={data}
                    handleSelect={this.handleSelect}
                    currentFocus={keyState.currentFocus}
                ></Grid>
            </div>
        )
    }

    handleSelect(index) {
        console.log(`${index} selected`);
    }
}

const mapStateToProps = (state) => {
    return {
        gridState: state.gridReducer,
        keyState: state.keyReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        load: () => {
            dispatch(load());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GridContainer);