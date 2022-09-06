import React from "react";
import fortNite from '../Assets/fortnite.png';
import freeFire from '../Assets/freefire.png';
import mobileLegends from '../Assets/mobilelegends.png';
import valorant from '../Assets/valorant.png';

const Sponsors = () => {
    return(
        <div className="sponsors">
            <div className="sponsorCards">
                <img alt="" src={fortNite} />
            </div>
            <div className="sponsorCards">
                <img alt="" src={freeFire} />
            </div>
            <div className="sponsorCards">
                <img alt="" src={mobileLegends} />
            </div>
            <div className="sponsorCards">
                <img alt="" src={valorant} />
            </div>           
        </div>
    );
}
export default Sponsors;