import * as api from './api';
import actions from './actionCreators';
import jwtDecode from 'jwt-decode';
import history from '../../../history';

export const signin = (email, password) => dispatch => {
  dispatch(actions.signin.pending());
  api
    .signin(email, password)
    .then(
      res => {
        let user = jwtDecode(res.body.token);
        let current = {
          token: res.body.token,
          user: user
        };
        dispatch(
          actions.signin.success(current),
        );
        history.push('/admin');
      }
    )
    .catch(
      res => {
        dispatch(actions.signin.error(res));
      }
    );
};

export const signout = (redirect = true) => dispatch => {
  dispatch(actions.signout.pending());
  api
    .signout()
    .then(data => {
      dispatch(actions.signout.success(data));
      if (redirect) {
        history.push('/');
      }
    })
    .catch(error => dispatch(actions.signout.error(error)));
};


