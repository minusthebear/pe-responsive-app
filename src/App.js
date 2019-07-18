import React from 'react';
import './App.scss';
import Header from "./components/Header";
import Categories from "./components/Categories";
import MainBodyContainer from "./components/MainBodyContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
        <Header/>
        <Categories/>
        <MainBodyContainer/>
        <Footer/>
    </div>
  );
}

export default App;
