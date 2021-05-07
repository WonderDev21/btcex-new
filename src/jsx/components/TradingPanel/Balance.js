import React, { useState } from 'react';
import { Dropdown, Badge, Button } from 'react-bootstrap';
const Balance = () => {
  const [active, setActive] = useState(1);

  return (
    <div className="balance text-center">
      <Dropdown>
        <Dropdown.Toggle
          variant="secondary"
          id="dropdown-basic"
          block
        >
          {active === 1 && (
            <span>
              ETH <i class="mdi mdi-ethereum"></i> DAI
            </span>
          )}
          {active === 2 && (
            <span>
              <i className="mdi mdi-ethereum mr-2"></i> ETH-USDC
            </span>
          )}
          {active === 3 && (
            <span>
              <i className="mdi mdi-ethereum mr-2"></i> DAI-USDC
            </span>
          )}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            as="button"
            eventKey="1"
            active={active === 1}
            onClick={() => setActive(1)}
          >
            <i className="mdi mdi-ethereum mr-2"></i> ETH-DAI{' '}
            <Badge variant="success" className="ml-5">
              +8.62%
            </Badge>
          </Dropdown.Item>
          <Dropdown.Item
            as="button"
            eventKey="2"
            active={active === 2}
            onClick={() => setActive(2)}
          >
            <i className="mdi mdi-ethereum mr-2"></i> ETH-USDC{' '}
            <Badge variant="success" className="ml-5">
              +8.62%
            </Badge>
          </Dropdown.Item>
          <Dropdown.Item
            as="button"
            eventKey="3"
            active={active === 3}
            onClick={() => setActive(3)}
          >
            <i className="mdi mdi-ethereum mr-2"></i> DAI-USDC{' '}
            <Badge variant="danger" className="ml-5">
              -0.05%
            </Badge>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div className="my-5">
        <h4>Connect a wallet to get started</h4>
        <Button variant="primary" className="walletBtn mt-1">
          CONNECT WALLET
        </Button>
      </div>
    </div>
  );
};

export default Balance;
