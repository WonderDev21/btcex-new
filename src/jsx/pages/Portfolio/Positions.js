import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
const Positions = () => {
  return (
    <div className="balances row justify-content-center">
      <div class="col-xl-10 col-lg-11 col-md-12 col-xxl-10 my-5">
        <h3>Positions</h3>

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
                        <th scope="col">Market</th>
                        <th scope="col">Lev</th>
                        <th scope="col">Side</th>
                        <th scope="col">PNL</th>
                        <th scope="col">Size / Equity</th>
                        <th scope="col text-left">Liq / Open</th>
                        <th scope="col text-left">Stop-Loss</th>
                        <th scope="col text-left">Take-Profit</th>
                        <th scope="col text-left">Expiry</th>
                        <th scope="col text-left">Close</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colspan="10" className="text-left">
                          You have no margin positions.
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

export default Positions;
