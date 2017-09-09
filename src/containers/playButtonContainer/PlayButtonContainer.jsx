import React, {Component} from 'react';
import {connect} from 'react-redux';
import PlayButton from '../../components/playButton/PlayButton.jsx';
import {playVideo, pauseVideo} from '../../actions/playerActions';
import * as playerStates from '../../constants/playerStates';

export class PlayButtonContainer extends Component {

    constructor(props) {
        super();
        this.props = props;
        this.handleSelect = this.handleSelect.bind(this);
        this.handlePlay = this.handlePlay.bind(this);
        this.handlePause = this.handlePause.bind(this);
    }

    render() {
        const {playerState} = this.props;
        return (
            <PlayButton
                videoState={playerState.videoState}
                handlePlay={this.handlePlay}
                handlePause={this.handlePause}
                handleSelect={this.handleSelect}
                item={this.props.item}
                initialFocus={this.props.initialFocus}
            />
        )
    }

    handlePlay() {
        this.props.playVideo();
    }

    handlePause() {
        this.props.pauseVideo();
    }

    handleSelect() {
        if (this.props.playerState.videoState === playerStates.PLAYING) {
            this.handlePause();
        } else {
            this.handlePlay();
        }
    }
}

const mapStateToProps = (state) => {
    return {
        playerState: state.playerReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        playVideo: () => {
            dispatch(playVideo());
        },
        pauseVideo: () => {
            dispatch(pauseVideo());
        }
    }
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(PlayButtonContainer);