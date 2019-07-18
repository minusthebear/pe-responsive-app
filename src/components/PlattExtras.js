import React, {useState, useEffect} from "react";
import PlattExtrasWebView from "./PlattExtrasWebView";
import PlattExtrasMobileView from "./PlattExtrasMobileView";

export default function PlattExtras({ isMobile }) {

    let [ mobileView, setMobileView ] = useState(isMobile);

    useEffect(() => {
        window.addEventListener('resize', checkWindowWidthForExtras);

        return () => {
            window.removeEventListener('resize', checkWindowWidthForExtras);
        }
    }, []);

    function checkWindowWidthForExtras() {
        setMobileView(window.innerWidth <= 768);
    }

    function isMobileView() {
        return mobileView ? <PlattExtrasMobileView/> : <PlattExtrasWebView/>;
    }

    return (
        <div className="platt-extras">
            { isMobileView() }
        </div>
    );
}