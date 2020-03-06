import * as actionsTypes from "../store/actionTypes";
import * as actions from "./action";
import { takeLatest, put } from "redux-saga/effects";
import * as apis from "../utilities/apis/browser";

function* setType({ payload }) {
  try {
    //   const response = yield apis.tryLogin(payload.email, payload.password);
    //   yield put(actions.tryLoginSuccess(response));
  } catch (e) {
    console.log(e);
  }
}

export default function* watchBrowserSaga() {
  yield takeLatest(actionsTypes.SET_TYPE, setType);
}
