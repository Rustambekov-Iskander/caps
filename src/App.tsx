import React from 'react';
import './App.scss';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AppRouter from "./components/AppRouter";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <AppRouter/>
            <Footer/>
        </div>
    );
}

export default App;
