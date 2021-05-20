import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import ReactSidebar from 'react-sidebar';
import Header2 from '../../layout/header2';
import Header4 from '../../layout/header4';
import Sidebar from './Sidebar';
import RightSidebar from '../../layout/RightSidebar';
import Overview from './Overview';
import TradingPairs from './TrandingPairs';
import Assets from './Assets';
import Exchange from './Exchange';
import CoinMarket from './CoinMarket';

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ maxWidth: 768 });
  return isNotMobile ? children : null;
};

const Markets = () => {
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
        <Sidebar className="marketsidebar" />
      </Desktop>
      <Default>
        <Header4
          onLeftSidebar={onLeftSidebar}
          onRightSidebar={onRightSidebar}
        />
        <ReactSidebar
          sidebar={<Sidebar className="marketmobilesidebar" />}
          open={leftSidebarOpen}
          onSetOpen={onSetLeftSidebarOpen}
          styles={{ sidebar: { position: 'fixed' } }}
        />
        <ReactSidebar
          sidebar={<RightSidebar className="marketmobilesidebar" />}
          open={rightSidebarOpen}
          onSetOpen={onSetRightSidebarOpen}
          pullRight
          styles={{ sidebar: { position: 'fixed' } }}
        />
      </Default>

      <div className="portfolio">
        <Switch>
          <Route
            path="/markets/overview"
            exact
            component={Overview}
          />
          <Route
            path="/markets/pairs"
            exact
            component={TradingPairs}
          />
          <Route path="/markets/assets" exact component={Assets} />
          <Route
            path="/markets/eth-dai"
            exact
            component={() => <Exchange title="ETH-DAI" />}
          />
          <Route
            path="/markets/eth-usdc"
            exact
            component={Exchange}
            component={() => <Exchange title="ETH-USDC" />}
          />
          <Route
            path="/markets/dai-usdc"
            exact
            component={() => <Exchange title="DAI-USDC" />}
          />
          <Route
            path="/markets/eth"
            exact
            component={() => (
              <CoinMarket title="Ethereum" name="ETH" />
            )}
          />
          <Route
            path="/markets/usdc"
            exact
            component={() => (
              <CoinMarket title="USDC Coin" name="USDC" />
            )}
          />
          <Route
            path="/markets/dai"
            exact
            component={() => <CoinMarket title="DAI" name="DAI" />}
          />

          {/* <Route
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
          /> */}
        </Switch>
      </div>
    </>
  );
};

export default Markets;
