import * as actionTypes from "../store/actionTypes";

export function setList(list) {
  console.log(list);
  return {
    type: actionTypes.SET_LIST,
    payload: {
      list
    }
  };
}

export function setType(type) {
  return {
    type: actionTypes.SET_TYPE,
    payload: {
      type
    }
  };
}

export function setBuildings(buildings) {
  return {
    type: actionTypes.SET_BUILDINGS,
    payload: {
      buildings
    }
  };
}
