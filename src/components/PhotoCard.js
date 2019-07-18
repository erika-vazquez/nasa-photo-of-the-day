import React from 'react';

function PhotoCard(props) { //build component with props passed in
    return(
        <div>
            <h2>{props.title}</h2>
            <img src={props.url} alt=""/>
            <p>{props.expl}</p>
        </div>
            )
}

export default PhotoCard;