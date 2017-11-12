import React, {PureComponent} from 'react';
import * as playerStates from 'constants/playerStates';
import * as dimensions from 'constants/dimensions';

const VIDEO_REF = 'VIDEO_REF';

export class Video extends PureComponent {

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
                width={dimensions.APP_WIDTH}
                height={dimensions.APP_HEIGHT}
                ref={VIDEO_REF}
                src={data.src}
                onPlay={this.props.onDidPlay}
                onPause={this.props.onDidPause}
            />
        )
    }
}

export default Video;