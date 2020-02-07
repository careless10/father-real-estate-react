import React from "react";
import Select from "react-select";

const options = [
    { value: "sell", label: "بيع" },
    { value: "buy", label: "شراء" }
];

const Order = props => {
    function changed(e) {
        props.setSelectedOrder(e);
    }
    return (
        <div>
            <Select
                onChange={changed}
                defaultValue={options[0]}
                className="basic-single"
                classNamePrefix="select"
                isRtl={true}
                name="order"
                options={options}
            />
        </div>
    );
};

export default Order;
