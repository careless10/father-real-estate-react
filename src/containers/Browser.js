import React, { useState } from "react";
import Governorates from "../components/Area/Governorates";
import Areas from "../components/Area/Areas";
import BuildingsList from "../components/Building/BuildingsList";
import Order from "../components/Order";
import AddBuilding from "../components/Building/AddBuilding";

const Browser = props => {
  const [selectedGovernorate, setSelectedGovernorate] = useState({ id: 1 });
  const [selectedOrder, setSelectedOrder] = useState({ value: "sell" });
  const [selectedArea, setSelectedArea] = useState({ id: 1 });
  return (
    <>
      <AddBuilding />
      <div className="card">
        <div className="card-header">باحث العقارات</div>

        <div className="card-body">
          <Order setSelectedOrder={setSelectedOrder} />
          <br />
          <Governorates
            selectGovernorate={setSelectedGovernorate}
            selectedType={props.type}
          />
          <br />
          <Areas
            selectArea={setSelectedArea}
            selectedGovernorate={selectedGovernorate}
            selectedType={props.type}
          />
        </div>
      </div>

      <br />

      <div className="card">
        <div className="card-header">العقارات</div>

        <div className="card-body">
          <BuildingsList
            selectedOrder={selectedOrder}
            selectedType={props.type}
            selectedArea={selectedArea}
          />
        </div>
      </div>
    </>
  );
};

export default Browser;
