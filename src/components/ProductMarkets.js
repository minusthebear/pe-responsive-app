import dataComm from "../images/img/datacomm.png";
import hvac from "../images/img/hvac.png";
import industrial from "../images/img/industrial.png";
import lighting from "../images/img/lighting.png";
import energy from "../images/img/energy.png";
import utility from "../images/img/utility.png";
import React from "react";

export default function ProductMarkets() {
    return (

        <div>
            <div className="product-markets-container">
                <div className="product-markets-header">
                    Product Markets
                </div>
                <div className="product-markets-types">
                    <div>
                        <img src={dataComm} alt="dataComm"/>
                        <div className="product-market-types-description">
                            <div>DataComm</div>
                        </div>
                    </div>
                    <div>
                        <img src={hvac} alt="hvac" />
                        <div className="product-market-types-description">
                            <div>HVAC</div>
                        </div>
                    </div>
                    <div>
                        <img src={industrial} alt="industrial"  />
                        <div className="product-market-types-description">
                            <div>Industrial</div>
                        </div>
                    </div>
                    <div>
                        <img src={lighting} alt="lighting"  />
                        <div className="product-market-types-description">
                            <div>Lighting</div>
                        </div>
                    </div>
                    <div>
                        <img src={energy} alt="energy"  />
                        <div className="product-market-types-description">
                            <div>Energy</div>
                        </div>
                    </div>
                    <div>
                        <img src={utility} alt="utility"  />
                        <div className="product-market-types-description">
                            <div>Utility</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}