import React from 'react'
import './NavBar.css'

import {
    Link
} from 'react-router-dom'


function NotLoggedInNavBar() {
    return (
        <div className="app__navBar">
            <div className="navBar__wrapper">
                {/* Logo */}
                <div className="navBar__logo">
                    <Link to="/">
                        <img src="https://assets.coingecko.com/coins/images/12817/small/filecoin.png?1602753933" width={40} alt="Flatcoin-logo"/>
                    </Link>
                </div>
                {/* Menu */}
                <div className="navBar__menuItems">
                    <Link to="/">
                        <a>Exchanges</a>
                    </Link>
                    <Link to="/commodities">
                        <a>Commodities</a>
                    </Link>
                    <Link to="/currencies">
                        <a>Currencies</a>
                    </Link>
                    <Link to="/login">
                        <a>Login as Admin</a>
                    </Link>
                </div>
                <div className="navBar__search">
                    <div className="navBar__searchContainer">
                        <input placeholder="Search" type="text" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotLoggedInNavBar