import React from 'react';
import Header2 from '../../layout/header2';
import Sidebar from './Sidebar';
import { Route, Switch, Redirect } from 'react-router-dom';
import Overview from './Overview';
import Balances from './Balances';
import Positions from './Positions';
import Orders from './Orders';
import History from './History';
const Portfolio = () => {
  return (
    <div>
      <Header2 />
      <Sidebar />
      <div className="portfolio">
        <Switch>
          <Route
            path="/portfolio/overview"
            exact
            component={Overview}
          />
          <Route
            path="/portfolio/balances"
            exact
            component={Balances}
          />
          <Route
            path="/portfolio/positions"
            exact
            component={Positions}
          />
          <Route path="/portfolio/orders" exact component={Orders} />
          <Route
            path="/portfolio/history"
            exact
            component={History}
          />
          <Redirect
            from="/portfolio"
            exact
            to="/portfolio/overview"
          />
        </Switch>
      </div>
    </div>
  );
};

export default Portfolio;
