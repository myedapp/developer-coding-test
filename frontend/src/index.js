import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'

import createMemoryHistory from 'history/createMemoryHistory'
import configureStore from './app/store/configureStore'

import { AppContainer } from 'react-hot-loader';

import './styles/App.less';

var jquery = require('jquery');

window.jQuery = jquery;
window.$ = jquery;

require('./assets/bootstrap/bootstrap.css');
require('./assets/bootstrap-theme/css/sb-admin-2.css');

window.react = {};

const history = createMemoryHistory({
    initialEntries: [ '/' ],  // The initial URLs in the history stack
    initialIndex: 0,          // The starting index in the history stack
    keyLength: 6,             // The length of location.key
    getUserConfirmation: null
});

window.react.history = history;

const store = configureStore({}, history);

const renderApp = /*Component*/ () => {
    const Root = require('./app/Root').default;

    render(
        < AppContainer >
            <Root store={store} history={history}/>
        </AppContainer>,
        document.getElementById("react")
    );
}

renderApp();

if (module.hot) module.hot.accept("./app/Root", () => renderApp());

