import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import Player from 'components/player/Player.jsx';
import {load, playVideo, pauseVideo} from 'actions/playerActions';
import * as keyTypes from 'constants/keyTypes';
import * as playerStates from 'constants/playerStates';

const navItems = [
    {
        nav: {
            focusKey: '0',
            nextRight: '1'
        }
    },
    {
        nav: {
            focusKey: '1',
            nextLeft: '0'
        }
    }
];

export class PlayerContainer extends Component {

    constructor(props) {
        super();
        this.props = props;
        const {match} = this.props;
        this.props.load(match.params);
        this.state = {
            willPlay: false
        }
    }

    componentDidUpdate() {
        const {lastKeyPressed} = this.props.keyState;
        const {videoState} = this.props.playerState;
        if (lastKeyPressed) {
            switch (lastKeyPressed.keyType) {
                case keyTypes.KEY_PLAY:
                    if (videoState !== playerStates.PLAYING) {
                        this.props.playVideo();
                    }
                    break;
                case keyTypes.KEY_PAUSE:
                    if (videoState === playerStates.PLAYING) {
                        this.props.pauseVideo()
                    }
                    break;
                case keyTypes.KEY_PLAY_PAUSE:
                    if (videoState === playerStates.PLAYING) {
                        this.props.pauseVideo();
                    } else {
                        this.props.playVideo();
                    }
                    break;
                default:
                    break;
            }
        }
    }

    render() {
        const {playerState} = this.props;
        return (
            <div>
                <Player
                    data={playerState.data}
                    videoState={playerState.videoState}
                    navItems={navItems}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        playerState: state.playerReducer,
        keyState: state.keyReducer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        load: (opts) => {
            dispatch(load(opts));
        },
        playVideo: () => {
            dispatch(playVideo());
        },
        pauseVideo: () => {
            dispatch(pauseVideo());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer);