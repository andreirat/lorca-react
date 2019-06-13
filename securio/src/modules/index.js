import React, { Component } from 'react';
/* ROUTER */
import { Route, Router, Switch } from 'react-router-dom';
/* REDUX */
// import { connectedReduxRedirect } from 'redux-auth-wrapper/history3/redirect'
// import {routerActions} from 'react-router-redux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import history from '../history';

/* STYLES */
import '../assets/css/index.css';

/* MODULES */
import Homepage from './Homepage';

// const UserIsAuthenticated = connectedReduxRedirect({
//   redirectPath: '/login',
//   authenticatedSelector: state => state.Auth.userLogin.token && state.Auth.userLogin.token.length ? state.Auth : {},
//   authenticatingSelector: state => state.Auth.isLoading,
//   redirectAction: routerActions.replace,
//   wrapperDisplayName: 'UserIsAuthenticated'
// });
//
// const onlyNotAuthenticatedUsers = connectedReduxRedirect({
//   redirectPath: '/',
//   authenticatedSelector: state => state.Auth.userLogin.token && state.Auth.userLogin.token.length ? {} : {'user': ''},
//   authenticatingSelector: state => state.Auth.isLoading,
//   redirectAction: routerActions.replace,
//   wrapperDisplayName: 'onlyNotAuthenticatedUsers'
// });

class App extends Component {
  render() {
    return(
     <Router history={history}>
      <main className="app-container">
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
      </main>
    </Router>
    );
  }
}


function mapStateToProps(state, props) {
  return {
  
  };
}

function mapDispatchToProps(dispatch, props) {
  return bindActionCreators(
    {
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
