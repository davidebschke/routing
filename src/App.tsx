import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter, Link, Routes, Route, useNavigate} from "react-router-dom";
import Details from './Details';
import Curry from './Curry';

function App() {
    const [inputValue,setInputValue]=useState<string>("");
  return (
      <div className="App">

          <HashRouter>

          <Routes>
            <Route path="/" element={<Curry setInputValue={setInputValue} inputValue={inputValue}/>}/>
            <Route path="/:id" element={<Details/>}/>  // Details = Dateiname der Aufgerufen wird  // :id ist eine variable in Details
          </Routes>
        </HashRouter>

      </div>
  );
}

export default App;


