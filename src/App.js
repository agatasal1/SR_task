import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';

import ResultsTable from "./components/ResultsTable";
import MatchSubpage from "./components/MatchSubpage";

const history = createBrowserHistory();

function App() {
  return (
    <div>


      <Router history={history}>
        <Switch>
          <Route exact path="/" component={ResultsTable} />
          <Route path="/sport_event/:id" component={MatchSubpage} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;