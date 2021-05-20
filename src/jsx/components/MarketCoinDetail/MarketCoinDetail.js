import React from 'react';

const MarketCoinDetail = ({ title, subtitle, value }) => {
  return (
    <div className="col p-3">
      <h6 className="fs-18 text-muted">{title}</h6>
      <p>{subtitle}</p>

      <h3 className="mt-5 text-muted">{value}</h3>
    </div>
  );
};

export default MarketCoinDetail;
