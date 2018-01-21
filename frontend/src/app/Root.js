import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import LoginPage from 'pages/login/LoginPage'
import SplashPage from 'pages/splash/SplashPage'

import App from './App'

import { Provider } from 'react-redux'
import { CSSTransitionGroup } from 'react-transition-group'

import { ConnectedRouter } from 'react-router-redux'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
    <Route {...rest} render={props => (!props.authenticated ? (<Component {...props}/>) :
        (
            <Redirect to={{
                pathname: '/login',
                state: { from: props.location }}}/>
        )
    )}/>
)};

const Transition = ({ children/*, ...rest*/ }) => (
    <CSSTransitionGroup
    transitionName="fade"
    transitionEnterTimeout={500}
    transitionLeaveTimeout={500}>
        {children}
    </CSSTransitionGroup>
);

class Root extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        const { store, history, auth } = this.props

        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Route render={({ location }) => (
                        <App>
                            <Transition>
                                <Route path="/" exact location={location}  key={location.key} component={LoginPage}/>
                            </Transition>

                            <Transition>
                                <Route
                                    location={location}
                                    key={location.key}
                                    path="/login"
                                    component={LoginPage}
                                />
                            </Transition>

                            <Transition>
                                <PrivateRoute
                                    authenticated={auth}
                                    location={location}
                                    key={location.key}
                                    path="/splash"
                                    component={SplashPage}
                                />
                            </Transition>
                        </App>
                    )}/>
                </ConnectedRouter>
            </Provider>);
    }
}

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
}

const mapStateToProps = (state/*, ownProps*/) =>
{
    var authenticated = true;
    if (state.entities && state.entities.user && state.entities.user.accessToken) {
        authenticated = true;
    } else {
        authenticated = false;
    }

    return {
        auth: authenticated
    }
}

export default connect(mapStateToProps)(Root);