import React, {useState, useEffect} from 'react';

export default function ImgCard(props){
    console.log(props);

    return (  
            <img src={props.imgUrl}/>
    )
}