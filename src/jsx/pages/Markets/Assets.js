import React from 'react';
import { Button } from 'react-bootstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';

const Assets = () => {
  return (
    <div className="overview row justify-content-center">
      <div class="col-xl-10 col-lg-11 col-md-12 col-xxl-10 my-5">
        <h3 className="mt-5 mb-4 ml-md-4 ml-lg-0">Assets</h3>
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
                            <th scope="col">Asset</th>
                            <th scope="col">Price</th>
                            <th scope="col">Util</th>
                            <th scope="col">Borrow APR</th>
                            <th scope="col">Supply APR</th>
                            <th scope="col">Available</th>
                            <th scope="col">Borrowed</th>
                            <th scope="col">Supplied</th>
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

export default Assets;
