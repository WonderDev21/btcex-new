import React, { } from 'react';
import { Link } from 'react-router-dom';
import { OverlayTrigger, Tooltip, } from "react-bootstrap";

const home = (
    <Tooltip id="home">
        Home
    </Tooltip>
);
const exchange = (
    <Tooltip id="exchange">
        Exchange
    </Tooltip>
);
const accounts = (
    <Tooltip id="accounts">
        Accounts
    </Tooltip>
);
const data = (
    <Tooltip id="data">
        Data
    </Tooltip>
);
const settings = (
    <Tooltip id="settings">
        Setting
    </Tooltip>
);

function Sidebar() {

    return (
        <>
            <div class="sidebar">
                <div class="menu">
                    <ul>
                        <li>
                            <Link to={"/"} activeClassName="active">
                                <OverlayTrigger placement="right" overlay={home}>
                                    <span><i class="mdi mdi-view-dashboard"></i></span>
                                </OverlayTrigger>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/exchange"} activeClassName="active">
                                <OverlayTrigger placement="right" overlay={exchange}>
                                    <span><i class="mdi mdi-tumblr-reblog"></i></span>
                                </OverlayTrigger>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/account-overview"} activeClassName="active">
                                <OverlayTrigger placement="right" overlay={accounts}>
                                    <span><i class="mdi mdi-face-profile"></i></span>
                                </OverlayTrigger>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/data-tbi"} activeClassName="active">
                                <OverlayTrigger placement="right" overlay={data}>
                                    <span><i class="mdi mdi-database"></i></span>
                                </OverlayTrigger>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/settings"} activeClassName="active">
                                <OverlayTrigger placement="right" overlay={settings}>
                                    <span><i class="mdi mdi-settings"></i></span>
                                </OverlayTrigger>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar;