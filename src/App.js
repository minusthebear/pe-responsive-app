import React, {useState} from 'react';
import './App.scss';
import Header from "./components/Header";
import Categories from "./components/Categories";
import MainBodyContainer from "./components/MainBodyContainer";
import Footer from "./components/Footer";

function App() {

  let [ mobile ] = useState(window.innerWidth <= 768);

  return (
    <div className="App">
        <Header/>
        <Categories isMobile={mobile}/>
        <MainBodyContainer isMobile={mobile}/>
        <Footer/>
    </div>
  );
}

export default App;
