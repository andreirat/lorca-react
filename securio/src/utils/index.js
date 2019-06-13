export const loginValidationFailed = (email, password) => {
  return !email || !password;
};
/**
 * This functions returns true if the email is a valid one.
 * @param email
 * @returns {boolean}
 */
export const validateEmail = (email) => {
  let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;  // eslint-disable-line
  return regex.test(email);
};