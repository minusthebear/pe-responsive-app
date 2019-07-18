import comment from "../images/ic/black/ic_comment.png";
import React from "react";


export default function Footer() {
    return (
        <div className="platt-footer">
            <div className="platt-footer-contact">
                <div>
                    <div>Support Center</div>
                </div>
                <div>
                    <div>800-25-Platt</div>
                    <div className="platt-contact-digits">800-257-5288</div>
                </div>
                <div>
                    <div>4 a.m. - 12 a.m. (pst)</div>
                    <div>7 Days a Week</div>
                </div>
                <div>
                    <div className="live-help-button-container">
                        <div className="live-help-button">
                            <div>
                                <img src={comment} alt="comment"/>
                                <div>Live Help</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="platt-footer-menu">
                <div>
                    <div>Contact Us</div>
                </div>
                <div>
                    <div>What's New</div>
                </div>
                <div>
                    <div>FAQ's</div>
                </div>
            </div>
        </div>
    );
}