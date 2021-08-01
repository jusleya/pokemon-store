import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
import { history } from './lib/core/routes';
import { ROUTES } from './constants/urls';
import Store from './pages/Store';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path={ROUTES.store} component={Store} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
