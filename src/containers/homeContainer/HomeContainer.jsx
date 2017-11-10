import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from 'components/home/Home.jsx';
import {load} from 'actions/homeActions';
import * as keyTypes from 'constants/keyTypes';
import exitable from 'PLATFORM/hocs/exitable.jsx';
import Error from 'components/error/Error.jsx';
import {moviesSelector} from 'reducers/homeReducer';

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

export function orderCategories(categories) {
    return categories.sort((a, b) => {
        if (a.category === 'hero') {
            return -1;
        }
        return b.category === 'hero'
            ? 1
            : 0;
    });
}

export function parseIntoCategories(data) {
    const categoryTypes = [];
    const categories = [];
    for (let i = 0, l = data.movies.length; i < l; i += 1) {
        const categoryIndex = categoryTypes.indexOf(data.movies[i].category);
        if (categoryIndex === -1) {
            categories.push({
                items: [data.movies[i]],
                category: data.movies[i].category
            });
            categoryTypes.push(data.movies[i].category);
        } else {
            categories[categoryIndex].items.push(data.movies[i]);
        }
    }
    return orderCategories(categories);
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

    parseIntoLanes(categories) {
        const lanes = [];
        let catIdx = null;
        let offset = 0;
        let nextOffset = 0;
        const assignNav = (item, itemIdx) => {
            return Object.assign({}, item, {
                nav: {
                    focusKey: (offset + itemIdx).toString(),
                    nextRight: (
                        Math.min(
                            offset + itemIdx + 1,
                            offset + categories[catIdx].items.length - 1
                        )
                    ).toString(),
                    nextLeft: (
                        Math.max(
                            offset + itemIdx - 1,
                            0
                        )
                    ).toString(),
                    nextDown: (() => {
                        if (this.lastLaneFocusKeys[catIdx + 1]) {
                            return this.lastLaneFocusKeys[catIdx + 1];
                        }
                        return (
                            categories[catIdx + 1]
                                ? nextOffset
                                : offset
                        ).toString();
                    })(),
                    nextUp: (() => {
                        if (this.lastLaneFocusKeys[catIdx - 1]) {
                            return this.lastLaneFocusKeys[catIdx - 1];
                        }
                        return (Math.max(
                            offset - (categories[catIdx - 1]
                                ? (categories[catIdx - 1].items.length)
                                : 0),
                            0
                        )).toString();
                    })()
                }
            })
        }

        for (catIdx = 0; catIdx < categories.length; catIdx += 1) {
            nextOffset += categories[catIdx].items.length;
            lanes.push({
                items: categories[catIdx].items.map(assignNav),
                category: categories[catIdx].category
            });
            offset = nextOffset;
        }

        return {lanes};
    }

    componentDidUpdate() {
        const {lastKeyPressed} = this.props;
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
        const {movies, error, currentFocus} = this.props;
        if (error) {
            return <Error errorMessage={error} />
        }
        const categories = parseIntoCategories({movies});
        const laneData = this.parseIntoLanes(categories);
        const focusedLaneIndex = getFocusedLaneIndex(
            laneData.lanes,
            currentFocus
        );
        this.lastLaneFocusKeys[focusedLaneIndex] = currentFocus;

        return (
            <Home
                laneData={laneData}
                handleSelect={this.handleSelect}
                currentFocus={currentFocus}
                focusedLaneIndex={focusedLaneIndex}
                initialFocusKey={'0'}
            >
            </Home>
        )
    }

    handleSelect(movie) {
        this.props.history.push(`/player/${movie.id}`);
    }
}

HomeContainer.propTypes = {
    movies: PropTypes.array.isRequired,
    error: PropTypes.string,
    lastKeyPressed: PropTypes.object,
    currentFocus: PropTypes.string,
    load: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        homeState: state.homeReducer,
        movies: moviesSelector(state.homeReducer.byId),
        error: state.homeReducer.error,
        currentFocus: state.focusReducer.currentFocus,
        lastKeyPressed: state.keyReducer.lastKeyPressed
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