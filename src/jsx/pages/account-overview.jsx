import React, { } from 'react';
import { Link } from 'react-router-dom';
// import { Row, Col, Card } from 'react-bootstrap';
import Header2 from '../layout/header2';
import Sidebar from '../layout/sidebar';
import PageTitle from '../element/page-title';
import Footer2 from '../layout/footer2';
import AccountSubmenu from '../layout/account-submenu';



function AccountOverview() {

    return (
        <>
            <Header2 />
            <Sidebar />
            <PageTitle />

            <div class="content-body">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="card sub-menu">
                                <div class="card-body">
                                    <AccountSubmenu />
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-6 col-lg-6 col-md-6">
                            <div class="card profile_card">
                                <div class="card-body">
                                    <div class="media">
                                        <img class="mr-3 rounded-circle mr-0 mr-sm-3" src={require("../../images/profile/2.png")} width="60"
                                            height="60" alt="" />
                                        <div class="media-body">
                                            <span>Hello</span>
                                            <h4 class="mb-2">Saiful Islam</h4>
                                            <p class="mb-1"> <span><i class="fa fa-phone mr-2 text-primary"></i></span> +1
                                            235 5547</p>
                                            <p class="mb-1"> <span><i class="fa fa-envelope mr-2 text-primary"></i></span>
                                            hello@example.com
                                        </p>
                                        </div>
                                    </div>

                                    <ul class="card-profile__info">
                                        <li>
                                            <h5 class="mr-4">Address</h5>
                                            <span class="text-muted">House 14, Road 9, Gulshan, Dhaka</span>
                                        </li>
                                        <li class="mb-1">
                                            <h5 class="mr-4">Total Log</h5>
                                            <span>103 Time (Today 5 Times)</span>
                                        </li>
                                        <li>
                                            <h5 class="text-danger mr-4">Last Log</h5>
                                            <span class="text-danger">3 February, 2020, 10:00 PM</span>
                                        </li>
                                    </ul>
                                    <div class="social-icons">
                                        <Link class="facebook text-center" to={'#'}><span><i
                                            class="fa fa-facebook"></i></span></Link>
                                        <Link class="twitter text-center" to={'#'}><span><i
                                            class="fa fa-twitter"></i></span></Link>
                                        <Link class="youtube text-center" to={'#'}><span><i
                                            class="fa fa-youtube"></i></span></Link>
                                        <Link class="googlePlus text-center" to={'#'}><span><i
                                            class="fa fa-google"></i></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="col-xl-6 col-lg-6 col-md-6">
                            <div class="card acc_balance">
                                <div class="card-header">
                                    <h4 class="card-title">Wallet</h4>
                                </div>
                                <div class="card-body">
                                    <span>Available BTC</span>
                                    <h3>0.0230145 BTC</h3>

                                    <div class="d-flex justify-content-between my-3">
                                        <div>
                                            <p class="mb-1">Total Equity</p>
                                            <h4>78950.35 USD</h4>
                                        </div>
                                        <div>
                                            <p class="mb-1">Available Margin</p>
                                            <h4>56845.25 USD</h4>
                                        </div>
                                    </div>

                                    <div class="d-flex justify-content-between my-3">
                                        <div>
                                            <p class="mb-1">Buy this month</p>
                                            <h4>3.0215485 BTC</h4>
                                        </div>
                                        <div>
                                            <p class="mb-1">Sell this month</p>
                                            <h4>3.0215485 BTC</h4>
                                        </div>
                                    </div>

                                    <div class="btn-group mb-3">
                                        <button class="btn btn-success">Buy</button>
                                        <button class="btn btn-danger">Sell</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-12">
                            <div class="row">
                                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                                    <div class="card text-center pt-2">
                                        <div class="card-body">
                                            <p class="mb-1">Maintainance</p>
                                            <h4>0.03654 BTC</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                                    <div class="card text-center pt-2">
                                        <div class="card-body">
                                            <p class="mb-1">Unrealized P&L</p>
                                            <h4>0.03654 BTC</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                                    <div class="card text-center pt-2">
                                        <div class="card-body">
                                            <p class="mb-1">Open Positions</p>
                                            <h4>0.03654 BTC</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                                    <div class="card text-center pt-2">
                                        <div class="card-body">
                                            <p class="mb-1">Active Orders</p>
                                            <h4>0.03654 BTC</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-12">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title">Transactions History</h4>
                                </div>
                                <div class="card-body">
                                    <div class="transaction-table">
                                        <div class="table-responsive">
                                            <table class="table table-striped mb-0 table-responsive-sm">
                                                <thead>
                                                    <tr>
                                                        <th>Transaction ID</th>
                                                        <th>Time</th>
                                                        <th>Type</th>
                                                        <th>Amount</th>
                                                        <th>Status</th>
                                                        <th>Balance</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>#565845522</td>
                                                        <td>January 10, 2020</td>
                                                        <td>Realized P&L</td>
                                                        <td>0.254782 BTC</td>
                                                        <td>Completed</td>
                                                        <td>0.125476 BTC</td>
                                                    </tr>
                                                    <tr>
                                                        <td>#565845522</td>
                                                        <td>January 10, 2020</td>
                                                        <td>Realized P&L</td>
                                                        <td>0.254782 BTC</td>
                                                        <td>Completed</td>
                                                        <td>0.125476 BTC</td>
                                                    </tr>
                                                    <tr>
                                                        <td>#565845522</td>
                                                        <td>January 10, 2020</td>
                                                        <td>Realized P&L</td>
                                                        <td>0.254782 BTC</td>
                                                        <td>Completed</td>
                                                        <td>0.125476 BTC</td>
                                                    </tr>
                                                    <tr>
                                                        <td>#565845522</td>
                                                        <td>January 10, 2020</td>
                                                        <td>Realized P&L</td>
                                                        <td>0.254782 BTC</td>
                                                        <td>Completed</td>
                                                        <td>0.125476 BTC</td>
                                                    </tr>
                                                    <tr>
                                                        <td>#565845522</td>
                                                        <td>January 10, 2020</td>
                                                        <td>Realized P&L</td>
                                                        <td>0.254782 BTC</td>
                                                        <td>Completed</td>
                                                        <td>0.125476 BTC</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer2 />
        </>
    )
}

export default AccountOverview;