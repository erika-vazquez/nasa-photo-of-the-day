import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from './components/PhotoCard.js'
import "./App.css";

function App() {
  const [data, setData] = useState({});

useEffect(()=> {
  console.log("first")
  axios
.get('https://api.nasa.gov/planetary/apod?api_key=p9BsgwQG9lcjsIOL02DjTgmBPwN4RZ0yrWEGF8RK&date=1999-09-04')
.then(response =>{
  console.log(response.data)
  setData(response.data);
})
},[]);


  return (
    <div className="App">      
      <PhotoCard title={data.title}
      url={data.url}
      expl={data.explanation}
      />
    </div>
  );
}



export default App;
