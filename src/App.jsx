import React from "react";
import { Redirect, Route, Switch } from "react-router";
import "./App.css";
import Main from "./components/main/Main";
import Table from "./components/table/Table";

function App() {
  return (
    <Switch>
      <Route path="/" component={Main} exact={true} />
      <Route path="/table" component={Table} exact={true} />
      <Redirect from="*" to="/" />
    </Switch>
  );
}

export default App;
