import { MOSTRAR_PERSONAS, AGREGAR_PERSONA, MOSTRAR_PERSONA, OBTENER_PERSONA, EDITAR_PERSONA, ELIMINAR_PERSONA, BUSCAR_PERSONA } from "../../constants/PersonasTypes";

const initialState = {
    personas: [],
    pagination: {},
    showPersonaDatos: [],
    obtenerPersonaDatos: [],
    buscarPersona: [],
}

export default function(state = initialState, action){
    switch (action.type) {
        case MOSTRAR_PERSONAS:
            return {
                ...state,
                personas: action.payload.data,
                pagination: action.payload.pagination,
            }
        case AGREGAR_PERSONA:
            return {
                ...state,
                personas: [...state.personas, action.payload],
            }
        case MOSTRAR_PERSONA:
            return {
                ...state,
                showPersonaDatos: action.payload.data,
            }
        case OBTENER_PERSONA:
            return {
                ...state,
                obtenerPersonaDatos: action.payload.data,
            }
        case EDITAR_PERSONA:
            return {
                ...state,
                personas: state.personas.map(
                    persona => persona.id === action.payload.id ? (persona = action.payload) : persona
                )
            }
        case ELIMINAR_PERSONA:
            return {
                ...state,
                personas: state.personas.filter(persona => persona.id !== action.payload)
            }
        case BUSCAR_PERSONA:
            return {
                ...state,
                buscarPersona: action.payload.data,
                pagination: action.payload.pagination,
            }
        default:
            return state;
    }
}

