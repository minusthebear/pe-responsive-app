import React from "react";
import ProductMarkets from "./ProductMarkets";
import GetStarted from "./GetStarted";
import RecentlyViewed from "./RecentlyViewed";
import PlattExtras from "./PlattExtras";
import DownloadPlattApp from "./DownloadPlattApp";

export default function MainBodyContainer() {
    return (
        <div className="platt-main-body">
            <ProductMarkets />
            <GetStarted/>
            <RecentlyViewed/>
            <PlattExtras/>
            <DownloadPlattApp/>
        </div>
    );
}