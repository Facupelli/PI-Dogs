import React from 'react';

export default function Card({name, image, temperament, weight}) {

    const weightSplit = weight.split('-');

    return(
        <div>
            <img src={image} alt='img not found' width='200px' height='200px' />
            <h3>{name}</h3>
            <h4>{temperament}</h4>
            <h4>Weight</h4>
            <div>
                <p>Min: {weightSplit[0]}kg </p>
                <p>Max: {weightSplit[1]}kg </p>
            </div>            
        </div>
    )
}