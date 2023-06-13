import logo from './logo.svg';
import './style.css';
import React,{useState} from 'react';
import Items from './items';
import Navigation from './nav';
import { Routes,Route } from 'react-router-dom';
import Details from './Details'

function App() {
  return (
    <>
    <Navigation/>
    <Routes>
      <Route path="/" element={<Items />}/>
      <Route path='/12' element={<Details/>} />
    </Routes>
    </>
  );
 
}

export default App;
