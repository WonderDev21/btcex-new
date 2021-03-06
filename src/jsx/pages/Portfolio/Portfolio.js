import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Header2 from '../../layout/header2';
import Header4 from '../../layout/header4';
import Sidebar from './Sidebar';
import RightSidebar from '../../layout/RightSidebar';
import Overview from './Overview';
import Balances from './Balances';
import Positions from './Positions';
import Orders from './Orders';
import History from './History';
import ReactSidebar from 'react-sidebar';

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ maxWidth: 768 });
  return isNotMobile ? children : null;
};

const Portfolio = () => {
  const [leftSidebarOpen, setLeftSidebarOpen] = React.useState(false);
  const [rightSidebarOpen, setRightSidebarOpen] =
    React.useState(false);
  const onSetLeftSidebarOpen = (open) => {
    setLeftSidebarOpen(open);
  };

  const onLeftSidebar = () => {
    setLeftSidebarOpen(!leftSidebarOpen);
    setRightSidebarOpen(false);
  };

  const onSetRightSidebarOpen = (open) => {
    setRightSidebarOpen(open);
  };

  const onRightSidebar = () => {
    setRightSidebarOpen(!rightSidebarOpen);
    setLeftSidebarOpen(false);
  };

  return (
    <>
      <Desktop>
        <Header2 />
        <Sidebar className="portfoliosidebar" />
      </Desktop>
      <Default>
        <Header4
          onLeftSidebar={onLeftSidebar}
          onRightSidebar={onRightSidebar}
        />
        <ReactSidebar
          sidebar={<Sidebar className="portfoliomobilesidebar" />}
          open={leftSidebarOpen}
          onSetOpen={onSetLeftSidebarOpen}
          styles={{ sidebar: { position: 'fixed' } }}
        />
        <ReactSidebar
          sidebar={
            <RightSidebar className="portfoliomobilesidebar" />
          }
          open={rightSidebarOpen}
          onSetOpen={onSetRightSidebarOpen}
          pullRight
          styles={{ sidebar: { position: 'fixed' } }}
        />
      </Default>

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
    </>
  );
};

export default Portfolio;
