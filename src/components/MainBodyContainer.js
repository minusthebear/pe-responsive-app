import React from "react";
import ProductMarkets from "./ProductMarkets";
import GetStarted from "./GetStarted";

export default function MainBodyContainer() {
    return (
        <div className="platt-main-body">
            <ProductMarkets />
            <GetStarted/>
        </div>
    );
}