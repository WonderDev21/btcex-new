import React from 'react';

const MarketTotalValues = ({ title }) => {
  return (
    <div className="marketlinechart">
      <div className="p-3">
        <div className="marketlinechart_title">
          <h6 className="fs-16">{title}</h6>
          <p className="fs-14 text-muted">Lending Pool</p>
        </div>

        <h5 className="fs-19 marketlinechart_subtitle">
          $123,1231,231,1
        </h5>
      </div>
    </div>
  );
};

export default MarketTotalValues;
