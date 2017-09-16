import React, {Component} from 'react';
import {connect} from 'react-redux';
import Home from '../../components/home/Home.jsx';
import {load} from '../../actions/homeActions';
import {withRouter} from 'react-router-dom';

export function getFocusedLaneIndex(lanes, focusKey) {
    for (let i = 0, l = lanes.length; i < l; i += 1) {
        for (let j = 0, m = lanes[i].items.length; j < m; j += 1) {
            if (focusKey === lanes[i].items[j].nav.focusKey) {
                return i;
            }
        }
    }
    return 0
}

export class HomeContainer extends Component {

    constructor(props) {
        super();
        this.handleSelect = this.handleSelect.bind(this);
        this.props = props;
        this.props.load();
        this.lastFocus = null;
    }

    parseCategories(data) {
        const categoryTypes = [];
        const categories = [];
        for (let i = 0, l = data.items.length; i < l; i += 1) {
            const categoryIndex = categoryTypes.indexOf(data.items[i].category);
            if (categoryIndex === -1) {
                categories.push({items: [data.items[i]]});
                categoryTypes.push(data.items[i].category);
            } else {
                categories[categoryIndex].items.push(data.items[i]);
            }
        }

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
        const {focusState, homeState} = this.props;
        const laneData = this.parseCategories(homeState.data);
        const focusedLaneIndex = getFocusedLaneIndex(
            laneData.lanes,
            focusState.currentFocus
        );

        return (
            <div>
                <Home
                    laneData={laneData}
                    handleSelect={this.handleSelect}
                    currentFocus={focusState.currentFocus}
                    focusedLaneIndex={focusedLaneIndex}
                    initialFocusKey={'0'}
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