import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import Auth from '../redux/modules/Auth/reducer';

export default combineReducers({
  routing: routerReducer,
  Auth
});
