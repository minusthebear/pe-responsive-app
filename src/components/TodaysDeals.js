import deal from "../images/panel/deal.png";
import React from "react";

export default function TodaysDeals() {
    return (
        <div className="todays-deals">
            <img src={deal} alt="deal" />
        </div>
    );
}