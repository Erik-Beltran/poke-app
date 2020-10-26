import { CLOSE_POKEMON_INFO, SHOW_POKEMON_INFO } from "../actions/actionTypes";


const initialState = {
    showInfo: false,
    name: "",
    img: "",
    experience: "",
    heigth: "",
    weigth: "",
    stats:""
}

const pokemonInfoReducer = (state = initialState, action) => {

    switch (action.type) {
        case SHOW_POKEMON_INFO:
            return {
                ...state,
                showInfo: action.payload.showInfo,
                name: action.payload.name,
                img: action.payload.img,
                experience: action.payload.experience,
                heigth:action.payload.heigth,
                weigth: action.payload.weigth,
                stats: action.payload.stats
            }

        case CLOSE_POKEMON_INFO:
            return {
                ...state,
                showInfo: action.payload
            }

        default:
            return state;
    }

}

export default pokemonInfoReducer;