import React, { useState } from 'react';
import { Tab, Button, Accordion, FormControl } from 'react-bootstrap';

const MarketTabContent = () => {
  const [maxSlip, setMaxSlip] = useState('');
  return (
    <Tab.Pane eventKey="market">
      <div class="form-group">
        <label htmlFor="basic-url">AMOUNT</label>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">ETH</span>
          </div>
          <input
            type="text"
            name="currency_amount"
            class="form-control text-right"
            placeholder="0.00000"
          />
        </div>
      </div>

      <div class="form-group">
        <label htmlFor="basic-url">PRICE</label>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">DAI</span>
          </div>
          <input
            type="text"
            name="currency_amount"
            class="form-control text-right"
            placeholder="~2510.70"
          />
        </div>
      </div>
      <Accordion
        defaultActiveKey="0"
        className="border-top border-bottom"
      >
        <Accordion.Toggle
          as={Button}
          variant="link"
          eventKey="0"
          className="text-muted px-0 d-flex justify-content-between"
          block
        >
          ADVANCED <i className="mdi mdi-chevron-right"></i>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <>
            <label>MAX SLIPPAGE</label>
            <div className="mark_advanced d-flex justify-content-between pb-2">
              <Button
                variant="outline-dark"
                size="sm"
                className={maxSlip === 'half' && `selected`}
                onClick={() => setMaxSlip('half')}
              >
                0.5%
              </Button>
              <Button
                variant="outline-dark"
                size="sm"
                className={maxSlip === 'one' && `selected`}
                onClick={() => setMaxSlip('one')}
              >
                1%
              </Button>
              <FormControl
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                placeholder="CUSTOM"
              />
            </div>
          </>
        </Accordion.Collapse>
      </Accordion>

      <Button variant="primary" className="mt-5" block>
        PLACE MARKET ORDER
      </Button>
    </Tab.Pane>
  );
};

export default MarketTabContent;
