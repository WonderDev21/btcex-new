import React, { } from 'react';
import { Link } from 'react-router-dom';



function Signup() {

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
                                    <h4 class="card-title">Sign up your account</h4>
                                </div>
                                <div class="card-body">
                                    <form method="post" name="myform" class="signup_validate">
                                        <div class="form-group">
                                            <label>Username</label>
                                            <input type="text" class="form-control" placeholder="username" name="username" />
                                        </div>
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
                                        <div class="text-center mt-4">
                                            <Link to={"./signin"} class="btn btn-success btn-block">Sign up</Link>
                                        </div>
                                    </form>
                                    <div class="new-account mt-3">
                                        <p>Already have an account? <Link class="text-primary" to={"signin"}>Sign in</Link>
                                        </p>
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

export default Signup;