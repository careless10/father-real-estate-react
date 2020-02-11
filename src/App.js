import React, { useState } from "react";
import ReactDOM from "react-dom";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Browser from "./containers/Browser";
import AddBuilding from "./components/Building/AddBuilding";
import Header from "./components/Header/Header";
import { Provider } from "react-redux";
import store from "./base/store/store";

function App(props) {
  const [type, setType] = useState({ id: 1 });

  return (
    <Provider store={store}>
      <Router>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <Sidebar setType={setType} />
            </div>
            <div className="col-md-10">
              <AddBuilding />
              <Switch>
                <Route path="/">
                  <Browser type={type} />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

if (document.getElementById("root")) {
  ReactDOM.render(<App />, document.getElementById("root"));
}
