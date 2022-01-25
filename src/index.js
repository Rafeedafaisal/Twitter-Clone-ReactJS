import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Home from './pages/Home/Home';
import Registration from './pages/Regisration/Registration';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import {react} from "react-dom"
import {BrowserRouter,Routes,Route} from "react-router-dom"
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Profile" element={<Profile/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/Register" element={<Registration/>}></Route>
    </Routes>
    </BrowserRouter>
    {/* <Home /> */}
    {/* <Registration/> */}
    {/* <Login/> */}
    {/* <Profile/> */}
  </React.StrictMode>,
  document.getElementById('root')
);


