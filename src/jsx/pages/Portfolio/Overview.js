import React from 'react';
import AreaChart from '../../charts/area';
import { Button } from 'react-bootstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
const Overview = () => {
  return (
    <div className="overview row justify-content-center">
      <div class="col-xl-10 col-lg-10 col-md-12 col-xxl-10 my-5">
        <h3>Overview</h3>
        <div class="card mt-3">
          <div class="card-body">
            <div className="row no-gutters">
              <div className="col-lg-4 border-right">
                <div className="p-4">
                  <h5>Portfolio Value</h5>
                  <h3 className="mt-4">$0.00</h3>
                  <h6>
                    $0.00{' '}
                    <span className="text-muted">(0.00%)today</span>
                  </h6>
                </div>
                <div className="p-4 border-top">
                  <div className="d-flex justify-content-between">
                    <div>
                      <h6 className="text-muted">Margin Account</h6>
                      <h5>$0.00</h5>
                    </div>
                    <div>
                      <h6 className="text-muted">Spot Account</h6>
                      <h5>$0.00</h5>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h6 className="text-muted">Margin Positions</h6>
                    <h5>$0.00</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <AreaChart />
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <div>
              <h5>Trading History</h5>
              <h6 className="text-muted">
                A log of all your recent trades
              </h6>
            </div>
            <Button>VIEW ALL</Button>
          </div>
          <PerfectScrollbar>
            <div class="card-body open-position-table">
              <div class="market-history market-order">
                <div class="table-responsive">
                  <table class="table table-striped">
                    <thead className="border-bottom">
                      <tr>
                        <th scope="col">Action</th>
                        <th scope="col">Market</th>
                        <th scope="col">Side</th>
                        <th scope="col">Amount / Deposit</th>
                        <th scope="col">Fee</th>
                        <th scope="col">Unit Price</th>
                        <th scope="col">Leverage</th>
                        <th scope="col">PNL</th>
                        <th scope="col">Transaction</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colspan="9" className="text-left">
                          You have no trading history.
                          <Button variant="link">
                            Connect a wallet to get started
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </PerfectScrollbar>
        </div>
      </div>
    </div>
  );
};

export default Overview;
