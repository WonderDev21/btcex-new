import React, {  } from 'react';
import { Link } from 'react-router-dom';
// import { Row, Col, Card } from 'react-bootstrap';
import Header2 from '../layout/header2';
import Sidebar from '../layout/sidebar';
// import PageTitle from '../element/page-title';
import Footer2 from '../layout/footer2';



function VerifyStep1() {

    return (
        <>
            <Header2 />
            <Sidebar />

            <div class="verification section-padding">
            <div class="container h-100">
                <div class="row justify-content-center h-100 align-items-center">
                    <div class="col-xl-5 col-md-6">
                        <div class="auth-form card">
                            {/* <!-- <div class="card-header">
                                <h4 class="card-title">Link a Debit card</h4>
                            </div> --> */}
                            <div class="card-body">
                                <form class="identity-upload">
                                    <div class="identity-content">
                                        <span class="icon"><i class="fa fa-shield"></i></span>
                                        <h4>Please verify your identity before adding your card</h4>
                                        <p>Uploading your ID helps as ensure the safety and security of your founds</p>
                                    </div>

                                    <div class="text-center">
                                        <Link to={"./verify-step-2"} class="btn btn-success pl-5 pr-5">Upload ID</Link>
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

export default VerifyStep1;