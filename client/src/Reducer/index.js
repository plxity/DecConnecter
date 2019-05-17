import alert from './alert';
import auth from './auth';
import profile from './/Profile';
import {combineReducers} from 'redux';

export default combineReducers({
  alert,
  auth
})