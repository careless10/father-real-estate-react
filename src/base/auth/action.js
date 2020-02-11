import * as actionTypes from "../store/actionTypes";

export function tryLogin(username, password) {
  return {
    type: actionTypes.TRY_LOGIN,
    payload: {
      username,
      password
    }
  };
}
