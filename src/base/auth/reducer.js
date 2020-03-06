import * as actionTypes from "../store/actionTypes";

const initialState = {
  user: null,
  loading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.TRY_LOGIN:
      return { ...state, error: null, loading: true };

    case actionTypes.TRY_LOGIN_SUCCESS:
      return { ...state, error: null, loading: false, ...payload };

    case actionTypes.TRY_LOGIN_SUCCESS:
      return { ...state, error: null, loading: false, ...payload };

    default:
      return state;
  }
};
