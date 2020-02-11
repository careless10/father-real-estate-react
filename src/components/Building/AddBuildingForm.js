import React, { useState } from "react";
import Governorates from "../Area/Governorates";
import Areas from "../Area/Areas";
import Order from "../Order";
import Types from "../Types";
import { addBuilding } from "../../base/utilities/apis/realEstate";

const AddBuildingForm = props => {
  const [type, setType] = useState({ id: 1 });
  const [order, setOrder] = useState({ value: "sell", label: "بيع" });
  const [governorate, setGovernorate] = useState({ id: 1 });
  const [area, setArea] = useState({ id: 1 });

  function submit(e) {
    try {
      e.preventDefault();

      const formData = { type, order, governorate, area };
      for (const value of e.target) {
        if (value.type !== "hidden" && value.name) {
          formData[value.name] = value.value;
        }
      }
      addBuilding(formData);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <form onSubmit={submit}>
        <div className="form-group col-md-12">
          <Types selectType={setType} />
        </div>

        <div className="form-group col-md-12">
          <Order setSelectedOrder={setOrder} />
        </div>

        <div className="form-group col-md-12">
          <Governorates selectGovernorate={setGovernorate} allAreas />
        </div>

        <div className="form-group col-md-12">
          <Areas
            selectArea={setArea}
            selectedGovernorate={governorate}
            selectedType={type}
            allAreas
          />
        </div>
        <div className="form-group col-md-12">
          <label htmlFor="inputBlock">القطعة</label>
          <input
            name="block"
            type="text"
            className="form-control"
            id="inputBlock"
          />
        </div>
        <div className="form-group col-md-12">
          <label htmlFor="inputBuildingNo">رقم القسيمة</label>
          <input
            name="building_no"
            type="text"
            className="form-control"
            id="inputBuildingNo"
          />
        </div>
        <div className="form-group col-md-12">
          <label htmlFor="building_area">المساحة</label>
          <input
            name="building_area"
            type="text"
            className="form-control"
            id="building_area"
          />
        </div>
        <div className="form-group col-md-12">
          <label htmlFor="inputMobile">رقم المالك</label>
          <input
            name="mobile"
            type="text"
            className="form-control"
            id="inputMobile"
          />
        </div>
        <div className="form-group col-md-12">
          <label htmlFor="inputPrice">السعر المطلوب</label>
          <input
            name="price"
            type="text"
            className="form-control"
            id="inputPrice"
          />
        </div>
        <div className="form-group col-md-12">
          <label htmlFor="exampleFormControlTextarea1">تفاصيل إضافية</label>
          <textarea
            name="details"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div className="col-md-12">
          <button type="submit" className="btn btn-primary">
            إضافه
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBuildingForm;
