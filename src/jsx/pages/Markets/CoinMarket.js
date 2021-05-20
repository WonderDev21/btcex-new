import React from 'react';
import MarketCoinDetail from '../../components/MarketCoinDetail/MarketCoinDetail';
const CoinMarket = ({ title, name }) => {
  return (
    <div className="coinmarket row justify-content-center">
      <div class="col-xl-10 col-lg-11 col-md-12 col-xxl-10 my-5">
        <h3 className="mt-5 mb-4 ml-md-4 ml-lg-0">
          {title}
          <span className="text-muted ml-3">{name}</span>
        </h3>
        <div className="row border">
          <div className="col col-4 border">
            <MarketCoinDetail
              title="Oracle Price"
              subtitle="Price"
              value="$2,675,39"
            />
          </div>
          <div className="col col-4 border">
            <MarketCoinDetail
              title="Borrow"
              subtitle="Interest Rage(APR)"
              value="0.10%"
            />
          </div>
          <div className="col col-4 border">
            <MarketCoinDetail
              title="Lend"
              subtitle="Interest Rate(APR)"
              value="0.00%"
            />
          </div>
          <div className="col col-4 border">
            <MarketCoinDetail
              title="Available"
              subtitle="Lending Pool"
              value="51,645"
            />
          </div>
          <div className="col col-4 border">
            <MarketCoinDetail
              title="Supplied"
              subtitle="Lending Pool"
              value="51,895"
            />
          </div>
          <div className="col col-4 border">
            <MarketCoinDetail
              title="Borrowed"
              subtitle="Lending Pool"
              value="250"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinMarket;
