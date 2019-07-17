import categories from "../images/ic/black/ic_categories.png";
import catalog from "../images/ic/black/ic_playlist_add_check.png";
import list from "../images/ic/black/ic_list.png";
import help from "../images/ic/black/ic_comment.png";
import pim from "../images/ic/black/ic_check_circle.png";
import account from "../images/ic/white/ic_person.png";
import locations from "../images/ic/black/ic_place.png";
import React from "react";

export default function Categories() {
    return (
        <div className="categories-container">
            <div>
                <div className="categories-list categories-show-all" >
                    <img src={categories} />
                    Show all categories
                </div>
            </div>
            <div>
                <div className="categories-list categories-my-catalog" >
                    <img src={catalog} />
                    My Catalog
                </div>
                <div className="categories-list categories-my-list" >
                    <img src={list} />
                    My List
                </div>
                <div className="categories-list categories-live-help" >
                    <img src={help} />
                    Live Help
                </div>
            </div>
            <div>
                <div className="categories-list categories-pim" >
                    <img src={pim} />
                    PIM
                </div>
                <div className="categories-list categories-account" >
                    <img src={account} />
                    Account
                </div>
                <div className="categories-list categories-branch-locations" >
                    <img src={locations} />
                    Branch Locations
                </div>
            </div>
        </div>
    );
}