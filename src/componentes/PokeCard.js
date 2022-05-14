import React, { useState } from 'react'
import getCardData from '../helpers/getCardData'

import '../css/PokeCard.css';

export const PokeCard = ({ name, url }) => {
    const [img, setImg] = useState('');
    const [id, setId] = useState( null );

    getCardData( url )
        .then( data =>{
            setImg( data.sprites.front_default );
            setId( data.id );
        })

  return (
    <div key={ id } className='card' >
        <img src={ img } alt={ name } />
        <p className='number' >No. { id }</p>
        <p className='name'>{ name }</p>
    </div>
  )
}
