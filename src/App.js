import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Nav from './components/Nav';
import Payment from './components/Payment';


function App() {

  return (
    <>
    <Router>
    <Nav />
     <Routes>
       <Route path='/' element={<Home />} />
       <Route path='payment' element={<Payment />} />
     </Routes>
     </Router>
     </>
  );
}

export default App;
