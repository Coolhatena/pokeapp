import React, {Component} from 'react'

export default class Pokemon extends Component{
    state = {
        poke: []
    }

    async componentDidMount(){
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
        const data = await res.json();
        this.setState({poke: data})
    }

    render(){
        return (
            <div>
                <h1>Pokemons</h1>
                {
                    this.state.poke.map(poke =>{
                        return <div key={poke.name}>
                            <h2>{poke.name}</h2>
                            <h2>{poke.url}</h2>
                        </div>
                    })
                }
            </div>
        )
    }

}