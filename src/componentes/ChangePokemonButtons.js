import React from 'react'

import '../css/ChangePokemonButtons.css'

export const ChangePokemonButtons = ({ cant, prev, setPrev, setCant }) => {

const handlePrev = (e) => {
    if( prev > 0 ){
        prev-cant > 0 ? setPrev( prev -= cant) : setPrev( prev = 0 );
    }
}

const handleNext = (e) => {
    if( prev < ( 898 - cant ) ){
        prev+cant<=( 898 - cant )  ? setPrev( prev += cant ) : setPrev( prev = ( 898 - cant ) );
    }
}

const handleChange = (e) => {
    setCant( parseInt( e.target.value ) );
}

  return (
    <div className='button-wrap'>
        <button  id='back' className='back' onClick={ handlePrev } > Retroceder </button>

        <div className='selector'>
            <label>Numero de pokemon mostrados: </label>
            <select id="numberCont" name="Numero" onChange={handleChange}>
                <option value="22">22</option>
                <option value="26">26</option>
                <option value="32">32</option>
                <option value="44">44</option>
            </select>
        </div>

        <button  id='next' className='next' onClick={ handleNext } > Avanzar </button>
    </div>
  )
}
