import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeInfo } from '../../redux/actions/actions'
import pokemonListReducer from '../../redux/reducers/pokemonList'
import './pokemonInfo.css'

export const PokemonInfo = () => {
    const dispatch = useDispatch()
    const pokemon = useSelector(store => store.pokemonInfo)
    console.log(pokemon)
    return (
        <div class="modalInfo" tabindex="10" >
            
                <div class="modalContent">
                    <div class="modal-header">
                        <h3 class="modal-title">{pokemon.name.toUpperCase()}</h3>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"
                            onClick={() => dispatch(closeInfo())}
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div className="modal-body">
                        <div className="modal-img">
                            <img src={pokemon.img} class="imgModal" alt="..."></img>
                        </div>
                        <div className="modal-texts">
                            <div className="basicInfo">
                                <h5>Basic Info</h5>
                                <p>
                                    <strong>experience:</strong> {pokemon.experience}
                                </p>
                                <p>
                                    <strong>heigth:</strong> {pokemon.heigth}
                                </p>
                                <p>
                                    <strong>weigth:</strong> {pokemon.weigth}
                                </p>
                            </div>
                            <div className="stats">
                                <h5>Sats</h5>{
                                    pokemon.stats.map(stat => (
                                        <p>
                                            <strong>{stat.stat.name}: </strong> {stat.base_stat}
                                        </p>
                                    ))
                                }
                            </div>
                        </div>

                    </div>
                    {/* <img src={pokemon.img} class="img-fluid float-left" alt="..."></img>
                    <div className="modalTexts">
                        <div className="basicInfo">
                            <h5>Basic Info</h5>
                            <p>
                                <strong>experience:</strong> {pokemon.experience}
                            </p>
                            <p>
                                <strong>heigth:</strong> {pokemon.heigth}
                            </p>
                            <p>
                                <strong>weigth:</strong> {pokemon.weigth}
                            </p>
                        </div>
                        <div className="stats">
                            <h5>Sats</h5>{
                                pokemon.stats.map(stat => (
                                    <p>
                                        <strong>{stat.stat.name}: </strong> {stat.base_stat}
                                    </p>
                                ))
                            }
                        </div>
                    </div> */}
                </div>
            
        </div>
    )
}
