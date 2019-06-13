import constants from './constants';

const emptyState = {
  userLogin: {},
  userDetails: {},
  error: '',
  success: false,
  isLoading: false
};
const initialState = JSON.parse(localStorage.getItem('Auth')) || emptyState;

export default (state = initialState, action = {}) => {
  switch (action.type) {
  
  case constants.SIGNIN_SUCCESS : {
    let newState = {
      ...state,
      userLogin: action.payload,
      userDetails: action.payload.user,
      success: '',
      error: ''
    };

    localStorage.setItem('Auth', JSON.stringify(newState));
    return newState;
  }

  case constants.SIGNIN_ERROR: {
    const { message, success } = action.payload;
    console.log(message);
    return {
      ...state,
      success,
      error: message,
    };
  }
  
  case constants.SIGNOUT_SUCCESS: {
    let newState = {
      ...state,
      error: '',
    };

    if (state.impersonateLogin.token) {
      newState['impersonateLogin'] = {};
    } else if (state.userLogin.token) {
      newState['userLogin'] = {};
    }

    localStorage.setItem('Auth', JSON.stringify(newState));
    return newState;
  }
  

  default:
    return state;
  }
};
