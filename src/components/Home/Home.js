import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nextPage, PreviousPage } from '../../redux/actions/actions'
import { PokemonCard } from '../PokemonCard/PokemonCard'
import { PokemonInfo } from '../PokemonInfo/PokemonInfo'

import './home.css'

const Pokemones = () => {
    const dispatch = useDispatch()

    const pokemones = useSelector(store => store.pokemonList.array)
    console.log("list", pokemones)
    const showModal = useSelector(store => store.pokemonInfo.showInfo)
    console.log("modal", showModal)

    return (
        <div className="container">
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" alt="logo-pokemon"></img>
            <h1 class="display-4 font-weight-normal title">PokeApp</h1>
            <div class="row">
                {pokemones.map((pokemon, index) => {
                    let url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork"
                    let pokeIndex = pokemon.url.split("/")[6]
                    console.log(pokeIndex)

                    return <PokemonCard
                        img={`${url}/${pokeIndex}.png?raw=true`}
                        name={pokemon.name}
                    />
                })
                }
            </div>
            <div className="buttons">
                <button
                    type="button"
                    class="btn btn-success"
                    onClick={() => dispatch(PreviousPage())}>
                    {`<< Previous Page`}
                </button>
                <button
                    type="button"
                    class="btn btn-success"
                    onClick={() => dispatch(nextPage())}>
                    {`Next Page >>`}
                </button>
            </div>
            {
                showModal &&
                <PokemonInfo />
            }

        </div >
    )
}

export default Pokemones

