import React from "react";
import player from '../Assets/player.png';

const Quote = () => {
    return(
        <div className="quote">
            <div className="quoteContent">
                <i class="fa-sharp fa-solid fa-quote-left"></i>
                <h3>Tarkam is the best place to find tournament, with the big prize and great opponent. I start to my professional eSport career with Tarkam. Let's Join!</h3>
                <p>Besiktas E-Sport Player, Sanan Muzaffarov</p>
            </div>
            <div className="quoteContent image">
                <div className="cardBox">
                    <img alt="" src={player} className="playerImage"/>
                </div>
            </div>
        </div>
    );
}
export default Quote;