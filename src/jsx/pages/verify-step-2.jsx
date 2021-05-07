import React, {  } from 'react';
 import { Link } from 'react-router-dom';
// import { Row, Col, Card } from 'react-bootstrap';
import Header2 from '../layout/header2';
import Sidebar from '../layout/sidebar';
// import PageTitle from '../element/page-title';
import Footer2 from '../layout/footer2';



function VerifyStep2() {

    return (
        <>
            <Header2 />
            <Sidebar />

            <div class="verification section-padding">
            <div class="container h-100">
                <div class="row justify-content-center h-100 align-items-center">
                    <div class="col-xl-5 col-md-6">
                        <div class="auth-form card">
                            <div class="card-body">
                                <form class="identity-upload">

                                    <div class="identity-content">
                                        <h4>Upload your ID card</h4>
                                        <span>(Driving License or Government ID card)</span>

                                        <p>Uploading your ID helps as ensure the safety and security of your founds</p>
                                    </div>

                                    <div class="form-group">
                                        <label class="mr-sm-2">Upload Front ID </label>
                                        <span class="float-right">Maximum file size is 2mb</span>
                                        <div class="file-upload-wrapper" data-text="front.jpg">
                                            <input name="file-upload-field" type="file" class="file-upload-field"
                                                />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="mr-sm-2">Upload Back ID </label>
                                        <span class="float-right">Maximum file size is 2mb</span>
                                        <div class="file-upload-wrapper" data-text="back.jpg">
                                            <input name="file-upload-field" type="file" class="file-upload-field"
                                               />
                                        </div>
                                    </div>

                                    <div class="text-center">
                                        <Link to={"./verify-step-3"} class="btn btn-success pl-5 pr-5">Submit</Link>
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

export default VerifyStep2;