import React from 'react';
import { NavLink, Link, useRouteMatch } from 'react-router-dom';

const Sidebar = ({ className }) => {
  let { path, url } = useRouteMatch();
  return (
    <div className={className}>
      <div className="menu">
        <ul>
          <li>
            <NavLink to={`${url}/overview`} activeClassName="active">
              <span>Overview</span>
            </NavLink>
          </li>
          <div className="menu_hr">
            <span>TRADING PAIRS</span>
          </div>
          <li>
            <NavLink to={`${url}/pairs`} activeClassName="active">
              <span>View all</span>
            </NavLink>
          </li>
          <div className="menu_hr">
            <span>SPOT & MARGIN</span>
          </div>
          <li>
            <NavLink to={`${url}/eth-dai`} activeClassName="active">
              <div className="d-flex justify-content-between align-items-center">
                <span className="menu_item">ETH-DAI</span>
                <span className="menu_number d-flex align-items-center">
                  3,842.68<div className="arrow-bottom ml-1"></div>
                </span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to={`${url}/eth-usdc`} activeClassName="active">
              <div className="d-flex justify-content-between align-items-center">
                <span className="menu_item">ETH-USDC</span>
                <span className="menu_number d-flex align-items-center">
                  3,842.68<div className="arrow-bottom ml-1"></div>
                </span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to={`${url}/dai-usdc`} activeClassName="active">
              <div className="d-flex justify-content-between align-items-center">
                <span className="menu_item">DAI-USDC</span>
                <span className="menu_number d-flex align-items-center">
                  3,842.68<div className="arrow-up ml-1"></div>
                </span>
              </div>
            </NavLink>
          </li>
          <div className="menu_hr">
            <span>ASSETS</span>
          </div>
          <li>
            <NavLink to={`${url}/assets`} activeClassName="active">
              <span>View all</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={`${url}/eth`} activeClassName="active">
              <div className="d-flex justify-content-between align-items-center">
                <span className="menu_item">ETH</span>
                <span className="menu_number d-flex align-items-center">
                  $3,842.68
                </span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to={`${url}/usdc`} activeClassName="active">
              <div className="d-flex justify-content-between align-items-center">
                <span className="menu_item">USDC</span>
                <span className="menu_number d-flex align-items-center">
                  $1.00
                </span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to={`${url}/dai`} activeClassName="active">
              <div className="d-flex justify-content-between align-items-center">
                <span className="menu_item">DAI</span>
                <span className="menu_number d-flex align-items-center">
                  $1.00
                </span>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
