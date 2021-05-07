import React from 'react';
import { Link } from 'react-router-dom';

function Otp1() {
  return (
    <>
      <div class="authincation section-padding">
        <div class="container h-100">
          <div class="row justify-content-center h-100 align-items-center">
            <div class="col-xl-5 col-md-6">
              <div class="mini-logo text-center my-5">
                <Link to={'./'}>
                  <img
                    src={require('../../images/logo.png')}
                    alt=""
                  />
                </Link>
              </div>
              <div class="auth-form card">
                <div class="card-body">
                  <Link class="page-back text-muted" to={'./signin'}>
                    <span>
                      <i class="fa fa-angle-left"></i>
                    </span>{' '}
                    Back
                  </Link>
                  <h3 class="text-center">OTP Verification</h3>
                  <p class="text-center mb-5">
                    We will send one time code on this number
                  </p>
                  <form>
                    <div class="form-group">
                      <label>Your phone number</label>
                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <span class="input-group-text pl-4 pr-4">
                            <i class="fa fa-phone"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          class="form-control"
                          value="+1 12365480"
                        />
                      </div>
                    </div>
                    <div class="text-center mt-4">
                      <Link
                        to={'./otp-2'}
                        class="btn btn-success btn-block"
                      >
                        Send
                      </Link>
                    </div>
                  </form>
                  <div class="new-account mt-3 d-flex justify-content-between">
                    <p>
                      Don't get code?{' '}
                      <Link class="text-primary" to={'./otp-1'}>
                        Resend
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Otp1;
