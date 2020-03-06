import * as actionTypes from "../store/actionTypes";

export function setOrder(order) {
  return {
    type: actionTypes.SET_ORDER,
    payload: {
      order
    }
  };
}

export function setGovernorate(governorate) {
  return {
    type: actionTypes.SET_GOVERNORATE,
    payload: {
      governorate
    }
  };
}

export function setArea(area) {
  return {
    type: actionTypes.SET_AREA,
    payload: {
      area
    }
  };
}

export function setList(list) {
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
