import React, { } from 'react';
// import { Link } from 'react-router-dom';
// import { Row, Col, Card } from 'react-bootstrap';
import Header2 from '../layout/header2';
import Sidebar from '../layout/sidebar';
import PageTitle from '../element/page-title';
import Footer2 from '../layout/footer2';
import AccountSubmenu from '../layout/account-submenu';



function AccountWithdraw() {

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
                                    <h4 class="card-title">Withdraw</h4>
                                </div>
                                <div class="card-body">
                                    <div class="row justify-content-center">
                                        <div class="col-xl-8">
                                            <form action="#" class="py-5">

                                                <div class="form-group row align-items-center">
                                                    <div class="col-sm-4">
                                                        <label for="inputEmail3" class="col-form-label">DestinationAddress
                                                        <br />
                                                            <small>Please double check this address</small>
                                                        </label>
                                                    </div>
                                                    <div class="col-sm-8">
                                                        <div class="input-group mb-3">
                                                            <div class="input-group-prepend">
                                                                <label class="input-group-text  bg-primary"><i
                                                                    class="mdi mdi-currency-usd fs-18 text-white"></i></label>
                                                            </div>
                                                            <input type="text" class="form-control text-right"
                                                                placeholder="5000 USD" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="form-group row align-items-center">
                                                    <div class="col-sm-4">
                                                        <label for="inputEmail3" class="col-form-label">Amount BTC
                                                        <br />
                                                            <small>Maximum amount withdrawable: 0 BTC</small>
                                                        </label>
                                                    </div>
                                                    <div class="col-sm-8">
                                                        <div class="input-group mb-3">
                                                            <div class="input-group-prepend">
                                                                <label class="input-group-text bg-primary"><i
                                                                    class="cc BTC-alt text-white"></i></label>
                                                            </div>
                                                            <input type="text" class="form-control text-right"
                                                                placeholder="5000 USD" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="form-group row align-items-center">
                                                    <div class="col-sm-6">
                                                        <label for="inputEmail3" class="col-form-label">Bitcoin Network Fee
                                                        (BTC)
                                                        <br />
                                                            <small>Transactions on the Bitcoin network are priorirized by
                                                            fees</small>
                                                        </label>
                                                    </div>
                                                    <div class="col-sm-6">
                                                        <h4 class="text-right">0.005</h4>
                                                    </div>
                                                </div>

                                                <div class="text-right">
                                                    <button class="btn btn-primary">Withdraw Now</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-12">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title">Important Information</h4>
                                </div>
                                <div class="card-body">
                                    <div class="important-info">
                                        <ul>
                                            <li>
                                                <i class="mdi mdi-checkbox-blank-circle"></i>
                                            For security reasons, Tradio process withdrawals by review once a day. For
                                            more information in this policy. Please see our wallet security page.
                                        </li>
                                            <li>
                                                <i class="mdi mdi-checkbox-blank-circle"></i>
                                            Submit your withdrawals by 07:00 UTC +00 (about 11 hour) to be included in
                                            the days batch
                                        </li>
                                        </ul>
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

export default AccountWithdraw;