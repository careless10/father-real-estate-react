import React from "react";
import styled from "styled-components";
import AddBuildingForm from "./AddBuildingForm";

const AddBuilding = () => {
  return (
    <Container>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        إضافة عقار
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                نموذج العقار
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <AddBuildingForm />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  button {
    margin-bottom: 12px;
  }
`;

export default AddBuilding;
