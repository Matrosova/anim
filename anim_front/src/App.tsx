import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import {Home} from "./views/Home/Home";
import './App.scss'
import {Footer} from "./components/Footer/Footer";
import {Profile} from "./views/Profile/Profile";
import {PrivateRoute} from "./privateRoute/privateRoute";
import {history} from "./helpers/history";
import store from "./helpers/store";
import {Provider} from "react-redux";

function App() {
  return (
    <div className="app">
        <BrowserRouter history={history}>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route exact path='/' element={<PrivateRoute/>}>
                    <Route exact path='/profile' element={<Profile/>}/>
                </Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
  )
}

export default App;
