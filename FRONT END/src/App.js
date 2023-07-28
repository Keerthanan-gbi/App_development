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
import { Rating } from "./rating";
import { Ra } from "./ra";
import Cards from "./Components/card";
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
    <Route path="/rating" element={<Rating/>}></Route>
    <Route path="/ra" element={<Ra/>}></Route>
    <Route path="/cards" element={<Cards/>}></Route>
    
  </Routes>
  </div>
  );
}
export default App;
