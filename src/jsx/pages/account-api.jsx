import React, { } from 'react';
// import { Link } from 'react-router-dom';
// import { Row, Col, Card } from 'react-bootstrap';
import Header2 from '../layout/header2';
import Sidebar from '../layout/sidebar';
import PageTitle from '../element/page-title';
import Footer2 from '../layout/footer2';
import AccountSubmenu from '../layout/account-submenu';



function AccountApi() {

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
                                    <h4 class="card-title">Create API Key</h4>
                                </div>
                                <div class="card-body">
                                    <form action="">
                                        <div class="row">
                                            <div class="col-xl-6 col-md-6">
                                                <div class="form-group">
                                                    <label class="mr-sm-2">Generate New Key</label>
                                                    <input type="text" name="usd_amount" class="form-control" placeholder="Enter Passphrase" />
                                                </div>
                                            </div>
                                            <div class="col-xl-6 col-md-6">
                                                <div class="form-group">
                                                    <label class="mr-sm-2">Confirm Passphrase</label>
                                                    <input type="text" name="usd_amount" class="form-control" placeholder="Re-enter passphrase" />
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <button class="btn btn-primary">Create API Keys</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-12">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title">Your API Keys</h4>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Key</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>69e387f1-31c3-45ad-9c68-5a51e5e78b43</td>
                                                    <td>
                                                        <label class="toggle">
                                                            <input class="toggle-checkbox" type="checkbox" checked />
                                                            <span class="toggle-switch"></span>
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <span>
                                                            <i class="mdi mdi-delete fs-20"></i>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>69e387f1-31c3-45ad-9c68-5a51e5e78b43</td>
                                                    <td>
                                                        <label class="toggle">
                                                            <input class="toggle-checkbox" type="checkbox" />
                                                            <span class="toggle-switch"></span>
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <span>
                                                            <i class="mdi mdi-delete fs-20"></i>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>69e387f1-31c3-45ad-9c68-5a51e5e78b43</td>
                                                    <td>
                                                        <label class="toggle">
                                                            <input class="toggle-checkbox" type="checkbox" />
                                                            <span class="toggle-switch"></span>
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <span>
                                                            <i class="mdi mdi-delete fs-20"></i>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>69e387f1-31c3-45ad-9c68-5a51e5e78b43</td>
                                                    <td>
                                                        <label class="toggle">
                                                            <input class="toggle-checkbox" type="checkbox" checked />
                                                            <span class="toggle-switch"></span>
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <span>
                                                            <i class="mdi mdi-delete fs-20"></i>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>69e387f1-31c3-45ad-9c68-5a51e5e78b43</td>
                                                    <td>
                                                        <label class="toggle">
                                                            <input class="toggle-checkbox" type="checkbox" />
                                                            <span class="toggle-switch"></span>
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <span>
                                                            <i class="mdi mdi-delete fs-20"></i>
                                                        </span>
                                                    </td>
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

            <Footer2 />
        </>
    )
}

export default AccountApi;