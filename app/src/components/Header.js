import React, { Fragment } from 'react'
import './Header.css'

const Header = () => {
    return (
        <Fragment>
            <h1 className="header">Welcome to the Queue</h1>
            <button className="sumbit">Submit Request</button>
            <button className="admin">Admin Login</button>
        </Fragment>
    )
}

export default Header;
