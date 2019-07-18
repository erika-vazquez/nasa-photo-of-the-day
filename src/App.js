import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from './components/PhotoCard.js'
import "./App.css";

function App() {
  const [data, setData] = useState(null);

useEffect(()=> {
  axios
.get('https://api.nasa.gov/planetary/apod?date=2017-11-02')
.then(result =>{
  console.log(response.data)
  setData(result.data);
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
