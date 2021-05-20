import React from 'react';

import MarketExchangeChart from '../../components/MarketExchangeChart/MarketExchangeChart';
import MarketLineChart from '../../components/MarketLineChart/MarketLineChart';

const Exchange = () => {
  return (
    <div className="exchange row justify-content-center">
      <div class="col-xl-10 col-lg-11 col-md-12 col-xxl-10 my-5">
        <h3 className="mb-4 ml-md-4 ml-lg-0">ETH-DAI</h3>
        <div className="row ">
          <div className="col pl-0 pr-0">
            <MarketExchangeChart />
          </div>
          <div className="col border-top border-right border-bottom pl-0 pr-0">
            <div className="p-4 d-flex justify-content-between border-bottom">
              <div>
                <h6>Recent Prices</h6>
                <p>Trades 24H</p>
              </div>
              <div>
                <div className="d-flex">
                  <p>LAST</p>
                  <p className="ml-3 text-muted">2,214.29</p>
                </div>
                <div className="d-flex">
                  <p>OPEN</p>
                  <p className="ml-3 text-muted">2,214.29</p>
                </div>
                <div className="d-flex">
                  <p>HIGH</p>
                  <p className="ml-3 text-muted">2,214.29</p>
                </div>
                <div className="d-flex">
                  <p>LOW</p>
                  <p className="ml-3 text-muted">2,214.29</p>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center exchange_bg">
              <MarketLineChart title={'Total Trades'} type="Trades" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exchange;
