import React from 'react'
import './NavBar.css'

import {
    Link
} from 'react-router-dom'


export const NavBar = ({logOut}) => {
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
                    <Link to="/admin/add">
                        <a>Add Data</a>
                    </Link>
                    <Link to="/admin/delete">
                        <a>Delete Data</a>
                    </Link>
                    <a onClick= {logOut}>Logout</a>
                </div>
                {/* Search */}
                <div className="navBar__search">
                    <div className="navBar__searchContainer">
                        <input placeholder="Search" type="text" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar