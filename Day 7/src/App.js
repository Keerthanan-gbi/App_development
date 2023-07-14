import React, { useState } from "react";
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";
import {  Routes, Route } from "react-router-dom";
import Home from "./home";
import Products from "./products";
import { Feedback } from "./feedback";
import { Fb } from "./fb";
import AboutPage from "./about";
function App() {
  return (
    <div className="main">
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/reg" element={<Register/>}></Route>
    <Route path="/products" element={<Products/>}></Route>
    <Route path="/feedback" element={<Feedback/>}></Route>
    <Route path="/fb" element={<Fb/>}></Route>
    <Route path="/about" element={<AboutPage/>}></Route>
  </Routes>
  </div>
  );
}
export default App;
