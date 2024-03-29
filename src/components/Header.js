import plattLogo from "../images/img/logo.png";
import HeaderMenuItems from "./HeaderMenuItems";
import React from "react";
import SearchBar from "./SearchBar";

export default function Header() {
    return (
        <div className="platt-header">
            <div>
                <div className="platt-header-logo">
                    <div>
                        <img src={plattLogo} alt="Platt Electric" />
                    </div>
                </div>
                <HeaderMenuItems/>
            </div>
            <SearchBar/>
        </div>
    );
}