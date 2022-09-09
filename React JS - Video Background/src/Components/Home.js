import React from "react";
import myVideo from '../Assets/backgroundVideo.mp4';

const Home = () => {
    return(
        <div className="container">
            <video src={myVideo} autoPlay loop muted />
            <div className="videoContent">
                <h3>This is Video Background</h3>
                <p>Subscribe to My Channel</p>
            </div>
        </div>
    );
}
export default Home;