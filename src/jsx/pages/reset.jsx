import React from 'react';
import { Link } from 'react-router-dom';

function Reset() {
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
                <div class="card-header justify-content-center">
                  <h4 class="card-title">Reset password</h4>
                </div>
                <div class="card-body">
                  <form>
                    <div class="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        class="form-control"
                        value="hello@example.com"
                      />
                    </div>
                    <div class="text-center">
                      <Link
                        to={'./signin'}
                        class="btn btn-success btn-block"
                      >
                        Reset
                      </Link>
                    </div>
                  </form>
                  <div class="new-account mt-3">
                    <p class="mb-1">Don't Received? </p>
                    <Link class="text-primary" to={'./reset'}>
                      Resend{' '}
                    </Link>
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

export default Reset;
