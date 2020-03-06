import * as actionTypes from "../store/actionTypes";

const initialState = {
  type: null,
  list: [],
  buildings: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_LIST:
      return { ...state, ...payload };

    case actionTypes.SET_TYPE:
      return { ...state, ...payload };

    case actionTypes.SET_BUILDINGS:
      return { ...state, ...payload };

    default:
      return state;
  }
};
