import React, { useState, useEffect } from "react";
import { getAllTypes } from "../base/utilities/apis/sidebar";
import styled from "styled-components";

const Sidebar = props => {
  const [selected, setSelected] = useState(1);
  const [list, setList] = useState(null);

  useEffect(() => {
    getAllTypes().then(res => {
      setList(res.data.data);
      props.setType(res.data[0]);
    });
  }, []);

  function selectType(type) {
    setSelected(type.id);
    props.setType(type);
  }

  return (
    <Container className="list-group">
      {list &&
        list.map(el => (
          <button
            key={el.id}
            onClick={() => selectType(el)}
            type="button"
            className={
              "list-group-item list-group-item-action d-flex justify-content-between align-items-center " +
              (selected == el.id && "active")
            }
          >
            {el.name}
            <span className="badge badge-primary badge-pill">
              {el.buildings.length}
            </span>
          </button>
        ))}
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  a {
    display: block;
  }
  button {
    cursor: pointer;
  }
`;

export default Sidebar;
