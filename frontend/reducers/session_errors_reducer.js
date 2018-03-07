import {
    RECEIVE_SESSION_ERRORS, REMOVE_SESSION_ERRORS
} from '../actions/session_actions';
import {RECEIVE_CURRENT_USER} from "../actions/session_actions";

const initi ={
  errors: null
};

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
        return initi;
    case REMOVE_SESSION_ERRORS:
        debugger;
        return [];
    default:
      return state;
  }
};
