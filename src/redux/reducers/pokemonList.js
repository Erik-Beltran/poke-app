import {  GET_POKEMONES, NEXT_PAGE, PREVIOUS_PAGE,  } from "../actions/actionTypes";


const initialSatate = {
    array: [],
    offset: 0,
 
}

const pokemonListReducer=(state=initialSatate, action)=>{
    switch (action.type) {
        case GET_POKEMONES:
            return {
                ...state,
                array: action.payload
            }
        case NEXT_PAGE:
            return {
                ...state,
                array: action.payload,
                offset: state.offset + 20
            }
        case PREVIOUS_PAGE:
            return {
                ...state,
                array: action.payload,
                offset: state.offset -20
            }
        default:
            return state;
        }

}

export default pokemonListReducer;
