import React, { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Root, Wrapper } from "./App.styled";
import { IncidentDetailRoute } from "../../routes/IncidentDetailRoute/IncidentDetailRoute";
import { IncidentListRoute } from "../../routes/IncidentListRoute/IncidentListRoute";
import { useAppState } from "./App.hook";

export const App: FC = () => {
  const { isLoading, incidents } = useAppState();
  return (
    <Root>
      <Wrapper>
        <Router>
          <Switch>
            <Route path="/:incidentId">
              <IncidentDetailRoute />
            </Route>
            <Route path="/">
              <IncidentListRoute isLoading={isLoading} incidents={incidents} />
            </Route>
          </Switch>
        </Router>
      </Wrapper>
    </Root>
  );
};

export default App;
