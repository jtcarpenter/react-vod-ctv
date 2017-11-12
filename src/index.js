import React from 'react';
import ReactDOM from 'react-dom';
import Home from 'containers/homeContainer/HomeContainer.jsx';
import Player from 'containers/playerContainer/PlayerContainer.jsx';
import {Provider} from 'react-redux';
import appStore from 'store/appStore';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import styled, {ThemeProvider, injectGlobal} from 'styled-components';
import KeyHandler from 'components/keyHandler/KeyHandler.jsx';
import ErrorBoundary from 'components/errorBoundary/ErrorBoundary.jsx';
import * as dimensions from 'constants/dimensions';

const theme = {
    APP_BG_COLOUR: '#000000',
    ERROR_COLOUR: '#ea5a5a',
    LANE_MARGIN: 5,
    PLAYER_CTRLS_BG_COLOUR: 'rgba(0, 0, 0, 0.4)',
    PLAYER_CTRL_WIDTH: 50,
    PLAYER_CTRL_HEIGHT: 50,
    PLAYER_CTRL_FG_COLOUR: '#888888',
    PLAYER_CTRL_BG_COLOUR: 'transparent',
    PLAYER_CTRL_FG_COLOUR_FOCUSED: '#dddddd',
    PLAYER_CTRL_BG_COLOUR_FOCUSED: '#222222',
    PLAYER_CTRL_BORDER_WIDTH: 0,
    PLAYER_CTRL_GAP_WIDTH: 10
};

injectGlobal([`
    @font-face {
        font-family: 'icomoon';
        src: url('/fonts/icomoon.eot?1ste5n');
        src: url('/fonts/icomoon.eot?1ste5n#iefix') format('embedded-opentype'),
            url('/fonts/icomoon.ttf?1ste5n') format('truetype'),
            url('/fonts/icomoon.woff?1ste5n') format('woff'),
            url('/fonts/icomoon.svg?1ste5n#icomoon') format('svg');
        font-weight: normal;
        font-style: normal;
    }
    body {
        margin: 0;
        overflow: hidden;
    }
`]);

const StyledDiv = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: ${dimensions.APP_WIDTH}px;
    height: ${dimensions.APP_HEIGHT}px;
    background-color: ${theme.APP_BG_COLOUR};
    overflow: hidden;
    font-family:
        "HelveticaNeue-Light",
        "Helvetica Neue Light",
        "Helvetica Neue",
        Helvetica, Arial,
        "Lucida Grande",
        sans-serif;
`;

ReactDOM.render(
    <StyledDiv>
        <Provider store={appStore}>
            <ThemeProvider theme={theme}>
                <ErrorBoundary>
                    <KeyHandler>
                        <BrowserRouter>
                            <Switch>
                                <Route
                                    exact
                                    path="/"
                                    component={Home}
                                >
                                </Route>
                                <Route
                                    exact
                                    path="/movie/:id?"
                                    component={Player}
                                >
                                </Route>
                            </Switch>
                        </BrowserRouter>
                    </KeyHandler>
                </ErrorBoundary>
            </ThemeProvider>
        </Provider>
    </StyledDiv>,
    document.getElementById('app')
);