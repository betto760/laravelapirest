import React from "react";
import {Route, Switch} from "react-router-dom";

import asyncComponent from "../util/asyncComponent";

const App = ({match}) => (
  <div className="gx-main-content-wrapper">
    <Switch>
      <Route path={`${match.url}sample`} component={asyncComponent(() => import('./SamplePage/index'))} />
      <Route path={`${match.url}personas`} component={asyncComponent(() => import('./Personas/index'))} />
      <Route path={`${match.url}persona/nuevo`} component={asyncComponent(() => import('./Personas/create'))} />
      <Route path={`${match.url}persona/:id/editar`} component={asyncComponent(() => import('./Personas/edit'))} />
    </Switch>
  </div>
);

export default App;
