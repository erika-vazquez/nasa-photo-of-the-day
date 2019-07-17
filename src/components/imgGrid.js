import React, {useState, useEffect} from 'react'; //import useState and useEffect hook to be able to use them
import ImgCard from './ImgCard'; //to use thingys from ImgCard file
import axios from 'axios'; //import axios for server requests

export default function ImgGrid(){  //export Grid component
    const [image, setImg] = useState(''); //setImg is a function that updates image variable

    useEffect(()=>{ //fetch data from outside/external source using hook
        axios //server request from nasa api
        .get('https://api.nasa.gov/planetary/apod?api_key=sBsh1VAVYr7U7b0U8OW0CjDwbIgr47abietkqcwb&date=2012-03-14')
        .then(data => {
            const imgReceived = data.data.hdurl; //passes the requested data onto imgReceived
            console.log(data.data) //test
            setImg(imgReceived); //updates image varible variable with the data(img) received
        })
    },[]) //c

    {/* */}
    return (
        <ImageCard imgUrl={image} />    
    )
}