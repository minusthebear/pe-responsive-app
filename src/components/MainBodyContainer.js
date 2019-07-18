import React, { useState, useEffect } from "react";
import ProductMarkets from "./ProductMarkets";
import GetStarted from "./GetStarted";
import RecentlyViewed from "./RecentlyViewed";
import PlattExtras from "./PlattExtras";
import DownloadPlattApp from "./DownloadPlattApp";
import TodaysDeals from "./TodaysDeals";
import MobileMenuOptions from "./MobileMenuOptions";

export default function MainBodyContainer({ isMobile }) {

    let [ mobileView, setMobileView ] = useState(isMobile);

    useEffect(() => {
        window.addEventListener('resize', checkWindowWidthForMainBody);

        return () => {
            window.removeEventListener('resize', checkWindowWidthForMainBody);
        }
    }, []);

    function checkWindowWidthForMainBody() {
        setMobileView(window.innerWidth <= 768);
    }

    return (
        <div className="platt-main-body">
            <ProductMarkets />
            { mobileView ? <MobileMenuOptions/> : null }
            { mobileView ? <TodaysDeals/> : null}
            <GetStarted/>
            <RecentlyViewed isMobile={isMobile} />
            <PlattExtras isMobile={isMobile} />
            <DownloadPlattApp/>
        </div>
    );
}