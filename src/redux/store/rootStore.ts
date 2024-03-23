import { combineReducers } from 'redux';
import { login_details } from "../reducers/login";
// Import other reducers here

const rootReducer = combineReducers({
 login_details:login_details
  // Add other reducers here
});

export default rootReducer;