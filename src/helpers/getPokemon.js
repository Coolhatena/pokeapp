const getPokemon = async ( prev, cant ) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${prev}&limit=${cant}`
    const resp = await fetch( url );
    const { results } = await resp.json();

    return results;
}

export default getPokemon;