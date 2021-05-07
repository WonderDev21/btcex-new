import React, { } from 'react';
 import { Link } from 'react-router-dom';
// import { Row, Col, Card } from 'react-bootstrap'



function Footer1() {

    return (
        <>
            <div class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="copyright">
                            <p>© Copyright 2019 <Link to={'#'}>Tradio</Link> I All Rights Reserved</p>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="footer-social">
                            <ul>
                                <li><Link to={'#'}><i class="fa fa-facebook"></i></Link></li>
                                <li><Link to={'#'}><i class="fa fa-twitter"></i></Link></li>
                                <li><Link to={'#'}><i class="fa fa-linkedin"></i></Link></li>
                                <li><Link to={'#'}><i class="fa fa-youtube"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer1;