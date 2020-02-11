import axios from "./api";

export function getRealEstate(type, order, area) {
  return axios.get(`/type/${type.id}/order/${order.value}/area/${area.id}`);
}

export function getGovernorates(selectedType = { id: 0 }) {
  return axios.get(`/areas/governorates/${selectedType.id}`);
}

export function getAreas(type, governorate, allAreas) {
  return axios.get(
    `/areas/type/${type.id}/governorate/${governorate.id}${
      allAreas ? "/all" : ""
    }`
  );
}

export function addBuilding(building) {
  return axios.post(`/building`, building);
}
