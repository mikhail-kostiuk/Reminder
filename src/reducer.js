import { combineReducers } from 'redux';
import reminderReducer from './reducers/reminderReducer';

export default combineReducers({
  reminder: reminderReducer,
});
