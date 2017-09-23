import React, {Component} from 'react';
import {connect} from 'react-redux';
import Home from 'components/home/Home.jsx';
import {load} from 'actions/homeActions';
import {withRouter} from 'react-router-dom';
import * as keyTypes from 'constants/keyTypes';
import exitable from 'PLATFORM/hocs/exitable.jsx';

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

export function parseIntoCategories(data) {
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
    return categories;
}

export class HomeContainer extends Component {

    constructor(props) {
        super();
        this.handleSelect = this.handleSelect.bind(this);
        this.exit = this.exit.bind(this);
        this.props = props;
        this.props.load();
        this.lastLaneFocusKeys = [];
    }

    parseIntoLanes(data) {
        const categories = parseIntoCategories(data);
        const lanes = [];
        let i = null;
        let l = null;
        let offset = 0;
        let nextOffset = 0;
        const assignNav = (item, index) => {
            return Object.assign({}, item, {
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
                    nextDown: (() => {
                        if (this.lastLaneFocusKeys[i + 1]) {
                            return this.lastLaneFocusKeys[i + 1];
                        }
                        return (
                            categories[i + 1]
                                ? nextOffset
                                : offset
                        ).toString();
                    })(),
                    nextUp: (() => {
                        if (this.lastLaneFocusKeys[i - 1]) {
                            return this.lastLaneFocusKeys[i - 1];
                        }
                        return (Math.max(
                            offset - (categories[i - 1]
                                ? (categories[i - 1].items.length)
                                : 0),
                            0
                        )).toString();
                    })()
                }
            })
        }

        for (i = 0, l = categories.length; i < l; i += 1) {
            nextOffset += categories[i].items.length;
            lanes.push({
                items: categories[i].items.map(assignNav)
            });
            offset = nextOffset;
        }

        return {lanes};
    }

    componentDidUpdate() {
        const {lastKeyPressed} = this.props.keyState;
        if (lastKeyPressed) {
            switch (lastKeyPressed.keyType) {
                case keyTypes.KEY_BACK:
                    if (this.state && this.state.back) {
                        this.setState({back: false});
                    } else {
                        this.setState({back: true});
                    }
                    break;
                default:
                    break;
            }
        }
    }

    shouldComponentUpdate() {
        if (this.state && this.state.back) {
            return false;
        }
        return true;
    }

    exit() {
        if (this.props.exit) {
            this.props.exit();
        }
    }

    render() {
        if (this.state && this.state.back) {
            this.exit();
        }
        const {focusState, homeState} = this.props;
        const laneData = this.parseIntoLanes(homeState.data);
        const focusedLaneIndex = getFocusedLaneIndex(
            laneData.lanes,
            focusState.currentFocus
        );
        this.lastLaneFocusKeys[focusedLaneIndex] = focusState.currentFocus;

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
        focusState: state.focusReducer,
        keyState: state.keyReducer,
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
    connect(mapStateToProps, mapDispatchToProps)(exitable(HomeContainer))
);