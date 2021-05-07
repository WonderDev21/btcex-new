import React, { } from 'react';
import { Link } from 'react-router-dom';



function Signin() {

    return (
        <>
            <div class="authincation section-padding">
                <div class="container h-100">
                    <div class="row justify-content-center h-100 align-items-center">
                        <div class="col-xl-5 col-md-6">
                            <div class="mini-logo text-center my-5">
                                <Link to={"./"}><img src={require("../../images/logo.png")} alt="" /></Link>
                            </div>
                            <div class="auth-form card">
                                <div class="card-header justify-content-center">
                                    <h4 class="card-title">Sign in</h4>
                                </div>
                                <div class="card-body">
                                    <form method="post" name="myform" class="signin_validate">
                                        <div class="form-group">
                                            <label>Email</label>
                                            <input type="email" class="form-control" placeholder="hello@example.com"
                                                name="email" />
                                        </div>
                                        <div class="form-group">
                                            <label>Password</label>
                                            <input type="password" class="form-control" placeholder="Password"
                                                name="password" />
                                        </div>
                                        <div class="form-row d-flex justify-content-between mt-4 mb-2">
                                            <div class="form-group mb-0">
                                                <label class="toggle">
                                                    <input class="toggle-checkbox" type="checkbox" />
                                                    <span class="toggle-switch"></span>
                                                    <span class="toggle-label">Remember me</span>
                                                </label>
                                            </div>
                                            <div class="form-group mb-0">
                                                <Link to={"./reset"}>Forgot Password?</Link>
                                            </div>
                                        </div>
                                        <div class="text-center">
                                            <Link  to={"./otp-1"} class="btn btn-success btn-block">Sign in</Link>
                                        </div>
                                    </form>
                                    <div class="new-account mt-3">
                                        <p>Don't have an account? <Link class="text-primary" to={"./signup"}>Sign
                                            up</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin;