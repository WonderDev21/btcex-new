import React, { } from 'react';
// import { Link } from 'react-router-dom';
// import { Row, Col, Card } from 'react-bootstrap';
import Header2 from '../layout/header2';
import Sidebar from '../layout/sidebar';
import PageTitle from '../element/page-title';
import Footer2 from '../layout/footer2';
import AccountSubmenu from '../layout/account-submenu';

import { Tab, Nav } from 'react-bootstrap';



function AccountDeposit() {

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
                        <div class="col-xl-12">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title">Cold Wallet Deposit Address</h4>
                                </div>
                                <div class="card-body" id="deposits">
                                    <Tab.Container defaultActiveKey="tab1">
                                        <Nav variant="pills">
                                            <Nav.Link eventKey="tab1">TUSD</Nav.Link>
                                            <Nav.Link eventKey="tab2">USDC</Nav.Link>
                                            <Nav.Link eventKey="tab3">FIAT</Nav.Link>
                                        </Nav>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="tab1">
                                                <div class="qrcode">
                                                    <img src="./images/qr.svg" alt="" width="150" />
                                                </div>
                                                <form action="">
                                                    <div class="input-group">
                                                        <input type="text" class="form-control"
                                                            value="0xceb1b174085b0058201be4f2cd0da6a21bff85d4" />
                                                        <div class="input-group-append">
                                                            <span class="input-group-text bg-primary text-white">Copy</span>
                                                        </div>
                                                    </div>
                                                </form>

                                                <ul>
                                                    <li>
                                                        <i class="mdi mdi-checkbox-blank-circle"></i>
                                                TUSD network transfers will be credited to your Tradio account after
                                                25 network confirmations.
                                            </li>
                                                    <li>
                                                        <i class="mdi mdi-checkbox-blank-circle"></i>
                                                TUSD deposits to this address are unlimited. Note that you may not
                                                be able to withdraw all of your funds at once if you deposit more
                                                than your daily withdrawal limit.
                                            </li>
                                                </ul>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="tab2">
                                                <div class="qrcode">
                                                    <img src="./images/qr.svg" alt="" width="150" />
                                                </div>
                                                <form action="">
                                                    <div class="input-group">
                                                        <input type="text" class="form-control"
                                                            value="0xceb1b174085b0058201be4f2cd0da6a21bff85d4" />
                                                        <div class="input-group-append">
                                                            <span class="input-group-text bg-primary text-white">Copy</span>
                                                        </div>
                                                    </div>
                                                </form>

                                                <ul>
                                                    <li>
                                                        <i class="mdi mdi-checkbox-blank-circle"></i>
                                                USDC network transfers will be credited to your Tradio account after
                                                25 network confirmations.
                                            </li>
                                                    <li>
                                                        <i class="mdi mdi-checkbox-blank-circle"></i>
                                                USDC deposits to this address are unlimited. Note that you may not
                                                be able to withdraw all of your funds at once if you deposit more
                                                than your daily withdrawal limit.
                                            </li>
                                                </ul>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="tab3">
                                                <div class="qrcode">
                                                    <img src="./images/qr.svg" alt="" width="150" />
                                                </div>
                                                <form action="">
                                                    <div class="input-group">
                                                        <input type="text" class="form-control"
                                                            value="0xceb1b174085b0058201be4f2cd0da6a21bff85d4" />
                                                        <div class="input-group-append">
                                                            <span class="input-group-text bg-primary text-white">Copy</span>
                                                        </div>
                                                    </div>
                                                </form>

                                                <ul>
                                                    <li>
                                                        <i class="mdi mdi-checkbox-blank-circle"></i>
                                                USDC network transfers will be credited to your Tradio account after
                                                25 network confirmations.
                                            </li>
                                                    <li>
                                                        <i class="mdi mdi-checkbox-blank-circle"></i>
                                                USDC deposits to this address are unlimited. Note that you may not
                                                be able to withdraw all of your funds at once if you deposit more
                                                than your daily withdrawal limit.
                                            </li>
                                                </ul>
                                            </Tab.Pane>
                                        </Tab.Content>

                                    </Tab.Container>
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

export default AccountDeposit;


