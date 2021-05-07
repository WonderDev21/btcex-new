import React, { } from 'react';
import { Link } from 'react-router-dom';



function SettingsSubmenu() {

    return (
        <>
            <ul class="d-flex">
                <li class="nav-item">
                    <Link to={"./settings"} class="nav-link">
                        <i class="mdi mdi-account-settings-variant"></i>
                        <span>Edit Profile</span>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to={"./settings-preferences"} class="nav-link">
                        <i class="mdi mdi-settings"></i>
                        <span>Preferences</span>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to={"./settings-security"} class="nav-link">
                        <i class="mdi mdi-lock"></i>
                        <span>Security</span>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to={"./settings-account"} class="nav-link">
                        <i class="mdi mdi-bank"></i>
                        <span>Linked Account</span>
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default SettingsSubmenu;