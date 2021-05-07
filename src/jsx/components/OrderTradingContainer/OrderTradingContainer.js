import React from 'react';
import { Tab, Nav } from 'react-bootstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import OrderbookPanel from '../OrderbookPanel/OrderbookPanel';
import TradingHistoryPanel from '../TradingHistoryPanel/TradingHistoryPanel';
const OrderTradingContainer = () => {
  return (
    <div class="col-xl-2 col-lg-6 col-md-12 col-xxl-6">
      <Tab.Container defaultActiveKey="orderbook">
        <div class="card">
          <div class="card-header">
            <Nav variant="pills">
              <Nav.Link eventKey="orderbook">BOOK</Nav.Link>
              <Nav.Link eventKey="tradinghistory">TRADES</Nav.Link>
            </Nav>
          </div>
          <div className="card-body order-book">
            <PerfectScrollbar>
              <Tab.Content>
                <Tab.Pane eventKey="orderbook">
                  <OrderbookPanel />
                </Tab.Pane>
                <Tab.Pane eventKey="tradinghistory">
                  <TradingHistoryPanel />
                </Tab.Pane>
              </Tab.Content>
            </PerfectScrollbar>
          </div>
        </div>
      </Tab.Container>
    </div>
  );
};

export default OrderTradingContainer;
