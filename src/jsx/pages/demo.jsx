import React, { } from 'react';
import { Link } from 'react-router-dom';
// import { Row, Col, Card } from 'react-bootstrap';
import Header3 from '../layout/header3';
import Footer1 from '../layout/footer1';



function Demo() {

    return (
        <>
            <Header3 />
            <div class="intro section-padding position-relative" id="home">
                <div class="container">
                    <div class="row align-items-center justify-content-between">
                        <div class="col-xl-6 col-md-6">
                            <div class="intro-content">
                                <h1>Trade Cryptocurrency <br /> With <span class="text-primary">Tradio</span></h1>
                                <p>Tradio is the complete UI of Front end and Backend. Sign in, Signup, Phone and ID card
                                verification, One time password verify and add bank, debit card settings and profile etc
                                pages included. </p>
                                <Link to={"#"} class="btn btn-primary px-3 mx-2 my-2" data-scroll-nav="1">View Demo</Link>
                                <Link to={"#"} class="btn btn-outline-primary px-3 mx-2 my-2">Buy Now</Link>
                            </div>
                        </div>
                        <div class="col-xl-6 col-md-6 py-md-5">
                            <div class="intro-demo_img">
                                <img src={require("../../images/portfolio.jpg")} alt="" class="img-fluid" />
                                <img src={require("../../images/portfolio-dark.jpg")} alt="" class="img-fluid dark-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="demo section-padding page-section" id="demo">
                <div class="container">
                    <div class="row py-lg-5 justify-content-center">
                        <div class="col-xl-7">
                            <div class="section-heading text-center">
                                <h2>Dashboard</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div class="demo_img">
                                <div class="row">
                                    <div class="col-6">
                                        <Link to={"./"} target="_blank">
                                            <div class="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/landing.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="col-6">
                                        <Link to={"./light/"} target="_blank">
                                            <div class="img-wrap light">
                                                <img src={require("../../images/demo/dashboard/light/landing.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <h4>Landing</h4>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div class="demo_img">
                                <div class="row">
                                    <div class="col-6">
                                        <Link to={"./dashboard"} target="_blank">
                                            <div class="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/dashboard.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="col-6">
                                        <Link to={"./light/dashboard"} target="_blank">
                                            <div class="img-wrap light">
                                                <img src={require("../../images/demo/dashboard/light/dashboard.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <h4>Dashboard</h4>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div class="demo_img">
                                <div class="row">
                                    <div class="col-6">
                                        <Link to={"./exchange"} target="_blank">
                                            <div class="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/buy-sell.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="col-6">
                                        <Link to={"./light/exchange"} target="_blank">
                                            <div class="img-wrap light">
                                                <img src={require("../../images/demo/dashboard/light/buy-sell.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <h4>Exchange</h4>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div class="demo_img">
                                <div class="row">
                                    <div class="col-6">
                                        <Link to={"./account-overview"} target="_blank">
                                            <div class="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/accounts.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="col-6">
                                        <Link to={"./light/account-overview"} target="_blank">
                                            <div class="img-wrap light">
                                                <img src={require("../../images/demo/dashboard/light/accounts.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                                <h4>Accounts</h4>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div class="demo_img">
                                <div class="row">
                                    <div class="col-6">
                                        <Link to={"./account-deposit"} target="_blank">
                                            <div class="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/deposit.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="col-6">
                                        <Link to={"./light/account-deposit"} target="_blank">
                                            <div class="img-wrap light">
                                                <img src={require("../../images/demo/dashboard/light/deposit.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                                <h4>Deposit</h4>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div class="demo_img">
                                <div class="row">
                                    <div class="col-6">
                                        <Link to={"./account-withdraw"} target="_blank">
                                            <div class="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/withdraw.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="col-6">
                                        <Link to={"./light/account-withdraw"} target="_blank">
                                            <div class="img-wrap light">
                                                <img src={require("../../images/demo/dashboard/light/withdraw.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <h4>Withdraw</h4>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div class="demo_img">
                                <div class="row">
                                    <div class="col-6">
                                        <Link to={"./account-api"} target="_blank">
                                            <div class="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/api.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="col-6">
                                        <Link to={"./light/account-api"} target="_blank">
                                            <div class="img-wrap light">
                                                <img src={require("../../images/demo/dashboard/light/api.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <h4>API</h4>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div class="demo_img">
                                <div class="row">
                                    <div class="col-6">
                                        <Link to={"./account-affiliate"} target="_blank">
                                            <div class="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/affiliate.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="col-6">
                                        <Link to={"./light/account-affiliate"} target="_blank">
                                            <div class="img-wrap light">
                                                <img src={require("../../images/demo/dashboard/light/affiliate.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <h4>Affiliate</h4>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div class="demo_img">
                                <div class="row">
                                    <div class="col-6">
                                        <Link to={"./data-tbi"} target="_blank">
                                            <div class="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/tbi.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="col-6">
                                        <Link to={"./light/data-tbi"} target="_blank">
                                            <div class="img-wrap light">
                                                <img src={require("../../images/demo/dashboard/light/tbi.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <h4>Tradio Bitcoin Index</h4>
                            </div>
                        </div>

                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div class="demo_img">
                                <div class="row">
                                    <div class="col-6">
                                        <Link to={"./data-founding-rate"} target="_blank">
                                            <div class="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/funding-rate.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="col-6">
                                        <Link to={"./light/data-founding-rate"} target="_blank">
                                            <div class="img-wrap light">
                                                <img src={require("../../images/demo/dashboard/light/funding-rate.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <h4>Funding Rate</h4>
                            </div>
                        </div>

                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div class="demo_img">
                                <div class="row">
                                    <div class="col-6">
                                        <Link to={"./data-insurance-found"} target="_blank">
                                            <div class="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/insurance-fund.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="col-6">
                                        <Link to={"./light/data-insurance-found"} target="_blank">
                                            <div class="img-wrap light">
                                                <img src={require("../../images/demo/dashboard/light/insurance-fund.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <h4>Insurance Found</h4>
                            </div>
                        </div>

                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div class="demo_img">
                                <div class="row">
                                    <div class="col-6">
                                        <Link to={"./data-last-price"} target="_blank">
                                            <div class="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/last-price.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="col-6">
                                        <Link to={"./light/data-last-price"} target="_blank">
                                            <div class="img-wrap light">
                                                <img src={require("../../images/demo/dashboard/light/last-price.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <h4>Last Price</h4>
                            </div>
                        </div>

                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div class="demo_img">
                                <div class="row">
                                    <div class="col-6">
                                        <Link to={"./data-index-price"} target="_blank">
                                            <div class="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/index-price.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="col-6">
                                        <Link to={"./light/data-index-price"} target="_blank">
                                            <div class="img-wrap light">
                                                <img src={require("../../images/demo/dashboard/light/index-price.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <h4>Index Price</h4>
                            </div>
                        </div>

                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div class="demo_img">
                                <div class="row">
                                    <div class="col-6">
                                        <Link to={"./data-mark-price"} target="_blank">
                                            <div class="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/mark-price.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="col-6">
                                        <Link to={"./light/data-mark-price"} target="_blank">
                                            <div class="img-wrap light">
                                                <img src={require("../../images/demo/dashboard/light/mark-price.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <h4>Mark Price</h4>
                            </div>
                        </div>


                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div class="demo_img">
                                <div class="row">
                                    <div class="col-6">
                                        <Link to={"./settings"} target="_blank">
                                            <div class="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/settings.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="col-6">
                                        <Link to={"./light/settings"} target="_blank">
                                            <div class="img-wrap light">
                                                <img src={require("../../images/demo/dashboard/light/settings.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                                <h4>Edit Profile</h4>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div class="demo_img">
                                <div class="row">
                                    <div class="col-6">
                                        <Link to={"./settings-preferences"} target="_blank">
                                            <div class="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/preferences.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="col-6">
                                        <Link to={"./light/settings-preferences"} target="_blank">
                                            <div class="img-wrap light">
                                                <img src={require("../../images/demo/dashboard/light/preferences.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <h4>Preferences</h4>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div class="demo_img">
                                <div class="row">
                                    <div class="col-6">
                                        <Link to={"./settings-security"} target="_blank">
                                            <div class="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/security.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="col-6">
                                        <Link to={"./light/settings-security"} target="_blank">
                                            <div class="img-wrap light">
                                                <img src={require("../../images/demo/dashboard/light/security.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <h4>Security</h4>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div class="demo_img">
                                <div class="row">
                                    <div class="col-6">
                                        <Link to={"./settings-account"} target="_blank">
                                            <div class="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/linked-account.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="col-6">
                                        <Link to={"./light/settings-account"} target="_blank">
                                            <div class="img-wrap light">
                                                <img src={require("../../images/demo/dashboard/light/linked-account.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <h4>Linked Account</h4>
                            </div>
                        </div>

                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div class="demo_img">
                                <div class="row">
                                    <div class="col-6">
                                        <Link to={"./signin"} target="_blank">
                                            <div class="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/signin.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="col-6">
                                        <Link to={"./light/signin"} target="_blank">
                                            <div class="img-wrap light">
                                                <img src={require("../../images/demo/dashboard/light/signin.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <h4>Signin</h4>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div class="demo_img">
                                <div class="row">
                                    <div class="col-6">
                                        <Link to={"./signup"} target="_blank">
                                            <div class="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/signup.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="col-6">
                                        <Link to={"./light/signup"} target="_blank">
                                            <div class="img-wrap light">
                                                <img src={require("../../images/demo/dashboard/light/signup.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <h4>Signup</h4>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div class="demo_img">
                                <div class="row">
                                    <div class="col-6">
                                        <Link to={"./reset"} target="_blank">
                                            <div class="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/reset.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="col-6">
                                        <Link to={"./light/reset"} target="_blank">
                                            <div class="img-wrap light">
                                                <img src={require("../../images/demo/dashboard/light/reset.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <h4>Reset</h4>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div class="demo_img">
                                <div class="row">
                                    <div class="col-6">
                                        <Link to={"./lock"} target="_blank">
                                            <div class="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/lock.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="col-6">
                                        <Link to={"./light/lock"} target="_blank">
                                            <div class="img-wrap light">
                                                <img src={require("../../images/demo/dashboard/light/lock.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <h4>Locked</h4>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div class="demo_img">
                                <div class="row">
                                    <div class="col-6">
                                        <Link to={"./otp-1"} target="_blank">
                                            <div class="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/otp-phone.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="col-6">
                                        <Link to={"./light/otp-1"} target="_blank">
                                            <div class="img-wrap light">
                                                <img src={require("../../images/demo/dashboard/light/otp-phone.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <h4>OTP Number</h4>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div class="demo_img">
                                <div class="row">
                                    <div class="col-6">
                                        <Link to={"./otp-2"} target="_blank">
                                            <div class="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/otp-code.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="col-6">
                                        <Link to={"./light/otp-2"} target="_blank">
                                            <div class="img-wrap light">
                                                <img src={require("../../images/demo/dashboard/light/otp-code.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <h4>OTP Code</h4>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div class="demo_img">
                                <div class="row">
                                    <div class="col-6">
                                        <Link to={"./verify-step-1"} target="_blank">
                                            <div class="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/verify-id.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="col-6">
                                        <Link to={"./light/verify-step-1"} target="_blank">
                                            <div class="img-wrap light">
                                                <img src={require("../../images/demo/dashboard/light/verify-id.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <h4>Verify ID</h4>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div class="demo_img">
                                <div class="row">
                                    <div class="col-6">
                                        <Link to={"./verify-step-2"} target="_blank">
                                            <div class="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/upload-id.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="col-6">
                                        <Link to={"./light/verify-step-2"} target="_blank">
                                            <div class="img-wrap light">
                                                <img src={require("../../images/demo/dashboard/light/upload-id.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <h4>Upload ID</h4>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div class="demo_img">
                                <div class="row">
                                    <div class="col-6">
                                        <Link to={"./verify-step-3"} target="_blank">
                                            <div class="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/id-verifing.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="col-6">
                                        <Link to={"./light/verify-step-3"} target="_blank">
                                            <div class="img-wrap light">
                                                <img src={require("../../images/demo/dashboard/light/id-verifing.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <h4>ID Verifying</h4>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div class="demo_img">
                                <div class="row">
                                    <div class="col-6">
                                        <Link to={"./verify-step-4"} target="_blank">
                                            <div class="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/id-verified.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="col-6">
                                        <Link to={"./light/verify-step-4"} target="_blank">
                                            <div class="img-wrap light">
                                                <img src={require("../../images/demo/dashboard/light/id-verified.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <h4>ID Verified</h4>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div class="demo_img">
                                <div class="row">
                                    <div class="col-6">
                                        <Link to={"./add-debit-card"} target="_blank">
                                            <div class="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/add-debit-card.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="col-6">
                                        <Link to={"./light/add-debit-card"} target="_blank">
                                            <div class="img-wrap light">
                                                <img src={require("../../images/demo/dashboard/light/add-debit-card.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <h4>Add Debit Card</h4>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div class="demo_img">
                                <div class="row">
                                    <div class="col-6">
                                        <Link to={"./verify-step-6"} target="_blank">
                                            <div class="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/success.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="col-6">
                                        <Link to={"./light/verify-step-6"} target="_blank">
                                            <div class="img-wrap light">
                                                <img src={require("../../images/demo/dashboard/light/success.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <h4>Success</h4>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div class="demo_img">
                                <div class="row">
                                    <div class="col-6">
                                        <Link to={"./verify-step-5"} target="_blank">
                                            <div class="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/choose-account.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="col-6">
                                        <Link to={"./light/verify-step-5"} target="_blank">
                                            <div class="img-wrap light">
                                                <img src={require("../../images/demo/dashboard/light/choose-account.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <h4>Recommendation</h4>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div class="demo_img">
                                <div class="row">
                                    <div class="col-6">
                                        <Link to={"./add-bank-acc"} target="_blank">
                                            <div class="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/add-bank.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="col-6">
                                        <Link to={"./light/add-bank-acc"} target="_blank">
                                            <div class="img-wrap light">
                                                <img src={require("../../images/demo/dashboard/light/add-bank.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <h4>Add Bank Account</h4>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div class="demo_img">
                                <div class="row">
                                    <div class="col-6">
                                        <Link to={"./400"} target="_blank">
                                            <div class="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/400.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="col-6">
                                        <Link to={"./light/400"} target="_blank">
                                            <div class="img-wrap light">
                                                <img src={require("../../images/demo/dashboard/light/400.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <h4>400</h4>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div class="demo_img">
                                <div class="row">
                                    <div class="col-6">
                                        <Link to={"./403"} target="_blank">
                                            <div class="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/403.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="col-6">
                                        <Link to={"./light/403"} target="_blank">
                                            <div class="img-wrap light">
                                                <img src={require("../../images/demo/dashboard/light/403.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <h4>403</h4>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div class="demo_img">
                                <div class="row">
                                    <div class="col-6">
                                        <Link to={"./404"} target="_blank">
                                            <div class="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/404.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="col-6">
                                        <Link to={"./light/404"} target="_blank">
                                            <div class="img-wrap light">
                                                <img src={require("../../images/demo/dashboard/light/404.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <h4>404</h4>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div class="demo_img">
                                <div class="row">
                                    <div class="col-6">
                                        <Link to={"./500"} target="_blank">
                                            <div class="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/500.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="col-6">
                                        <Link to={"./light/500"} target="_blank">
                                            <div class="img-wrap light">
                                                <img src={require("../../images/demo/dashboard/light/500.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <h4>500</h4>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div class="demo_img">
                                <div class="row">
                                    <div class="col-6">
                                        <Link to={"./503"} target="_blank">
                                            <div class="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/503.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="col-6">
                                        <Link to={"./light/503"} target="_blank">
                                            <div class="img-wrap light">
                                                <img src={require("../../images/demo/dashboard/light/503.jpg")} alt="" class="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <h4>503</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div class="features section-padding mb-80" id="support">
                <div class="container">
                    <div class="row py-lg-5 justify-content-center">
                        <div class="col-xl-7">
                            <div class="section-title text-center">
                                <span>Problem?</span>
                                <h3>Don't Worry, I am waiting your question</h3>
                                <p>Refreshing my inbox, waiting for your mail </p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="features-content">
                                <span><i class="fa fa-skype"></i></span>
                                <h4>sporsho9</h4>
                                <p>Without sleeping time, I am avaiable in skype. I recommend Skype</p>
                                <Link to={"skype:profile_name?sporsho9"}>Add Skype <i class="la la-angle-right"></i></Link>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="features-content">
                                <span><i class="fa fa-envelope"></i></span>
                                <h4>quixlab.com@gmail.com</h4>
                                <p>When you send me email, I get notification, and quickly reply you</p>
                                <Link to={"mailto:quixlab.com@gmail.com"}>Send Email <i class="la la-angle-right"></i></Link>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="features-content">
                                <span><i class="fa fa-life-ring"></i></span>
                                <h4>Hire me</h4>
                                <p>You have need more design or customization? Dont worry about Quality</p>
                                <Link
                                    to={"https://docs.google.com/forms/d/1AD86Th5E7lBRtp3mwVN4p5xTE7X7vzj6DsTt1cgQgyc/edit#responses"}>Hire
                                Now <i class="la la-angle-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer1 />
        </>
    )
}

export default Demo;