import React, { useState } from 'react';
import {
  Tab,
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
const LimitTabContent = () => {
  const [tillOption, setTillOption] = useState(goodTillOptions[0]);
  const [dateTillOption, setDateTillOption] = useState(
    tillDateOptions[0],
  );
  return (
    <Tab.Pane eventKey="limit" className="pb-3">
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
            placeholder="Enter Price"
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
          <div className="limit_advanced pb-2">
            <label>TIME IN FORCE</label>

            <Dropdown>
              <Dropdown.Toggle
                variant="dark"
                id="dropdown-basic"
                className="d-flex justify-content-between align-items-center"
                block
              >
                {tillOption.label}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {goodTillOptions.map((item, index) => {
                  return (
                    <Dropdown.Item
                      as="button"
                      key={index}
                      onClick={() => setTillOption(item)}
                      active={item.id === tillOption.id}
                    >
                      {item.label}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
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
        </Accordion.Collapse>
      </Accordion>

      <Button variant="primary" className="mt-3 mb-3" block>
        PLACE LIMIT ORDER
      </Button>
    </Tab.Pane>
  );
};

export default LimitTabContent;
