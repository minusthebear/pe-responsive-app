import React, { useState, useEffect } from "react";
import CategoryMobileView from "./CategoryMobileView";
import CategoryWebView from "./CategoryWebView";

export default function Categories({ isMobile }) {

    let [ mobileView, setMobileView ] = useState(isMobile);

    useEffect(() => {
        window.addEventListener('resize', checkWindowWidthForCategories);

        return () => {
            window.removeEventListener('resize', checkWindowWidthForCategories);
        }
    }, []);

    function checkWindowWidthForCategories() {
        setMobileView(window.innerWidth <= 768);
    }

    function isMobileView() {
        return mobileView ? <CategoryMobileView/> : <CategoryWebView/>;
    }

    return (
        <div className="categories-container">
            { isMobileView() }
        </div>
    );
}