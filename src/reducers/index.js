import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeCreateFormReducer from './EmployeeFormReducer';

export default combineReducers({
  auth: AuthReducer,
  employeeForm: EmployeeCreateFormReducer
});
