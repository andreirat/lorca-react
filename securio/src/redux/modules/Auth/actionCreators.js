import Constants from './constants';
/**
 * SIGNIN
 */
export const __signin = {
  pending: () => ({
    type: Constants.SIGNIN_PENDING,
  }),
  success: data => ({
    type: Constants.SIGNIN_SUCCESS,
    payload: data,
  }),
  error: err => ({
    type: Constants.SIGNIN_ERROR,
    payload: err,
  }),
};


/**
 * SIGNOUT
 */
export const __signout = {
  pending: () => ({
    type: Constants.SIGNOUT_PENDING,
  }),
  success: data => ({
    type: Constants.SIGNOUT_SUCCESS,
    payload: data,
  }),
  error: err => ({
    type: Constants.SIGNOUT_ERROR,
    payload: err,
  }),
};


export default {
  signin: __signin,
  signout: __signout,
};