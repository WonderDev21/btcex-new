import React from 'react';
import TradingTab from './TradingTab';
import Balance from './Balance';
const PanelContainer = () => {
  return (
    <div class="col-xl-2 col-lg-6 col-md-12 col-xxl-6">
      <Balance />
      <TradingTab />
    </div>
  );
};

export default PanelContainer;
