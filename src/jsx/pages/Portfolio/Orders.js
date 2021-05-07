import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
const Orders = () => {
  return (
    <div className="balances row justify-content-center">
      <div class="col-xl-10 col-lg-10 col-md-12 col-xxl-10 my-5">
        <h3>Orders</h3>

        <div class="card">
          <div class="card-header">
            <h5>Margin</h5>
          </div>
          <PerfectScrollbar>
            <div class="card-body open-position-table">
              <div class="market-history market-order">
                <div class="table-responsive">
                  <table class="table table-striped">
                    <thead className="border-bottom">
                      <tr>
                        <th scope="col">Status</th>
                        <th scope="col">Pair</th>
                        <th scope="col">Side</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Filled</th>
                        <th scope="col text-left">Price</th>
                        <th scope="col text-left">Stop / Index</th>
                        <th scope="col text-left">Good Til</th>
                        <th scope="col text-left">Cancel</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colspan="9" className="text-left">
                          You have no margin orders.
                        </td>
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
            <h5>Spot</h5>
          </div>
          <PerfectScrollbar>
            <div class="card-body open-position-table">
              <div class="market-history market-order">
                <div class="table-responsive">
                  <table class="table table-striped">
                    <thead className="border-bottom">
                      <tr>
                        <th scope="col">Status</th>
                        <th scope="col">Pair</th>
                        <th scope="col">Side</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Filled</th>
                        <th scope="col text-left">Price</th>
                        <th scope="col text-left">Stop / Index</th>
                        <th scope="col text-left">Good Til</th>
                        <th scope="col text-left">Cancel</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colspan="9" className="text-left">
                          You have no spot orders.
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

export default Orders;
