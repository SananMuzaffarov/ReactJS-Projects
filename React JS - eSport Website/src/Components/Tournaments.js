import React from "react";
import valorant from '../Assets/valorant.png';
import freefire from '../Assets/freefire.png';
import mobilelegends from '../Assets/mobilelegends.png';
import fortnite from '../Assets/fortnite.png';
import fifa from '../Assets/fifa.webp';
import lol from '../Assets/lol.png';
import nfs from '../Assets/nfs.png';
import pes from '../Assets/pes.jpg';
import pubg from '../Assets/pubg.png';
import cod from '../Assets/cod.png';

const Tournaments = () => {
    return(
        <div className="tournaments">
            <div className="tournamentHeader">
                <h1>Tarkam Tournaments</h1>
            </div>
            <div className="cards">
                <div className="card">
                    <img alt="" src={valorant} className="cardImage" />
                    <div className="cardContent">
                        <h2>VALORANT Champions 2022</h2>
                        <p>Brugge, Belgium</p>
                        <button type="button">Join Now</button>
                    </div>
                </div>
                <div className="card">
                    <img alt="" src={freefire} className="cardImage" />
                    <div className="cardContent">
                        <h2>FFL Latinoamerica 2022 Closing</h2>
                        <p>Amsterdam, Netherlands</p>
                        <button type="button">Join Now</button>
                    </div>
                </div>
                <div className="card">
                    <img alt="" src={fortnite} className="cardImage" />
                    <div className="cardContent">
                        <h2>Fortnite 2022 World Cup Qualification</h2>
                        <p>Santos, Brazil</p>
                        <button type="button">Join Now</button>
                    </div>
                </div>
                <div className="card">
                    <img alt="" src={mobilelegends} className="cardImage" />
                    <div className="cardContent">
                        <h2>MPL Indonesia Season 10</h2>
                        <p>Jakarta, Indonesia</p>
                        <button type="button">Join Now</button>
                    </div>
                </div>
                <div className="card">
                    <img alt="" src={cod} className="cardImage" />
                    <div className="cardContent">
                        <h2>Call of Duty World League</h2>
                        <p>Istanbul, Turkiye</p>
                        <button type="button">Join Now</button>
                    </div>
                </div>
                <div className="card">
                    <img alt="" src={fifa} className="cardImage" />
                    <div className="cardContent">
                        <h2>FIFA Interactive World Cup</h2>
                        <p>Bristol, England</p>
                        <button type="button">Join Now</button>
                    </div>
                </div>
                <div className="card">
                    <img alt="" src={lol} className="cardImage" />
                    <div className="cardContent">
                        <h2>League of Legends World Championship</h2>
                        <p>Edinburg, Scotland</p>
                        <button type="button">Join Now</button>
                    </div>
                </div>
                <div className="card">
                    <img alt="" src={nfs} className="cardImage" />
                    <div className="cardContent">
                        <h2>Need For Speed Local Championship</h2>
                        <p>Prague, Czech Republic</p>
                        <button type="button">Join Now</button>
                    </div>
                </div>
                <div className="card">
                    <img alt="" src={pes} className="cardImage" />
                    <div className="cardContent">
                        <h2>Pro Evolution Soccer 2022 Summer Cup</h2>
                        <p>Debrecen, Hungary</p>
                        <button type="button">Join Now</button>
                    </div>
                </div>
                <div className="card">
                    <img alt="" src={pubg} className="cardImage" />
                    <div className="cardContent">
                        <h2>PUBG Mobile Pro League</h2>
                        <p>Zagreb, Croatia</p>
                        <button type="button">Join Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Tournaments;