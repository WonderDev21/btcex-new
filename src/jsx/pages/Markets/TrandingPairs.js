import React from 'react';
import { Button } from 'react-bootstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';

const TradingPairs = () => {
  return (
    <div className="overview row justify-content-center">
      <div class="col-xl-10 col-lg-11 col-md-12 col-xxl-10 my-5">
        <h3 className="mb-4 ml-md-4 ml-lg-0">Pairs</h3>
        <div className="row ">
          <div className="col pl-0 pr-0">
            <div class="card">
              <PerfectScrollbar>
                <div class="card-body open-position-table">
                  <div class="market-history market-order">
                    <div class="table-responsive">
                      <table class="table table-striped">
                        <thead className="border-bottom">
                          <tr>
                            <th scope="col">Pair</th>
                            <th scope="col">Change</th>
                            <th scope="col">Volume • 24H</th>
                            <th scope="col">Trades</th>
                            <th scope="col">Last</th>
                            <th scope="col">High</th>
                            <th scope="col">Low</th>
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
      </div>
    </div>
  );
};

export default TradingPairs;
