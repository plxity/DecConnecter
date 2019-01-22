import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import profileReducer from './ProfileReducer;'

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile:profileReducer
});
