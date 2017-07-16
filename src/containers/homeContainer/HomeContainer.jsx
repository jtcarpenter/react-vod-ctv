import React, {Component} from 'react';
import {connect} from 'react-redux';
import Home from '../../components/home/Home.jsx';
import {load} from '../../actions/homeActions';
import {withRouter} from 'react-router-dom';

export class HomeContainer extends Component {

    constructor(props) {
        super();
        this.handleSelect = this.handleSelect.bind(this);
        this.props = props;
        this.props.load();
    }

    parseGrid(data, cols) {
        return Object.assign({}, data, {
            items: data.items.map((datum, index) => {
                return Object.assign({}, datum, {
                    nav: {
                        focusKey: index.toString(),
                        nextRight: (
                            Math.min(
                                index + 1,
                                data.items.length - 1
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
                                index - cols,
                                0
                            )
                        ).toString(),
                        nextDown: (
                            Math.min(
                                index + cols,
                                data.items.length - 1
                            )
                        ).toString()
                    }
                });
            }),
            cols
        })
    }

    parseCategories(data) {
        // @TODO: give categories to data
        const categories = [
            {items: data.items.slice(0, 4)},
            {items: data.items.slice(4, 6)},
            {items: data.items.slice(6)}
        ];

        const lanes = [];
        let i = null;
        let l = null;
        let offset = 0;
        let nextOffset = 0;
        const parseCategory = (category, index) => {
            return Object.assign({}, category, {
                nav: {
                    focusKey: (offset + index).toString(),
                    nextRight: (
                        Math.min(
                            offset + index + 1,
                            offset + categories[i].items.length - 1
                        )
                    ).toString(),
                    nextLeft: (
                        Math.max(
                            offset + index - 1,
                            0
                        )
                    ).toString(),
                    nextDown: (
                        categories[i + 1]
                            ? nextOffset
                            : offset
                    ).toString(),
                    nextUp: (
                        Math.max(
                            offset - (categories[i - 1]
                                ? (categories[i - 1].items.length)
                                : 0),
                            0
                        )
                    ).toString()
                }
            })
        }

        for (i = 0, l = categories.length; i < l; i += 1) {
            nextOffset += categories[i].items.length;
            lanes.push({
                items: categories[i].items.map(parseCategory)
            });
            offset = nextOffset;
        }

        return {lanes};
    }

    render() {
        const {homeState, focusState} = this.props;
        const gridData = this.parseGrid(homeState.data, homeState.cols);
        const laneData = this.parseCategories(homeState.data);

        return (
            <div>
                <Home
                    laneData={laneData}
                    gridData={gridData}
                    handleSelect={this.handleSelect}
                    currentFocus={focusState.currentFocus}
                ></Home>
            </div>
        )
    }

    handleSelect(index) {
        this.props.history.push(`/player/${index}`);
    }
}

const mapStateToProps = (state) => {
    return {
        homeState: state.homeReducer,
        focusState: state.focusReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        load: () => {
            dispatch(load());
        }
    }
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
);