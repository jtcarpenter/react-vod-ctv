import React, {Component} from 'react';
import {connect} from 'react-redux';
import Player from '../../components/player/Player.jsx';
import {load, playVideo, pauseVideo} from '../../actions/playerActions';

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
]

export class PlayerContainer extends Component {

    constructor(props) {
        super();
        this.props = props;
        const {match} = this.props;
        this.props.load(match.params);
        this.state = {
            willPlay: false
        }
        this.handlePlay = this.handlePlay.bind(this);
        this.handlePause = this.handlePause.bind(this);
    }

    render() {
        const {playerState} = this.props;
        return (
            <div>
                <Player
                    data={playerState.data}
                    videoState={playerState.videoState}
                    handlePlay={this.handlePlay}
                    handlePause={this.handlePause}
                    navItems={navItems}
                />
            </div>
        )
    }

    handlePlay() {
        this.props.playVideo();
    }

    handlePause() {
        this.props.pauseVideo();
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