import axios from 'axios'
import { GET_POKEMONES, NEXT_PAGE,PREVIOUS_PAGE, SHOW_POKEMON_INFO } from './actionTypes'

export const getPokemones = () => async (dispatch) => {

    try {
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")
        dispatch({
            type: GET_POKEMONES,
            payload: res.data.results
        })
    } catch (error) {
        console.log(error)
    }

}

export const nextPage = () => async (dispatch, getState) => {
    const offset = getState().pokemonList.offset + 20
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)

        dispatch({
            type: NEXT_PAGE,
            payload: res.data.results
        })
    } catch (error) {
        console.log(error)
    }
}
export const PreviousPage = () => async (dispatch, getState) => {
    const offset = getState().pokemonList.offset - 20
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)

        dispatch({
            type: PREVIOUS_PAGE,
            payload: res.data.results
        })
    } catch (error) {
        console.log(error)
    }
}

export const showInfo = ( name, img) => async (dispatch) => {

    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        console.log(res.data)
        dispatch({
            type: SHOW_POKEMON_INFO,
            payload: {
                showInfo: true,
                name,
                img,
                experience:res.data.base_experience,
                heigth:res.data.height,
                weigth: res.data.weight,
                stats:res.data.stats
            }
        })

    } catch (error) {
        console.log(error)
    }

}
export const closeInfo = () => {
    return {
        type: SHOW_POKEMON_INFO,
        payload: false
    }
}