import * as actionTypes from "../store/actionTypes";

const initialState = {
  user: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.TRY_LOGIN:
      return { ...state, ...payload };

    default:
      return state;
  }
};
