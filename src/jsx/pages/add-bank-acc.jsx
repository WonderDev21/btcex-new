import React, { } from 'react';
import { Link } from 'react-router-dom';
// import { Row, Col, Card } from 'react-bootstrap';
import Header2 from '../layout/header2';
import Sidebar from '../layout/sidebar';
// import PageTitle from '../element/page-title';
import Footer2 from '../layout/footer2';



function BankAcc() {

    return (
        <>
            <Header2 />
            <Sidebar />

            <div class="verification section-padding mb-5">
                <div class="container h-100">
                    <div class="row justify-content-center h-100 align-items-center  my-5">
                        <div class="col-xl-5 col-md-6">
                            <div class="auth-form card">
                                <div class="card-header">
                                    <h4 class="card-title">Link a bank account</h4>
                                </div>
                                <div class="card-body">
                                    <form  class="identity-upload">
                                        <div class="form-row">
                                            <div class="form-group col-xl-12">
                                                <label class="mr-sm-2">Routing number </label>
                                                <input type="text" class="form-control" placeholder="25487" />
                                            </div>
                                            <div class="form-group col-xl-12">
                                                <label class="mr-sm-2">Account number </label>
                                                <input type="text" class="form-control" placeholder="36475" />
                                            </div>
                                            <div class="form-group col-xl-12">
                                                <label class="mr-sm-2">Fulll name </label>
                                                <input type="text" class="form-control" placeholder="Saiful Islam" />
                                            </div>
                                            <div class="form-group col-xl-12">
                                                <img src="./images/routing.png" alt="" class="img-fluid" />
                                            </div>

                                            <div class="text-center col-12">
                                                <Link to={"./verify-step-5"} class="btn btn-primary mx-2">Back</Link>
                                                <Link to={"./verify-step-6"} class="btn btn-success mx-2">Save</Link>
                                            </div>
                                        </div>
                                    </form>
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

export default BankAcc;