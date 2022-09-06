import React from "react";

const Footer = () => {
    return(
        <div className="footer">
            <div className="footerLogo">
                <h1>LOGO</h1>
            </div>
            <div className="footerTitle">
                <p>Created by SananM, 2022</p>
            </div>
            <nav className="footerNav">
                <ul>
                    <li><a href="/" ><i class="fa-brands fa-facebook face"></i></a></li>
                    <li><a href="/"><i class="fa-brands fa-twitter tw"></i></a></li>
                    <li><a href="/"><i class="fa-brands fa-instagram ig"></i></a></li>
                    <li><a href="/"><i class="fa-brands fa-youtube yt"></i></a></li>
                </ul>
            </nav>
        </div>
    );
}
export default Footer;