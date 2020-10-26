import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showInfo } from '../../redux/actions/actions'

import './pokemonCard.css'

export const PokemonCard = ({ img, name }) => {
    const dispatch = useDispatch()
    return (
        <div class="card">
            <img src={img} class="card-img-top" alt="..." />
            <div class="card-body">
                <h3 class="card-title">{name}</h3>
                <button
                    class="btn btn-primary"
                    onClick={()=>dispatch(showInfo(name,img))}
                >
                    View Details
                    </button>
            </div>
        </div>
    )
}
