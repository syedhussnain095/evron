import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar_bg_color px-5">
                <NavLink className="navbar-brand" to="/dashboard">Home</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav ms-auto">
                        {
                            localStorage.getItem('user-info') ?

                                <>


                                    <li className="nav-item active">
                                        <NavLink className="nav-link" to="/">Login</NavLink>
                                    </li>
                                </>
                                :
                                <>
                                    <li className="nav-item active">
                                        <NavLink className="nav-link" to="/dashboard">Account Profile</NavLink>
                                    </li>
                                    <li className="nav-item active">
                                        <NavLink className="nav-link" to="/opentracker">Open Tracker</NavLink>
                                    </li>
                                    <li className="nav-item active">
                                        <NavLink className="nav-link" to="/closetracker">Close Tracker</NavLink>
                                    </li>
                                    <li className="nav-item active">
                                        <NavLink className="nav-link" to="/individualupload">Individual Upload</NavLink>
                                    </li>
                                    <li className="nav-item active">
                                        <NavLink className="nav-link" to="/bulkupload">Bulk Upload</NavLink>
                                    </li>
                                    <li className="nav-item active">
                                        <NavLink className="nav-link" to="/supporttickets">Support Tickets</NavLink>
                                    </li>
                                    <li className="nav-item active">
                                        <NavLink className="nav-link logout_btn" to="/">Logout</NavLink>
                                    </li>
                                </>
                        }

                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header