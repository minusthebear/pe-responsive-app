import thingOne from "../images/recent/11.png";
import thingTwo from "../images/recent/22.png";
import React, {useState, useEffect} from "react";
import TodaysDeals from "./TodaysDeals";

export default function RecentlyViewed({isMobile}) {

    const padding = 64;
    const imageWidth = 101;

    let [ mobileView, setMobileView ] = useState(isMobile);
    let [ showThingTwo, setShowThingTwo ] = useState(true);
    let [ showThingThree, setShowThingThree ] = useState(true);
    let [ elmWidth, setElmWidth ] = useState(null)

    useEffect(() => {
        window.addEventListener('resize', checkWindowWidthForRecentlyViewed);

        let recentlyViewedElm = document.getElementsByClassName('recently-viewed')[0];
        if (recentlyViewedElm) {
            setElmWidth(recentlyViewedElm.clientWidth)
        }

        checkWindowWidthForRecentlyViewed();

        return () => {
            window.removeEventListener('resize', checkWindowWidthForRecentlyViewed);
        }
    }, []);

    function checkWindowWidthForRecentlyViewed() {
        setMobileView(window.innerWidth <= 768);

        let recentlyViewedElm = document.getElementsByClassName('recently-viewed')[0];
        let width = recentlyViewedElm.clientWidth;
        setElmWidth(width);
        setShowThingTwo(isThingTwoShown(width));
        setShowThingThree(isThingThreeShown(width));
    }

    function isThingTwoShown(width) {
        return width > padding + imageWidth * 2;

    }
    function isThingThreeShown(width) {
        return width > padding + imageWidth * 3;
    }

    return (
        <div className="recently-viewed-container" >
            { mobileView ? null : <TodaysDeals/> }
            <div className="recently-viewed">
                <div className="recently-viewed-header">
                    <div className="recently-viewed-title">Recently Viewed</div>
                    { showThingTwo
                        ?
                        <div className="recently-viewed-view-all">View All</div>
                        :
                        null
                    }
                </div>
                <div className="recently-viewed-body">
                    <div>
                        <div>
                            <img src={thingOne} alt="thingone" />
                        </div>
                        { showThingTwo
                            ?
                            <div>
                                <img src={thingTwo} alt="thingtwo" />
                            </div>
                            :
                            null
                        }
                        { showThingThree
                            ?
                            <div>
                                <img src={thingTwo} alt="thingthree" />
                            </div>
                            :
                            null
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}