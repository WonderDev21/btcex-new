import React, { } from 'react';
import { Link } from 'react-router-dom';
// import { Row, Col, Card } from 'react-bootstrap'



function Footer2() {

    return (
        <>
            <div class="footer dashboard">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-8 col-12">
                            <div class="copyright">
                                <p>© Copyright 2020 <Link href="https://themeforest.net/user/quixlab/portfolio">Quixlab</Link> I
                                All Rights Reserved</p>
                            </div>
                        </div>
                        <div class="col-sm-4 col-12">
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

export default Footer2;