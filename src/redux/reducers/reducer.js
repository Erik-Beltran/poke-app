
import {combineReducers} from 'redux'
import pokemonList from './pokemonList'
import pokemonInfo from './pokemonInfo'
const reducer= combineReducers({
    pokemonList,
    pokemonInfo
})

export default reducer;