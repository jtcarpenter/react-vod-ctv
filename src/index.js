import React from 'react';
import ReactDOM from 'react-dom';
import Home from './containers/homeContainer/HomeContainer.jsx';
import Player from './containers/playerContainer/PlayerContainer.jsx';
import {Provider} from 'react-redux';
import appStore from './store/appStore';
import {Route, BrowserRouter, HashRouter, Switch} from 'react-router-dom';
import KeyHandler from './components/keyHandler/KeyHandler.jsx';

ReactDOM.render(
    <Provider store={appStore}>
        <KeyHandler>
            <HashRouter>
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={Home}
                    >
                    </Route>
                    <Route
                        exact
                        path="/player/:id?"
                        component={Player}
                    >
                    </Route>
                </Switch>
            </HashRouter>
        </KeyHandler>
    </Provider>,
    document.getElementById('app')
);