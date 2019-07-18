import React from 'react';
import lineStyle from '../images/ic/green/ic_line_style.png';
import search from '../images/ic/green/ic_search.png';
import scanner from '../images/ic/green/ic_scanner.png';


export default function MobileMenuOptions() {
    return (
        <div className="mobile-menu-options">
            <div>
                <div>
                    <div>
                        <div>
                            <img src={lineStyle} alt="linestyle" />
                        </div>
                    </div>
                </div>
                <div>Categories</div>
            </div>
            <div>
                <div>
                    <div>
                        <div>
                            <img src={search} alt="search" />
                        </div>
                    </div>
                </div>
                <div>Search</div>
            </div>
            <div>
                <div>
                    <div>
                        <div>
                            <img src={scanner} alt="scanner" />
                        </div>
                    </div>
                </div>
                <div>Scan</div>
            </div>
        </div>
    )
}