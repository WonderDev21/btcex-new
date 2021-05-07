import React, { } from 'react';
import { Link } from 'react-router-dom';



function AccountSubmenu() {

    return (
        <>
            <ul class="d-flex">
                <li class="nav-item">
                    <Link to={"./account-overview"} class="nav-link">
                        <i class="mdi mdi-bullseye"></i>
                        <span>Overview</span>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to={"./account-deposit"} class="nav-link">
                        <i class="mdi mdi-heart"></i>
                        <span>Deposit</span>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to={"./account-withdraw"} class="nav-link">
                        <i class="mdi mdi-pentagon"></i>
                        <span>Withdraw</span>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to={"./account-api"} class="nav-link">
                        <i class="mdi mdi-database"></i>
                        <span>API</span>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to={"./account-affiliate"} class="nav-link">
                        <i class="mdi mdi-diamond"></i>
                        <span>Affiliate</span>
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default AccountSubmenu;