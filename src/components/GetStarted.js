import plattPlus from "../images/img/platt-plus.png";
import React from 'react';

export default function GetStarted() {
    return (
        <div className="get-started-container" >
            <div>
                <img src={plattPlus} alt="plattPlus" />
            </div>
            <div className="become-member-container">
                <div>
                    <div className="get-started-today">Get Started Today</div>
                    <div className="become-member-today">Become a <span>Platt Plus</span> Member</div>
                </div>
                <div className="platt-plus-member-button-container">
                    <div className="platt-plus-member-button">
                        <div>Learn More</div>
                    </div>
                </div>
            </div>
        </div>
    )
}