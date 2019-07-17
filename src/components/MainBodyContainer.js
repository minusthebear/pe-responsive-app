import React from "react";
import ProductMarkets from "./ProductMarkets";
import GetStarted from "./GetStarted";
import deal from '../images/panel/deal.png';

export default function MainBodyContainer() {
    return (
        <div className="platt-main-body">
            <ProductMarkets />
            <GetStarted/>
            <div className="recently-viewed-container" >
                <div className="todays-deals">
                    <img src={deal} alt="deal" />
                </div>
                <div className="recently-viewed">
                    Recently Viewed
                </div>
            </div>
        </div>
    );
}