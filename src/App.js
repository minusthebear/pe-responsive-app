import React from 'react';
import './App.scss';
import Header from "./components/Header";
import Categories from "./components/Categories";
import MainBodyContainer from "./components/MainBodyContainer";

function App() {
  return (
    <div className="App">
        <Header/>
        <Categories/>
        <MainBodyContainer/>
    </div>
  );
}

export default App;
