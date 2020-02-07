import React, { useState } from "react";
import ReactDOM from "react-dom";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Browser from "./Browser";
import AddBuilding from "./AddBuilding";

function App(props) {
    const [type, setType] = useState({ id: 1 });
    return (
        <Router>
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <Sidebar setType={setType} />
                    </div>
                    <div className="col-md-10">
                        <AddBuilding />
                        <Switch>
                            <Route path="/home">
                                <Browser type={type} />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;

if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
