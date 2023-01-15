import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ResultsTable from "./components/ResultsTable";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ResultsTable} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;