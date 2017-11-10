import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import Player from 'components/player/Player.jsx';
import {load, playVideo, pauseVideo} from 'actions/playerActions';
import * as keyTypes from 'constants/keyTypes';
import * as playerStates from 'constants/playerStates';
import Error from 'components/error/Error.jsx';
import {movieSelector} from 'reducers/playerReducer';

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

export class PlayerContainer extends PureComponent {

    constructor(props) {
        super();
        this.props = props;
        const {match} = this.props;
        this.props.load(match.params);
        this.state = {
            willPlay: false
        }
        this.handleBack = this.handleBack.bind(this);
    }

    handleBack() {
        return <Redirect push to="/" />
    }

    componentDidUpdate() {
        const {lastKeyPressed} = this.props;
        const {videoState} = this.props;
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
                case keyTypes.KEY_BACK:
                    this.setState({back: true});
                    break;
                default:
                    break;
            }
        }
    }

    render() {
        if (this.state && this.state.back) {
            return this.handleBack();
        }
        const {movie, error, videoState} = this.props;
        if (error) {
            return <Error errorMessage={error} />
        }
        return (
            <Player
                data={movie}
                videoState={videoState}
                navItems={navItems}
                handleBack={this.handleBack}
            />
        )
    }
}

PlayerContainer.propTypes = {
    movie: PropTypes.object.isRequired,
    videoState: PropTypes.string,
    error: PropTypes.string,
    lastKeyPressed: PropTypes.object,
    load: PropTypes.func.isRequired,
    playVideo: PropTypes.func.isRequired,
    pauseVideo: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
    return {
        movie: movieSelector(
            state.homeReducer.byId,
            state.playerReducer.movie
        ),
        error: state.playerReducer.error,
        videoState: state.playerReducer.videoState,
        lastKeyPressed: state.keyReducer.lastKeyPressed,
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