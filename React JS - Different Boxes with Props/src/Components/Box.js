/* eslint-disable jsx-a11y/alt-text */
import React from "react";
const Boxes = (props) => {
    return(
        <div className="card">
            <div className="card-header">
                <img src={props.img} />
            </div>
            <div className="card-body">
                <span class="car">{props.name}</span>
                <h3>{props.news}</h3>
                <p>{props.answer}</p>
            </div>
        </div>
    );
}
export default Boxes;