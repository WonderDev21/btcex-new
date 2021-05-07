import React from 'react';
import { Tab, Nav, Badge, Button } from 'react-bootstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
const History = () => {
  return (
    <div className="history row justify-content-center">
      <div class="col-xl-10 col-lg-10 col-md-12 col-xxl-10 my-5">
        <Tab.Container defaultActiveKey="active-orders">
          <Nav variant="pills">
            <Nav.Link eventKey="active-orders">Trading</Nav.Link>
            <Nav.Link eventKey="fills">Transfers</Nav.Link>
          </Nav>
          <PerfectScrollbar>
            <div class="card mt-4">
              <div class="card-body open-position-table">
                <div class="market-history market-order">
                  <Tab.Content>
                    <Tab.Pane eventKey="active-orders">
                      <div class="table-responsive">
                        <table class="table table-striped">
                          <thead>
                            <tr>
                              <th scope="col">Action</th>
                              <th scope="col">Market</th>
                              <th scope="col">Side</th>
                              <th scope="col">Amount / Deposit</th>
                              <th scope="col">Fee</th>
                              <th scope="col">Unit Price</th>
                              <th scope="col">Leverage</th>
                              <th scope="col">PNL</th>
                              <th scope="col">Transactions</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td colspan="9">
                                You have no trading history.
                                <Button variant="link">
                                  Connect a wallet to get started
                                </Button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fills">
                      <div class="table-responsive">
                        <table class="table table-striped">
                          <thead>
                            <tr>
                              <th scope="col">Action</th>
                              <th scope="col">Account</th>
                              <th scope="col">Asset</th>
                              <th scope="col">Amount</th>
                              <th scope="col">Transaction</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td colspan="9">
                                You have no transfer history.
                                <Button variant="link">
                                  Connect a wallet to get started
                                </Button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </div>
            </div>
          </PerfectScrollbar>
        </Tab.Container>
      </div>
    </div>
  );
};

export default History;
