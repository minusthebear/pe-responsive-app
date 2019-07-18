import categories from "../images/ic/black/ic_categories.png";
import catalog from "../images/ic/black/ic_playlist_add_check.png";
import list from "../images/ic/black/ic_list.png";
import help from "../images/ic/black/ic_comment.png";
import pim from "../images/ic/black/ic_check_circle.png";
import account from "../images/ic/white/ic_person.png";
import locations from "../images/ic/black/ic_place.png";
import arrowForward from '../images/ic/black/ic_arrow_forward.png';
import React from "react";


export default function CategoryMobileView() {
    return (
        <>
            <div className="categories-list categories-show-all" >
                <img src={categories} alt="categories" />
                Show all categories
                <img className="mobile-arrow-forward" src={arrowForward} />
            </div>
            <div className="categories-list categories-my-catalog" >
                <img src={catalog} alt="catalog"  />
                My Catalog
                <img className="mobile-arrow-forward" src={arrowForward} />
            </div>
            <div className="categories-list categories-my-list" >
                <img src={list} alt="list"  />
                My List
                <img className="mobile-arrow-forward" src={arrowForward} />
            </div>
            <div className="categories-list categories-live-help" >
                <img src={help} alt="help"  />
                Live Help
                <img className="mobile-arrow-forward" src={arrowForward} />
            </div>
            <div className="categories-list categories-pim" >
                <img src={pim} alt="pim"  />
                PIM
                <img className="mobile-arrow-forward" src={arrowForward} />
            </div>
            <div className="categories-list categories-account" >
                <img className="categories-account-icon" src={account} alt="account" />
                Account
                <img className="mobile-arrow-forward" src={arrowForward} />
            </div>
            <div className="categories-list categories-branch-locations" >
                <img src={locations} alt="locations"  />
                Branch Locations
                <img className="mobile-arrow-forward" src={arrowForward} />
            </div>
        </>
    );
}