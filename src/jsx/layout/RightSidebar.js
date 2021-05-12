import React from 'react';
import { NavLink, Link, useRouteMatch } from 'react-router-dom';

const RightSidebar = ({ className }) => {
  let { path, url } = useRouteMatch();
  return (
    <div className={className}>
      <div className="menu">
        <ul>
          <div className="menu_hr">
            <span>TRADE</span>
          </div>
          <li>
            <NavLink to={`/dashboard`} activeClassName="active">
              <span>Spot</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={`/margin`} activeClassName="active">
              <span>Margin</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`${url}/Perpetuals`}
              activeClassName="active"
            >
              <span>Perpetuals</span>
            </NavLink>
          </li>
          <div className="menu_hr">
            <span>TOOLS</span>
          </div>
          <li>
            <NavLink
              to={`/portfolio/overview`}
              activeClassName="active"
            >
              <span>Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={`/markets`} activeClassName="active">
              <span>Markets</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={`/borrow`} activeClassName="active">
              <span>Borrow</span>
            </NavLink>
          </li>
          <div className="menu_hr">
            <span>Resources</span>
          </div>
          <li>
            <NavLink to={`/dashboard`} activeClassName="active">
              <span>Documentation</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={`/dashboard`} activeClassName="active">
              <span>Community</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={`/dashboard`} activeClassName="active">
              <span>Terms of Use</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={`/dashboard`} activeClassName="active">
              <span>Status</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={`/dashboard`} activeClassName="active">
              <span>Help</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RightSidebar;
