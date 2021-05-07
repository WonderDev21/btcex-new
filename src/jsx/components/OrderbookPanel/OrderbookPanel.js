import React from 'react';

const OrderbookPanel = () => {
  return (
    <div class="orderbook">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">SIZE</th>
            <th scope="col">Price(USDC)</th>
            <th scope="col">MY SIZE</th>
          </tr>
        </thead>
        <tbody>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
            <tr key={index}>
              <td class="text-danger">10393.50</td>
              <td className="text-center">0.010</td>
              <td>-</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <div class="order-book-divider">
              <h6 class="text-danger">
                {' '}
                <i class="la la-arrow-down"></i> 6587.35
              </h6>
              <span>6520.220 / 4835.00</span>
            </div> */}

      <table class="table">
        <thead>
          <tr>
            <th scope="col">SPREAD</th>
            <th scope="col">4.02</th>
            <th scope="col">0.14%</th>
          </tr>
        </thead>
        <tbody>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
            <tr key={index}>
              <td class="text-success">10393.50</td>
              <td className="text-center">0.010</td>
              <td>-</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderbookPanel;
