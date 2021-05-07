import React from 'react';

const TradingHistoryPanel = () => {
  return (
    <div class="tradinghistory">
      <div class="table-responsive">
        <table class="table table-borderless">
          <thead>
            <tr>
              <th scope="col">SIZE</th>
              <th scope="col">PRICE(USDC)</th>
              <th scope="col">Time</th>
            </tr>
          </thead>
          <tbody>
            {[
              0,
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11,
              12,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ].map((item, index) => {
              return (
                <tr key={index}>
                  <td class="text-danger">10393.50</td>
                  <td className="text-center">0.010</td>
                  <td>14.109</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TradingHistoryPanel;
