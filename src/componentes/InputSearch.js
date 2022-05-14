import React, { useState } from 'react'

import '../css/InputSearch.css'

export const InputSearch = () => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <>
        <form onSubmit={ handleSubmit } >
        <input
            type="text"
            placeholder='Buscar Pokemon...'
            value={ inputValue }
            onChange={ handleInputChange }
        />
        </form> 
        <hr />
    </>
  )
}
