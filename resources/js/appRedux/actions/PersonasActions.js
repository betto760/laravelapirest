import { MOSTRAR_PERSONAS, AGREGAR_PERSONA, MOSTRAR_PERSONA, OBTENER_PERSONA, EDITAR_PERSONA, ELIMINAR_PERSONA, BUSCAR_PERSONA } from "../../constants/PersonasTypes";
import Api from "../../util/Api";

export const mostrarPersonas = (pagina) => async (dispatch) => {
    const respuesta = await Api.get('/personas' + '?page=' + pagina);
    dispatch({
        type: MOSTRAR_PERSONAS,
        payload: respuesta.data,
    });
}

export const agregarPersona = (persona) => async (dispatch) => {
    const respuesta = await Api.post('/personas', persona);
    dispatch({
        type: AGREGAR_PERSONA,
        payload: respuesta.data,
    });
}

export const showPersona = (id) => async (dispatch) => {
    const respuesta = await Api.get('/personas/' + id);
    dispatch({
        type: MOSTRAR_PERSONA,
        payload: respuesta.data,
    });
}

export const obtenerPersona = (id) =>async (dispatch) => {
    const respuesta = await Api.get('/personas/' + id + '/edit');
    dispatch({
        type: OBTENER_PERSONA,
        payload: respuesta.data,
    });
}

export const actualizarPersona = (persona) => async (dispatch) => {
    const respuesta = await Api.put('/personas/' + persona.id, persona);
    dispatch({
        type: EDITAR_PERSONA,
        payload: respuesta.data,
    });
}

export const eliminarPersona = (id) => async (dispatch) => {
    await Api.delete('/personas/' + id);
    dispatch({
        type: ELIMINAR_PERSONA,
        payload: id,
    });
}

export const buscarPersona = (value) => async (dispatch) => {
    const respuesta = await Api.get('personas/' + value);
    dispatch({
        type: BUSCAR_PERSONA,
        payload: respuesta.data,
    });
}
