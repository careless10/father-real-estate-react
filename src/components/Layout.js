import React from "react";
import Sidebar from "./Sidebar";

const Layout = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">{props.children}</div>
      </div>
    </div>
  );
};

export default Layout;
