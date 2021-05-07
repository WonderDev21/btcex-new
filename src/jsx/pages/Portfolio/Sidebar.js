import React from 'react';
import { NavLink, Link, useRouteMatch } from 'react-router-dom';

const Sidebar = () => {
  let { path, url } = useRouteMatch();
  return (
    <div className="portfoliosidebar">
      <div className="menu">
        <ul>
          <li>
            <NavLink to={`${url}/overview`} activeClassName="active">
              <span>Overview</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={`${url}/balances`} activeClassName="active">
              <span>Balances</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={`${url}/positions`} activeClassName="active">
              <span>Positions</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={`${url}/orders`} activeClassName="active">
              <span>Orders</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={`${url}/history`} activeClassName="active">
              <span>History</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
