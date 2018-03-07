import {combineReducers} from 'redux';
import session from './session_reducer';
import ErrorReducer from './errors_reducer';


const RootReducer = combineReducers({
  session,
  errors: ErrorReducer
});

export default RootReducer;
