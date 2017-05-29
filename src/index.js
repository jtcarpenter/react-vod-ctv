import React from 'react';
import ReactDOM from 'react-dom';
import GridContainer from './containers/gridContainer/GridContainer.jsx';
import PlayerContainer from './containers/playerContainer/PlayerContainer.jsx';
import {Provider} from 'react-redux';
import appStore from './store/appStore';
import {Route, BrowserRouter, HashRouter, Switch} from 'react-router-dom';
import indexCss from './index.scss';
import KeyHandler from './components/keyHandler/KeyHandler.jsx';

ReactDOM.render(
    <Provider store={appStore}>
        <KeyHandler>
            <HashRouter>
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={GridContainer}
                    >
                    </Route>
                    <Route
                        exact
                        path="/player/(:id)"
                        component={PlayerContainer}
                    >
                    </Route>
                </Switch>
            </HashRouter>
        </KeyHandler>
    </Provider>,
    document.getElementById('app')
);