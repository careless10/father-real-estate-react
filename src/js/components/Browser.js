import React, { useState } from "react";
import Governorates from "./Governorates";
import Areas from "./Areas";
import BuildingsList from "./BuildingsList";
import Order from "./Order";

const Browser = props => {
    const [selectedGovernorate, setSelectedGovernorate] = useState({ id: 1 });
    const [selectedOrder, setSelectedOrder] = useState({ value: "sell" });
    const [selectedArea, setSelectedArea] = useState({ id: 1 });
    return (
        <>
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
