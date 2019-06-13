import {API_ROUTES} from '../../../config';
import { post } from '../../../utils/superagent';

export const signin = async (email, password) => {
  return await post(API_ROUTES.auth.login, {email, password});
};

export const signout = () => {
  return new Promise(function (resolve, reject) {
    resolve({});
  });
};
