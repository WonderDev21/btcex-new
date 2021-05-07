import React, { } from 'react';
import { Link } from 'react-router-dom';



function PageTitle() {

    return (
        <>
            <div class="page-title dashboard">
                <div class="container">
                    <div class="row">
                        <div class="col-6">
                            <div class="page-title-content">
                                <p>Welcome Back,
                                <span> Saiful Islam</span>
                                </p>
                            </div>
                        </div>
                        <div class="col-6">
                            <ul class="text-right breadcrumbs list-unstyle">
                                <li><Link to={"./settings"}>Settings </Link></li>
                                <li class="active"><Link to={"#"}>Security</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageTitle;

// 0170 55 99 058  