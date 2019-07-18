import thingOne from "../images/recent/11.png";
import thingTwo from "../images/recent/22.png";
import React, {useState, useEffect} from "react";
import TodaysDeals from "./TodaysDeals";

export default function RecentlyViewed({isMobile}) {

    let [ mobileView, setMobileView ] = useState(isMobile);

    useEffect(() => {
        window.addEventListener('resize', checkWindowWidthForRecentlyViewed);

        return () => {
            window.removeEventListener('resize', checkWindowWidthForRecentlyViewed);
        }
    }, []);

    function checkWindowWidthForRecentlyViewed() {
        setMobileView(window.innerWidth <= 768);
    }

    return (
        <div className="recently-viewed-container" >
            { mobileView ? null : <TodaysDeals/> }
            <div className="recently-viewed">
                <div className="recently-viewed-header">
                    <div className="recently-viewed-title">Recently Viewed</div>
                    <div className="recently-viewed-view-all">View All</div>
                </div>
                <div className="recently-viewed-body">
                    <div>
                        <div>
                            <img src={thingOne} alt="thingone" />
                        </div>
                        <div>
                            <img src={thingTwo} alt="thingtwo" />
                        </div>
                        <div>
                            <img src={thingTwo} alt="thingtwo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}