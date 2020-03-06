import * as actionTypes from "../store/actionTypes";

export function tryLogin(email, password) {
  return {
    type: actionTypes.TRY_LOGIN,
    payload: {
      email,
      password
    }
  };
}

export function tryLoginFailed() {
  return {
    type: actionTypes.TRY_LOGIN_FAILED,
    payload: {}
  };
}

export function tryLoginSuccess(user) {
  return {
    type: actionTypes.TRY_LOGIN_SUCCESS,
    payload: {
      user
    }
  };
}
