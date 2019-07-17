import React from 'react';
import '../App.scss';
import person from '../images/ic/white/ic_person.png';
import search from '../images/ic/white/ic_search.png';
import menu from '../images/ic/white/ic_menu.png';
import cart from '../images/ic/white/ic_shopping_cart.png';

export default function HeaderMenuItems() {
    return (
        <div className="platt-header-menu-items">
            <ul>
                <li>
                    <img src={search} alt="Search" />
                </li>
                <li>
                    <img src={cart} alt="Cart" />
                </li>
                <li>
                    <img src={person} alt="Person" />
                </li>
                <li>
                    <img src={menu} alt="Menu" />
                </li>
            </ul>
        </div>
    );
}