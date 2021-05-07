import React, { useState } from 'react';
import {
  Tab,
  ToggleButtonGroup,
  Button,
  Accordion,
  FormControl,
  InputGroup,
  Dropdown,
  DropdownButton,
} from 'react-bootstrap';
import {
  goodTillOptions,
  tillDateOptions,
} from '../../../config/constants';
const StopTabContent = () => {
  const [tradingOption, setTradingOption] = useState('buy');
  const [stopOption, setStopOption] = useState('standard');
  const [maxSlip, setMaxSlip] = useState('');
  const [tillOption, setTillOption] = useState(goodTillOptions[0]);
  const [dateTillOption, setDateTillOption] = useState(
    tillDateOptions[0],
  );
  return (
    <Tab.Pane eventKey="stop-limit" className="pb-3">
      <ToggleButtonGroup
        size="sm"
        className="w-100"
        name="stopOption"
        block
      >
        <Button
          variant={stopOption === 'standard' ? 'warning' : 'dark'}
          onClick={() => setStopOption('standard')}
        >
          STANDARD
        </Button>
        <Button
          variant={stopOption === 'trailing' ? 'warning' : 'dark'}
          onClick={() => setStopOption('trailing')}
        >
          TRAILING
        </Button>
      </ToggleButtonGroup>
      <div class="form-group mt-3">
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
      {stopOption === 'standard' ? (
        <div class="form-group">
          <label htmlFor="basic-url">STOP PRICE</label>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">DAI</span>
            </div>
            <input
              type="text"
              name="currency_amount"
              class="form-control text-right"
              placeholder="Enter Price"
            />
          </div>
        </div>
      ) : (
        <div class="form-group">
          <label htmlFor="basic-url">TRAILING PERCENT</label>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">%</span>
            </div>
            <input
              type="text"
              name="currency_amount"
              class="form-control text-right"
              placeholder="Enter Percent"
            />
          </div>
        </div>
      )}

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
            <div className="limit_advanced pb-2">
              {tillOption.id === 0 && (
                <>
                  <label className="mt-2">GOOD TIL DATE</label>
                  <InputGroup>
                    <FormControl
                      placeholder="28"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />

                    <DropdownButton
                      as={InputGroup.Append}
                      variant="outline-dark"
                      title={dateTillOption.label}
                      id="input-group-dropdown-2"
                    >
                      {tillDateOptions.map((item, index) => {
                        return (
                          <Dropdown.Item
                            as="button"
                            key={index}
                            onClick={() => setDateTillOption(item)}
                          >
                            {item.label}
                          </Dropdown.Item>
                        );
                      })}
                    </DropdownButton>
                  </InputGroup>
                </>
              )}
            </div>
            <div className="stop_advanced">
              <label>MAX SLIPPAGE</label>
              <div className="d-flex justify-content-between pb-2">
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
            </div>
          </>
        </Accordion.Collapse>
      </Accordion>

      <Button variant="primary" className="mt-3" block>
        PLACE STOP ORDER
      </Button>
    </Tab.Pane>
  );
};

export default StopTabContent;
