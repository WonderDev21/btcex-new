import React, {  } from 'react';
 import { Link } from 'react-router-dom';
// import { Row, Col, Card } from 'react-bootstrap';
import Header2 from '../layout/header2';
import Sidebar from '../layout/sidebar';
import PageTitle from '../element/page-title';
import Footer2 from '../layout/footer2';
import SettingsSubmenu from '../layout/settings-submenu';



function SettingAccount() {

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
                            <SettingsSubmenu/>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-12">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Linked Account or Card</h4>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table linked_account ">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div class="media">
                                                        <span class="mr-3"><i class="fa fa-bank"></i></span>
                                                        <div class="media-body">
                                                            <h5 class="mt-0 mb-1">Bank of America</h5>
                                                            <p>Bank **************5421</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="edit-option">
                                                        <Link to={"#"}><i class="fa fa-eye"></i></Link>
                                                        <Link to={"#"}><i class="fa fa-pencil"></i></Link>
                                                        <Link to={"#"}><i class="fa fa-trash"></i></Link>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="verify">
                                                        <div class="verified">
                                                            <span><i class="la la-check"></i></span>
                                                            <Link to={"#"}>Verified</Link>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="media">
                                                        <span class="mr-3"><i class="fa fa-credit-card"></i></span>
                                                        <div class="media-body">
                                                            <h5 class="mt-0 mb-1">Debit Card</h5>
                                                            <p>Prepaid Card *********5478</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="edit-option">
                                                        <Link to={"#"}><i class="fa fa-eye"></i></Link>
                                                        <Link to={"#"}><i class="fa fa-pencil"></i></Link>
                                                        <Link to={"#"}><i class="fa fa-trash"></i></Link>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="verify">
                                                        <div class="not-verify">
                                                            <span><i class="la la-close"></i></span>
                                                            <Link to={"#"}>Not verified</Link>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class="mt-3">
                                        <Link to={"./verify-step-5"} class="btn btn-primary px-4 py-2 mr-3 my-2">Add Bank
                                            Account</Link>
                                        <Link to={"./verify-step-1"} class="btn btn-success px-4 py-2 my-2">Add Debit
                                            Account</Link>
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

export default SettingAccount;