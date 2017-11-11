import React from 'react';
import ReactDOM from 'react-dom';
import Home from 'containers/homeContainer/HomeContainer.jsx';
import Player from 'containers/playerContainer/PlayerContainer.jsx';
import {Provider} from 'react-redux';
import appStore from 'store/appStore';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import KeyHandler from 'components/keyHandler/KeyHandler.jsx';
import ErrorBoundary from 'components/errorBoundary/ErrorBoundary.jsx';

ReactDOM.render(
    <Provider store={appStore}>
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
    </Provider>,
    document.getElementById('app')
);