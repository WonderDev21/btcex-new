import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, Nav } from 'react-bootstrap';
import Header2 from '../layout/header2';
import Sidebar from '../layout/sidebar';
import Footer2 from '../layout/footer2';
import PerfectScrollbar from 'react-perfect-scrollbar';

import PanelContainer from '../components/TradingPanel/PanelContainer';
import OrderTradingContainer from '../components/OrderTradingContainer/OrderTradingContainer';
import TradingViewPanel from '../components/TradingViewPanel/TradingViewPanel';
import DatatablePanel from '../components/DatatablePanel/DatatablePanel';
import TradingHistoryPanel from '../components/TradingHistoryPanel/TradingHistoryPanel';

import DepthChart from '../charts/depth';
import RangeSlider from '../element/range-slider';

import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-rangeslider/lib/index.css';

function Dashboard() {
  return (
    <>
      <Header2 />
      {/* <Sidebar /> */}

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
