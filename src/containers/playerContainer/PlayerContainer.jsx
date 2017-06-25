import React, {Component} from 'react';
import {connect} from 'react-redux';
import Player from '../../components/player/Player.jsx';
import {load} from '../../actions/playerActions';

export class PlayerContainer extends Component {

    constructor(props) {
        super();
        this.props = props;
        const {match} = this.props;
        this.props.load(match.params);
    }

    render() {
        const {playerState} = this.props;
        return (
            <div>
                <Player data={playerState.data}></Player>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        playerState: state.playerReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        load: (opts) => {
            dispatch(load(opts));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer);