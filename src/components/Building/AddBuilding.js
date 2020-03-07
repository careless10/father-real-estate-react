import React from "react";
import styled from "styled-components";
import AddBuildingForm from "./AddBuildingForm";
import Modal from "../Modal/Modal";

const AddBuilding = () => {
  const modalButton = props => (
    <button type="button" className="btn btn-primary" {...props}>
      إضافة عقار
    </button>
  );
  return (
    <Container>
      <Modal Button={modalButton}>
        <AddBuildingForm />
      </Modal>
    </Container>
  );
};

const Container = styled.div`
  button {
    margin-bottom: 12px;
  }
`;

export default AddBuilding;
