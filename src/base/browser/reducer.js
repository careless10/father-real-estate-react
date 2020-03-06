import * as actionTypes from "../store/actionTypes";

const initialState = {
  type: { id: 1 },
  list: [],
  buildings: [],
  order: { value: "sell" },
  area: { id: 1 },
  governorate: { id: 1 }
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_LIST:
    case actionTypes.SET_TYPE:
    case actionTypes.SET_BUILDINGS:
    case actionTypes.SET_ORDER:
    case actionTypes.SET_GOVERNORATE:
    case actionTypes.SET_AREA:
      return { ...state, ...payload };

    default:
      return state;
  }
};
