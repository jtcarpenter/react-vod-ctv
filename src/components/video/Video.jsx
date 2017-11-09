import React, {Component} from 'react';
import * as playerStates from 'constants/playerStates';
import styles from 'index.scss'

const VIDEO_REF = 'VIDEO_REF';

export class Video extends Component {

    constructor(props) {
        super();
        this.props = props;
        this.onWillPlay = this.onWillPlay.bind(this);
        this.onWillPause = this.onWillPause.bind(this);
    }

    onWillPlay() {
        this.refs[VIDEO_REF].play();
    }

    onWillPause() {
        this.refs[VIDEO_REF].pause();
    }

    render() {
        const {data, videoState} = this.props;
        if (videoState === playerStates.WILL_PLAY) {
            this.onWillPlay();
        }
        if (videoState === playerStates.WILL_PAUSE) {
            this.onWillPause();
        }
        return (
            <video
                width={styles.APP_WIDTH}
                height={styles.APP_HEIGHT}
                ref={VIDEO_REF}
                src={data.src}
                onPlay={this.props.onDidPlay}
                onPause={this.props.onDidPause}
            />
        )
    }
}

export default Video;