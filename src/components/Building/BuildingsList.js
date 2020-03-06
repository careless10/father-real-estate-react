import React, { useEffect, useState } from "react";
import { getRealEstate } from "../../base/utilities/apis/browser";
import { connect } from "react-redux";
import * as actions from "../../base/browser/action";

const BuildingsList = ({
  selectedType,
  selectedArea,
  selectedOrder,
  ...props
}) => {
  useEffect(() => {
    getRealEstate(selectedType, selectedOrder, selectedArea).then(res => {
      props.setBuildings(res);
    });
  }, [selectedArea, selectedType, selectedOrder]);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">القطعة</th>
          <th scope="col">رقم القسيمة</th>
          <th scope="col">المساحة</th>
          <th scope="col">رقم المالك</th>
          <th scope="col">السعر المطلوب</th>
          <th scope="col">التاريخ</th>
          <th scope="col">تفاصيل</th>
        </tr>
      </thead>
      <tbody>
        {props.browser.buildings.length > 0 &&
          props.browser.buildings.map(el => (
            <tr key={el.id}>
              <th scope="row">{el.block}</th>
              <td>{el.building_no}</td>
              <td>{el.area} م</td>
              <td>{el.mobile}</td>
              <td>{el.price} د.ك</td>
              <td>{el.offer_date}</td>
              <td>{el.details}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

BuildingsList.defaultProps = {
  selectedArea: { id: 1 },
  selectedType: { id: 1 },
  selectedOrder: { id: 1 }
};

const mapStateToProps = state => ({
  browser: state.browser
});

const mapDispatchToProps = dispatch => ({
  setBuildings: buildings => dispatch(actions.setBuildings(buildings))
});

export default connect(mapStateToProps, mapDispatchToProps)(BuildingsList);
