import React, { useState } from "react";
import ReactDOM from "react-dom";
import Browser from "./containers/Browser";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import { Provider } from "react-redux";
import store from "./base/store/store";
import PrivateRoute from "./components/Route/PrivateRoute";

function App(props) {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/">
            <PrivateRoute component={Browser} />
          </Route>
        </Switch>
        <Header />
      </Router>
    </Provider>
  );
}

export default App;

if (document.getElementById("root")) {
  ReactDOM.render(<App />, document.getElementById("root"));
}
