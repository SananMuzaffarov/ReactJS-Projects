import React from "react";
import {Link} from "react-router-dom";
const Home = () => {
    return(
        <div className="header">
             <div className="logo">
                    <h1>SANAN</h1>
             </div>
            <nav className="navigator">
                    <ul>
                        <li><Link to="/about">About</Link ></li>
                        <li><Link to="/resume">Resume</Link ></li>
                        <li><Link to="/portfolio">Portfolio</Link ></li>
                    </ul>
            </nav>
            <div className="buttons">
                    <button type="button">CV</button>
            </div>
        </div>
    );
}
export default Home;