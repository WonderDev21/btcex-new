import React, { } from 'react';
import { Link } from 'react-router-dom';
// import { Row, Col, Card } from 'react-bootstrap';
import Header2 from '../layout/header2';
import Sidebar from '../layout/sidebar';
import PageTitle from '../element/page-title';
import Footer2 from '../layout/footer2';
import SettingsSubmenu from '../layout/settings-submenu';



function Security() {

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
                                    <SettingsSubmenu />
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-12">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title">Security</h4>
                                </div>
                                <div class="card-body">
                                    <div class="row align-items-center">
                                        <div class="col-xl-4">
                                            <div class="id_card">
                                                <img src={require("../../images/id.png")} alt="" class="img-fluid" />
                                            </div>
                                        </div>
                                        <div class="col-xl-6">
                                            <div class="id_info">
                                                <h4>Saiful Islam </h4>
                                                <p class="mb-1 mt-3">ID: 0024 5687 2254 3698 </p>
                                                <p class="mb-1">Status: <span class="font-weight-bold">Verified</span></p>
                                                <Link href="verify-step-2.html" class="btn btn-success mt-3">New ID</Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-xl-12">
                                            <div class="phone_verify">
                                                <h4 class="card-title mb-3">Email Address</h4>
                                                <form action="otp-2.html">
                                                    <div class="form-row align-items-center">
                                                        <div class="form-group col-xl-5">
                                                            <div class="input-group">
                                                                <input type="text" class="form-control" placeholder="hello@example.com " />
                                                                <div class="input-group-append">
                                                                    <button class=" btn input-group-text bg-primary text-white">Add</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div class="col-xl-12">
                                            <div class="phone_verified">
                                                <h5> <span><i class="fa fa-envelope"></i></span> hello@example.com</h5>
                                                <div class="verify">
                                                    <div class="verified">
                                                        <span><i class="la la-check"></i></span>
                                                        <Link to={"#"}>Verified</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xl-12">
                                            <div class="phone_verify">
                                                <h4 class="card-title mb-3">Add Phone Number</h4>
                                                <form action="otp-2.html">
                                                    <div class="form-row align-items-center">
                                                        <div class="form-group col-xl-5">
                                                            <div class="input-group">
                                                                <input type="text" class="form-control" placeholder="+1 2335 2458 " />
                                                                <div class="input-group-append">
                                                                    <button class=" btn input-group-text bg-primary text-white">Add</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div class="col-xl-12">
                                            <div class="phone_verified">
                                                <h5> <span><i class="fa fa-phone"></i></span> +1 23584 2659</h5>
                                                <div class="verify">
                                                    <div class="verified">
                                                        <span><i class="la la-check"></i></span>
                                                        <Link to={"#"}>Verified</Link>
                                                    </div>
                                                </div>
                                            </div>
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

export default Security;