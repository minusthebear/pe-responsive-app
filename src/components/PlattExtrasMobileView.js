import supeTool from "../images/img/super-tool-day.png";
import location from "../images/img/ic_location_b.png";
import helpCenter from "../images/img/ic_helpcenter.png";
import plattU from "../images/img/ic_platt-u.png";
import React from "react";

export default function PlattExtrasMobileView() {
    return (
        <>
            <div className="platt-extras-mobile-view-container">
                <div>
                    <img src={supeTool} />
                    <div>
                        <div>Super Tool Day & Dynamic Data Day</div>
                    </div>
                </div>
                <div>
                    <img src={location} />
                    <div>
                        <div>Branch Locations</div>
                    </div>
                </div>
            </div>
            <div className="platt-extras-mobile-view-container">
                <div>
                    <img src={helpCenter} />
                    <div>
                        <div>Help Center</div>
                    </div>
                </div>
                <div>
                    <img src={plattU} />
                    <div>
                        <div>Platt University</div>
                    </div>
                </div>
            </div>
        </>
    )
}