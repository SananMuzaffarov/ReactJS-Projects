import React from "react";

const Header = () => {
    return(
        <div className="header">
            <div className="logo">
                <h1>LOGO</h1>
            </div>
            <nav className="navigation">
                <ul>
                    <li><a href="/">Tournament</a></li>
                    <li><a href="/">Events</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </nav>
            <div className="btn">
                <button type="button">Sign Up</button>
            </div>
        </div>
    );
}
export default Header;