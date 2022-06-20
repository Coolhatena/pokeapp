import React, { useState } from 'react'
import { useFetchPokemon } from '../hooks/useFetchPokemon'
import { PokeCard } from './PokeCard';
import capitalizeFirst from '../helpers/capitalizeFirst';
import '../css/PokeCardGrid.css'
import { ChangePokemonButtons } from './ChangePokemonButtons';

export const PokeCardGrid = () => {
  const [cant, setCant] = useState( 22 )
  const [prev, setPrev] = useState(0);
  const { data } = useFetchPokemon({prev, cant});

  return (
      <div className='card-grid'>
          <ChangePokemonButtons 
            cant = { cant }
            prev = { prev }
            setPrev = { setPrev }
            setCant = { setCant }
          />
          { 
            data.map( pokemon => (
                <PokeCard key={ pokemon.name } name={ capitalizeFirst( pokemon.name ) } url={pokemon.url}  />
            ))
          }
      </div>
  )
}
