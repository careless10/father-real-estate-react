import React, { useState } from "react";
import Governorates from "../components/Area/Governorates";
import Areas from "../components/Area/Areas";
import BuildingsList from "../components/Building/BuildingsList";
import Order from "../components/Order";
import AddBuilding from "../components/Building/AddBuilding";
import { connect } from "react-redux";
import * as actions from "../base/browser/action";

const Browser = props => {
  return (
    <>
      <AddBuilding />
      <div className="card">
        <div className="card-header">باحث العقارات</div>

        <div className="card-body">
          <Order setSelectedOrder={props.setSelectedOrder} />
          <br />
          <Governorates
            selectGovernorate={props.setSelectedGovernorate}
            selectedType={props.browser.type}
          />
          <br />
          <Areas
            selectArea={props.setSelectedArea}
            selectedGovernorate={props.browser.governorate}
            selectedType={props.browser.type}
          />
        </div>
      </div>

      <br />

      <div className="card">
        <div className="card-header">العقارات</div>

        <div className="card-body">
          <BuildingsList
            selectedOrder={props.browser.order}
            selectedType={props.browser.type}
            selectedArea={props.browser.area}
          />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  browser: state.browser
});

const mapDispatchToProps = dispatch => ({
  setSelectedGovernorate: id => dispatch(actions.setGovernorate(id)),
  setSelectedOrder: id => dispatch(actions.setOrder(id)),
  setSelectedArea: id => dispatch(actions.setArea(id)),
  setBuildings: buildings => dispatch(actions.setBuildings(buildings))
});

export default connect(mapStateToProps, mapDispatchToProps)(Browser);
