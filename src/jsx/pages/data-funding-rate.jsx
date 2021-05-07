import React from 'react';
// import { Link } from 'react-router-dom';
// import { Row, Col, Card } from 'react-bootstrap';
import Header2 from '../layout/header2';
import Sidebar from '../layout/sidebar';
import PageTitle from '../element/page-title';
import Footer2 from '../layout/footer2';
import DataSubmenu from '../layout/data-submenu';

function FundingRate() {
  return (
    <>
      <Header2 />
      <Sidebar />
      <PageTitle />

      <div class="content-body">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="card sub-menu">
                <div class="card-body">
                  <DataSubmenu />
                </div>
              </div>
            </div>
            <div class="col-xl-12">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">Founding History</h4>
                </div>
                <div class="card-body">
                  <p>
                    This table contains all historical funding rates
                    on the exchange
                  </p>
                  <div class="table-responsive">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>Start Time</th>
                          <th>Symbol</th>
                          <th>Founding Interval</th>
                          <th>Funding Rate</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>10th March 2020</td>
                          <td>BTC - USDO</td>
                          <td>Every 8 Hours</td>
                          <td>0.0100%</td>
                        </tr>
                        <tr>
                          <td>10th March 2020</td>
                          <td>BTC - USDO</td>
                          <td>Every 8 Hours</td>
                          <td>0.0100%</td>
                        </tr>
                        <tr>
                          <td>10th March 2020</td>
                          <td>BTC - USDO</td>
                          <td>Every 8 Hours</td>
                          <td>0.0100%</td>
                        </tr>
                        <tr>
                          <td>10th March 2020</td>
                          <td>BTC - USDO</td>
                          <td>Every 8 Hours</td>
                          <td>0.0100%</td>
                        </tr>
                        <tr>
                          <td>10th March 2020</td>
                          <td>BTC - USDO</td>
                          <td>Every 8 Hours</td>
                          <td>0.0100%</td>
                        </tr>
                        <tr>
                          <td>10th March 2020</td>
                          <td>BTC - USDO</td>
                          <td>Every 8 Hours</td>
                          <td>0.0100%</td>
                        </tr>
                        <tr>
                          <td>10th March 2020</td>
                          <td>BTC - USDO</td>
                          <td>Every 8 Hours</td>
                          <td>0.0100%</td>
                        </tr>
                        <tr>
                          <td>10th March 2020</td>
                          <td>BTC - USDO</td>
                          <td>Every 8 Hours</td>
                          <td>0.0100%</td>
                        </tr>
                        <tr>
                          <td>10th March 2020</td>
                          <td>BTC - USDO</td>
                          <td>Every 8 Hours</td>
                          <td>0.0100%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer2 />
    </>
  );
}

export default FundingRate;
