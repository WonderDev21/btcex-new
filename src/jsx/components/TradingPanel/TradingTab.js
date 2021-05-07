import React, { useState } from 'react';
import { Tab, Nav, ToggleButtonGroup, Button } from 'react-bootstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import MarketTabContent from './MarketTabContent';
import LimitTabContent from './LimitTabContent';
import StopTabContent from './StopTabContent';

const TradingTab = () => {
  const [tradingOption, setTradingOption] = useState('buy');

  return (
    <>
      <Tab.Container defaultActiveKey="limit">
        <div class="card tradingtab mt-3">
          <ToggleButtonGroup
            size="sm"
            className="m-3"
            name="tradingOption"
          >
            <Button
              variant="success"
              variant={tradingOption === 'buy' ? 'success' : 'dark'}
              onClick={() => setTradingOption('buy')}
            >
              BUY
            </Button>
            <Button
              variant={tradingOption === 'sell' ? 'danger' : 'dark'}
              onClick={() => setTradingOption('sell')}
            >
              SELL
            </Button>
          </ToggleButtonGroup>
          <div class="card-header">
            <Nav variant="pills">
              <Nav.Link eventKey="market">MARKET</Nav.Link>
              <Nav.Link eventKey="limit">LIMIT</Nav.Link>
              <Nav.Link eventKey="stop-limit">STOP</Nav.Link>
            </Nav>
          </div>
          <PerfectScrollbar>
            <div class="card-body market-limit">
              <Tab.Content>
                <MarketTabContent />
                <LimitTabContent />
                <StopTabContent />
              </Tab.Content>
            </div>
          </PerfectScrollbar>
        </div>
      </Tab.Container>
    </>
  );
};

export default TradingTab;
