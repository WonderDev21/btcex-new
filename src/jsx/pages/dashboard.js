import React from 'react';
import { useMediaQuery } from 'react-responsive';
import ReactSidebar from 'react-sidebar';
import Header2 from '../layout/header2';
import Header4 from '../layout/header4';
import RightSidebar from '../layout/RightSidebar';
import Footer2 from '../layout/footer2';

import PanelContainer from '../components/TradingPanel/PanelContainer';
import OrderTradingContainer from '../components/OrderTradingContainer/OrderTradingContainer';
import TradingViewPanel from '../components/TradingViewPanel/TradingViewPanel';
import DatatablePanel from '../components/DatatablePanel/DatatablePanel';

import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-rangeslider/lib/index.css';
const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ maxWidth: 768 });
  return isNotMobile ? children : null;
};
function Dashboard() {
  const [leftSidebarOpen, setLeftSidebarOpen] = React.useState(false);
  const [rightSidebarOpen, setRightSidebarOpen] =
    React.useState(false);
  const onSetLeftSidebarOpen = (open) => {
    setLeftSidebarOpen(open);
  };

  const onLeftSidebar = () => {
    // setLeftSidebarOpen(!leftSidebarOpen);
  };

  const onSetRightSidebarOpen = (open) => {
    setRightSidebarOpen(open);
  };

  const onRightSidebar = () => {
    setRightSidebarOpen(!rightSidebarOpen);
  };
  return (
    <>
      <Desktop>
        <Header2 />
      </Desktop>
      <Default>
        <Header4
          onLeftSidebar={onLeftSidebar}
          onRightSidebar={onRightSidebar}
        />
        {/* <ReactSidebar
          sidebar={<Sidebar className="portfoliomobilesidebar" />}
          open={leftSidebarOpen}
          onSetOpen={onSetLeftSidebarOpen}
          styles={{ sidebar: { position: 'fixed' } }}
        /> */}
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

      <div class="content-body" id="dashboard">
        <div class="container-fluid">
          <div class="row">
            <PanelContainer />
            <OrderTradingContainer />
            <div class="col-xl-8 col-lg-12 col-md-12 col-xxl-12">
              {/* <!-- TradingView Widget BEGIN --> */}
              <TradingViewPanel />
              {/* <!-- TradingView Widget END --> */}
              <DatatablePanel />
            </div>
            {/* <TradingHistoryPanel /> */}
          </div>
        </div>
      </div>

      <Footer2 />
    </>
  );
}

export default Dashboard;
