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

    render() {
        const {homeState, keyState} = this.props;
        const data = Object.assign({}, homeState.data, {
            items: homeState.data.items.map((datum, index) => {
                return Object.assign({}, datum, {
                    nav: {
                        focusKey: index.toString(),
                        nextRight: (
                            Math.min(
                                index + 1,
                                homeState.data.items.length - 1
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
                                index - homeState.cols,
                                0
                            )
                        ).toString(),
                        nextDown: (
                            Math.min(
                                index + homeState.cols,
                                homeState.data.items.length - 1
                            )
                        ).toString()
                    }
                });
            })
        })

        return (
            <div>
                <Home
                    cols={homeState.cols}
                    data={data}
                    handleSelect={this.handleSelect}
                    currentFocus={keyState.currentFocus}
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

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
);