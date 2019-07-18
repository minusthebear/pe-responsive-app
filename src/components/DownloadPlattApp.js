import banner from "../images/panel/app-get-banner.png";
import React from "react";

export default function DownloadPlattApp() {
    return (
        <div className="download-platt-app">
            <div className="app-get-banner">
                <img src={banner} />
            </div>
            <div className="download-platt-app-message">
                <div>Shop better, download the Platt App today</div>
            </div>
        </div>
    );
}