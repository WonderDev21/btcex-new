import React, { } from 'react';
import { Link } from 'react-router-dom';



function Lock() {

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
                                    <h4 class="card-title">Locked</h4>
                                </div>
                                <div class="card-body">
                                    <form>
                                        <div class="form-group mb-4">
                                            <label>Enter Password</label>
                                            <input type="password" class="form-control"
                                                placeholder="Password" />
                                        </div>
                                        <Link class="btn-success btn-block btn-lg border-0 text-center" to={'./dashboard'}>Unlock</Link>
                                    </form>
                                    <div class="new-account text-center mt-3">
                                        <Link class="text-primary" to={"./reset"}>
                                            <h5>Not Saiful Islam?</h5>
                                        </Link>
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

export default Lock;