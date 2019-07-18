import categories from "../images/ic/black/ic_categories.png";
import catalog from "../images/ic/black/ic_playlist_add_check.png";
import list from "../images/ic/black/ic_list.png";
import help from "../images/ic/black/ic_comment.png";
import pim from "../images/ic/black/ic_check_circle.png";
import account from "../images/ic/white/ic_person.png";
import locations from "../images/ic/black/ic_place.png";
import React from "react";


export default function CategoryWebView() {
    return (
        <>
            <div>
                <div className="categories-list categories-show-all" >
                    <img src={categories} alt="categories" />
                    Show all categories
                </div>
            </div>
            <div>
                <div className="categories-list categories-my-catalog" >
                    <img src={catalog} alt="catalog"  />
                    My Catalog
                </div>
                <div className="categories-list categories-my-list" >
                    <img src={list} alt="list"  />
                    My List
                </div>
                <div className="categories-list categories-live-help" >
                    <img src={help} alt="help"  />
                    Live Help
                </div>
            </div>
            <div>
                <div className="categories-list categories-pim" >
                    <img src={pim} alt="pim"  />
                    PIM
                </div>
                <div className="categories-list categories-account" >
                    <img className="categories-account-icon" src={account} alt="account"  />
                    Account
                </div>
                <div className="categories-list categories-branch-locations" >
                    <img src={locations} alt="locations"  />
                    Branch Locations
                </div>
            </div>
        </>
    );
}