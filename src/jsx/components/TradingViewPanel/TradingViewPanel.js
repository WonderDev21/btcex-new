import React from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
const TradingViewPanel = () => {
  return (
    <div
      class="tradingview-widget-container card"
      style={{ height: '460px' }}
    >
      <TradingViewWidget
        symbol="NASDAQ:AAPL"
        theme={Themes.DARK}
        locale="fr"
        autosize
      />
    </div>
  );
};

export default TradingViewPanel;
