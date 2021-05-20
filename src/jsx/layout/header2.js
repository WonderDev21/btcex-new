import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Dropdown, Button } from 'react-bootstrap';
import { withRouter } from 'react-router';

const MoreToggle = React.forwardRef(({ children, onClick }, ref) => (
  <div
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    <div>
      <Button variant="dark">
        More
        <span class="arrow ml-2">
          <i class="la la-angle-down"></i>
        </span>
      </Button>
    </div>
  </div>
));

const ProfileToggle = React.forwardRef(
  ({ children, onClick }, ref) => (
    <div
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      <div className="profile_log">
        <div class="user">
          <span class="thumb">
            <i class="mdi mdi-account"></i>
          </span>
          <span class="arrow">
            <i class="la la-angle-down"></i>
          </span>
        </div>
      </div>
    </div>
  ),
);

const LanguageToggle = React.forwardRef(
  ({ children, onClick }, ref) => (
    <div
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      <div className="language">
        <div class="icon">
          <i class="flag-icon flag-icon-us"></i>
          <span>English</span>
        </div>
      </div>
    </div>
  ),
);

const Header2 = () => {
  let history = useHistory();
  let location = useLocation();
  const gotopage = (page) => {
    history.push(page);
  };

  return (
    <>
      <div class="header dashboard">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-12">
              <nav class="navbar navbar-expand-lg navbar-light px-0 justify-content-between">
                <Link class="navbar-brand" to={'/'}>
                  <img
                    src={require('./../../images/logo.png')}
                    alt=""
                  />
                </Link>

                <div className="d-flex">
                  <Button
                    variant="dark"
                    onClick={() => gotopage('/')}
                    active={location.pathname === '/'}
                  >
                    Spot
                  </Button>
                  <Button variant="dark" className="mx-2">
                    Margin
                  </Button>
                  <Button variant="dark" className="mx-2">
                    Perpetuals
                  </Button>
                  <Button
                    variant="dark"
                    className="mx-2"
                    onClick={() => gotopage('/portfolio')}
                    active={location.pathname === '/portfolio'}
                  >
                    Portfolio
                  </Button>
                  <Button
                    variant="dark"
                    className="mx-2"
                    onClick={() => gotopage('/markets')}
                    active={location.pathname === '/markets'}
                  >
                    Markets
                  </Button>
                  <Button
                    variant="dark"
                    className="mx-2"
                    onClick={() => gotopage('/borrow')}
                    active={location.pathname === '/borrow'}
                  >
                    Borrow
                  </Button>
                  <Dropdown className="profile_log">
                    <Dropdown.Toggle as={MoreToggle} />
                    <Dropdown.Menu size="sm" title="">
                      {/* <Link to={'/'} class="dropdown-item my-1">
                        <i class="fa fa-signal"></i> Markets
                      </Link>
                      <Link to={'/'} class="dropdown-item my-1">
                        <i class="fa fa-handshake-o"></i> Borrow
                      </Link> */}
                      <Link to={'/'} class="dropdown-item my-1">
                        <i class="fa fa-book"></i> Documentation
                      </Link>
                      <Link to={'/'} class="dropdown-item my-1">
                        <i class="fa fa-reddit-square"></i> Community
                      </Link>
                      <Link to={'/'} class="dropdown-item my-1">
                        <i class="fa fa-file-text-o"></i> Terms of Use
                      </Link>
                      <Link to={'/'} class="dropdown-item my-1">
                        <i class="fa fa-line-chart"></i> Status
                      </Link>
                      <Link to={'/'} class="dropdown-item my-1">
                        <i class="fa fa-question-circle"></i> Help
                      </Link>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>

                <div class="header-right d-flex my-2 align-items-center">
                  <div class="language">
                    <Dropdown>
                      <Dropdown.Toggle as={LanguageToggle} />
                      <Dropdown.Menu size="sm" title="">
                        <Link to={'#'} class="dropdown-item">
                          <i class="flag-icon flag-icon-bd"></i>{' '}
                          Bengali
                        </Link>
                        <Link to={'#'} class="dropdown-item">
                          <i class="flag-icon flag-icon-fr"></i>{' '}
                          French
                        </Link>
                        <Link to={'#'} class="dropdown-item">
                          <i class="flag-icon flag-icon-cn"></i> China
                        </Link>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div class="dashboard_log">
                    <Dropdown className="profile_log">
                      <Dropdown.Toggle as={ProfileToggle} />
                      <Dropdown.Menu size="sm" title="">
                        <div class="user-email">
                          <div class="user">
                            <span class="thumb">
                              <i class="mdi mdi-account"></i>
                            </span>
                            <div class="user-info">
                              <h6>Saiful Islam</h6>
                              <span>quixlab.com@gmail.com</span>
                            </div>
                          </div>
                        </div>

                        <div class="user-balance">
                          <div class="available">
                            <p>Available</p>
                            <span>0.00 USD</span>
                          </div>
                          <div class="total">
                            <p>Total</p>
                            <span>0.00 USD</span>
                          </div>
                        </div>

                        <Link
                          to={'./account-overview'}
                          class="dropdown-item"
                        >
                          <i class="mdi mdi-account"></i> Account
                        </Link>
                        <Link to={'./data-tbi'} class="dropdown-item">
                          <i class="mdi mdi-history"></i> History
                        </Link>
                        <Link to={'./settings'} class="dropdown-item">
                          <i class="mdi mdi-settings"></i> Setting
                        </Link>
                        <Link to={'./lock'} class="dropdown-item">
                          <i class="mdi mdi-lock"></i> Lock
                        </Link>
                        <Link
                          to={'./signin'}
                          class="dropdown-item logout"
                        >
                          <i class="mdi mdi-logout"></i> Logout
                        </Link>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header2;
