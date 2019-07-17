import React from 'react';
import './App.scss';
import Header from "./components/Header";
import Categories from "./components/Categories";

function App() {
  return (
    <div className="App">
        <Header/>
        <Categories/>
        <div className="platt-main-body">
            <div>
                <div className="product-markets-container">
                    <div className="product-markets-header">
                        Product Markets
                    </div>
                    <div className="product-markets-types">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
