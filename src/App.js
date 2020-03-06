import React, { useState } from "react";
import ReactDOM from "react-dom";
import Browser from "./containers/Browser";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import { Provider } from "react-redux";
import PrivateRoute from "./components/Route/PrivateRoute";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./base/store/store";

function App(props) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Header />
          <Switch>
            <Route path="/">
              <PrivateRoute component={Browser} />
            </Route>
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;

if (document.getElementById("root")) {
  ReactDOM.render(<App />, document.getElementById("root"));
}
