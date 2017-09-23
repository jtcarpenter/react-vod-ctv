import React, {Component} from 'react';
import {connect} from 'react-redux';
import {didPlayVideo, didPauseVideo} from 'actions/playerActions';
import Video from 'components/video/Video.jsx';

export class VideoContainer extends Component {

    constructor(props) {
        super();
        this.props = props;
        this.onDidPlay = this.onDidPlay.bind(this);
        this.onDidPause = this.onDidPause.bind(this);
    }

    onDidPlay() {
        this.props.onDidPlay();
    }

    onDidPause() {
        this.props.onDidPause();
    }

    render() {
        const {data, videoState} = this.props;

        return (
            <Video
                data={data}
                videoState={videoState}
                onDidPlay={this.onDidPlay}
                onDidPause={this.onDidPause}
            />
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
        onDidPlay: () => {
            dispatch(didPlayVideo());
        },
        onDidPause: () => {
            dispatch(didPauseVideo());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoContainer);