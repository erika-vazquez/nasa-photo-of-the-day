import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from './components/PhotoCard.js'
import "./App.css";

function App() {
console.log('first')
axios
.get('https://api.nasa.gov/planetary/apod?date=2017-11-02');



  return (
    <div className="App">      
      <PhotoCard />
    </div>
  );
}



export default App;
