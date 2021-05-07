import React, { } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, } from 'react-bootstrap'

const ExportToggle = React.forwardRef(({ children, onClick }, ref) => (
    <div
        ref={ref}
        onClick={e => {
            e.preventDefault();
            onClick(e);
        }}

    >
        {children}
        <div className="nav-item">
            <Link to={"#"} class="nav-link  dropdown-toggle" data-toggle="dropdown">
                <i class="mdi mdi-file-export"></i>
                <span>Export CSV</span>
            </Link>
        </div>
    </div>
));



function DataSubmenu() {

    return (
        <>
            <ul class="d-flex">
                <li class="nav-item">
                    <Link to={"./data-tbi"} class="nav-link">
                        <i class="mdi mdi-database-plus"></i>
                        <span>TBI</span>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to={"./data-funding-rate"} class="nav-link">
                        <i class="mdi mdi-book"></i>
                        <span>Founding Rate</span>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to={"./data-insurance-fund"} class="nav-link">
                        <i class="mdi mdi-book-multiple"></i>
                        <span>Insurance Found</span>
                    </Link>
                </li>
                <li class="nav-item dropdown">
                    <Dropdown>
                        <Dropdown.Toggle as={ExportToggle} />
                        <Dropdown.Menu size="sm" title="">
                        <Link class="dropdown-item py-2" to={"./data-last-price"}>Last Price</Link>
                        <Link class="dropdown-item py-2" to={"./data-index-price"}>Index Price</Link>
                        <Link class="dropdown-item pt-2" to={"./data-mark-price"}>Mark Price</Link>

                        </Dropdown.Menu>
                    </Dropdown>
                </li>
            </ul>
        </>
    )
}

export default DataSubmenu;