import * as SessionAPI from '../utils/session_utils';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signup = user => dispatch => (
  SessionAPI.CreateUser(user).then(
    newUser => (dispatch(receiveCurrentUser(newUser))),
    err => (dispatch(receiveErrors(err.responseJSON)))
  )
);

export const login = user => dispatch => (
  SessionAPI.Login(user).then(
    existingUser => (dispatch(receiveCurrentUser(existingUser))),
    err => (dispatch(receiveErrors(err.responseJSON)))
  )
);

export const logout = () => dispatch => (
  SessionAPI.Logout().then(
    user => (dispatch(receiveCurrentUser(null)))
  )
);

export const clearErrors = () => dispatch => (
  dispatch(receiveErrors([]))
);
