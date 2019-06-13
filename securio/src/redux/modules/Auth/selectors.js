import {createSelector} from 'reselect';
const entity = 'Auth';

/* Memoized Input Selectors */
export const token = (state) => {
  return state.Auth.impersonateLogin.token || state.Auth.userLogin.token;
};

export const currentUser = (state) => {
  if (state.Auth.userLogin.token) {
    return state.Auth.userLogin;
  }
  return null;
};
export const userLogin = createSelector([state => state[entity].userLogin], val => val);
export const userDetails = createSelector([state => state[entity].userDetails], val => val);
export const loginError = createSelector([state => state[entity].error], val => val);
export const success = createSelector([state => state[entity].success], val => val);
export const isLoading = createSelector([state => state[entity].isLoading], val => val);
