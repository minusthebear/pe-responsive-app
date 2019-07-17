import React from 'react';
import './App.scss';
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
        <Header/>
        <div className="categories-container">
            <div>
                <div className="categories-list categories-show-all" >
                    Show all categories
                </div>
            </div>
            <div>
                <div className="categories-list categories-my-catalog" >
                    My Catalog
                </div>
                <div className="categories-list categories-my-list" >
                    My List
                </div>
                <div className="categories-list categories-live-help" >
                    Live Help hgfdhg
                </div>
            </div>
            <div>
                <div className="categories-list categories-pim" >
                    PIM
                </div>
                <div className="categories-list categories-account" >
                    Account
                </div>
                <div className="categories-list categories-branch-locations" >
                    Branch Locations
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
