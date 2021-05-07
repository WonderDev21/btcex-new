import React from 'react';
import { Tab, Nav, Badge } from 'react-bootstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
const DatatablePanel = () => {
  return (
    <div class="row">
      <div class="col">
        <Tab.Container defaultActiveKey="active-orders">
          <div class="card">
            <div class="card-header">
              <Nav variant="pills">
                <Nav.Link eventKey="active-orders">ORDERS</Nav.Link>
                <Nav.Link eventKey="fills">FILLS</Nav.Link>
              </Nav>
            </div>
            <PerfectScrollbar>
              <div class="card-body open-position-table">
                <div class="market-history market-order">
                  <Tab.Content>
                    <Tab.Pane eventKey="active-orders">
                      <div class="table-responsive">
                        <table class="table table-striped">
                          <thead>
                            <tr>
                              <th scope="col">TYPE</th>
                              <th scope="col">
                                AMOUNT
                                <Badge
                                  variant="secondary"
                                  className="ml-1"
                                >
                                  ETH
                                </Badge>
                              </th>
                              <th scope="col">
                                FILLED
                                <Badge
                                  variant="secondary"
                                  className="ml-1"
                                >
                                  ETH
                                </Badge>
                              </th>
                              <th scope="col">
                                PRICE
                                <Badge
                                  variant="secondary"
                                  className="ml-1"
                                >
                                  USDC
                                </Badge>
                              </th>
                              <th scope="col">
                                STOP / INDEX
                                <Badge
                                  variant="secondary"
                                  className="ml-1"
                                >
                                  USDC
                                </Badge>
                              </th>
                              <th scope="col">STATUS</th>
                              <th scope="col">GOOD TIL</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>BTC - USD</td>
                              <td>5623.58</td>
                              <td>0.95874</td>
                              <td>0.24566 BTC</td>
                              <td>0.24566 BTC</td>
                              <td>0.24566</td>
                              <td>0.02543</td>
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
                              <th scope="col">TYPE</th>
                              <th scope="col">
                                AMOUNT
                                <Badge
                                  variant="secondary"
                                  className="ml-1"
                                >
                                  ETH
                                </Badge>
                              </th>
                              <th scope="col">
                                PRICE
                                <Badge
                                  variant="secondary"
                                  className="ml-1"
                                >
                                  USDC
                                </Badge>
                              </th>
                              <th scope="col">
                                FEE
                                <Badge
                                  variant="secondary"
                                  className="ml-1"
                                >
                                  USDC
                                </Badge>
                              </th>
                              <th scope="col">STATUS</th>
                              <th scope="col">TIME</th>
                              <th scope="col">TRANSACTION</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>5623.58</td>
                              <td>5623.58</td>
                              <td>5623.58</td>
                              <td>5623.58</td>
                              <td>0.24566 BTC</td>
                              <td>07:25:35</td>
                              <td>#2658455</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </div>
            </PerfectScrollbar>
          </div>
        </Tab.Container>
      </div>
    </div>
  );
};

export default DatatablePanel;
