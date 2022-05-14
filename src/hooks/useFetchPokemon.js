import { useState, useEffect } from 'react'
import getPokemon from '../helpers/getPokemon'

export const useFetchPokemon = ({prev, cant}) => {
    const [state, setState] = useState({
        data: [],
    });

    useEffect( () => {
        
      getPokemon(prev, cant)
            .then( pokes => {
                setState({
                    data: pokes,
                });
            })

    },[prev, cant])

    return state;
}
