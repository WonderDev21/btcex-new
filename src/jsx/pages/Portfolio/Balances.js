import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
const Balances = () => {
  return (
    <div className="balances row justify-content-center">
      <div class="col-xl-10 col-lg-11 col-md-12 col-xxl-10 my-5">
        <h3>Balances</h3>

        <div class="card">
          <div class="card-header">
            <h5>Trading History</h5>
          </div>
          <PerfectScrollbar>
            <div class="card-body open-position-table">
              <div class="market-history market-order">
                <div class="table-responsive">
                  <table class="table table-striped">
                    <thead className="border-bottom">
                      <tr>
                        <th scope="col">Asset</th>
                        <th scope="col">Balance</th>
                        <th scope="col">Value</th>
                        <th scope="col">Price</th>
                        <th scope="col">Interest(APR)</th>
                        <th scope="col text-left">Expiry</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-left">
                          <i className="cc ETH"></i> ETH
                        </td>
                        <td className="text-left">0.0000</td>
                        <td className="text-left">$0.00</td>
                        <td className="text-left">$3,288.73</td>
                        <td className="text-left">
                          <span className="text-success">
                            Earn 0.00%
                          </span>{' '}
                          /{' '}
                          <span className="text-danger">
                            Pay 0.29%
                          </span>
                        </td>
                        <td className="text-left">-</td>
                      </tr>
                      <tr>
                        <td className="text-left">
                          <i className="cc USDT"></i> USDT
                        </td>
                        <td className="text-left">0.0000</td>
                        <td className="text-left">$0.00</td>
                        <td className="text-left">$3,288.73</td>
                        <td className="text-left">
                          <span className="text-success">
                            Earn 0.00%
                          </span>{' '}
                          /{' '}
                          <span className="text-danger">
                            Pay 0.29%
                          </span>
                        </td>
                        <td className="text-left">-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </PerfectScrollbar>
        </div>
        <div class="card">
          <div class="card-header">
            <h5>Spot Account</h5>
          </div>
          <PerfectScrollbar>
            <div class="card-body open-position-table">
              <div class="market-history market-order">
                <div class="table-responsive">
                  <table class="table table-striped">
                    <thead className="border-bottom">
                      <tr>
                        <th scope="col">Asset</th>
                        <th scope="col">Balance</th>
                        <th scope="col">Value</th>
                        <th scope="col">Price</th>
                        <th scope="col">Interest(APR)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-left">
                          <i className="cc ETH"></i> ETH
                        </td>
                        <td className="text-left">0.0000</td>
                        <td className="text-left">$0.00</td>
                        <td className="text-left">$3,288.73</td>
                        <td className="text-left">
                          <span className="text-success">
                            Earn 0.00%
                          </span>{' '}
                          /{' '}
                          <span className="text-danger">
                            Pay 0.29%
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-left">
                          <i className="cc USDT"></i> USDT
                        </td>
                        <td className="text-left">0.0000</td>
                        <td className="text-left">$0.00</td>
                        <td className="text-left">$3,288.73</td>
                        <td className="text-left">
                          <span className="text-success">
                            Earn 0.00%
                          </span>{' '}
                          /{' '}
                          <span className="text-danger">
                            Pay 0.29%
                          </span>
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

export default Balances;
