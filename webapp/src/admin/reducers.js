import { combineReducers } from 'redux';

import accounts from './manageAccounts/reducerCustomers';
import students from './manageStudents/reducerStudents';

export default combineReducers({
  accounts,
  students,
});
