import React, { useState, useEffect } from "react";
import { getAllTypes } from "../base/utilities/apis/sidebar";
import styled from "styled-components";
import { connect } from "react-redux";
import * as actions from "../base/browser/action";

const Sidebar = props => {
  const [selected, setSelected] = useState(1);

  useEffect(() => {
    getAllTypes().then(res => {
      console.log(res);
      props.setList(res.data);
      props.setType(res.data[0]);
    });
  }, []);

  function selectType(type) {
    setSelected(type.id);
    props.setType(type);
  }

  return (
    <Container className="list-group">
      {props.browser.list.length > 0 &&
        props.browser.list.map(el => (
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

const mapStateToProps = state => ({
  browser: state.browser
});

const mapDispatchToProps = dispatch => ({
  setType: type => dispatch(actions.setType(type)),
  setList: list => dispatch(actions.setList(list))
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
