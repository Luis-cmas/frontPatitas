const reducer = (state, action) => {
    switch (action.type) {
        case "SET_USUARIO":
            return {
                ...state,//trae el objeto
                usuario: action.payload,
            }
        //aqui se gregan todos los casos que se necesiten de las variables    
        case "SET_EMPLEADO":
            return {
                ...state,
                empleado: action.payload,
            }
        case "SET_MASCOTA":
            return {
                ...state,
                mascota: action.payload,
            }
        case "SET_PRODUCTO":
            return {
                ...state,
                producto: action.payload,
            }
        case "SET_CITA":
            return {
                ...state,
                cita: action.payload,
            }
        case "SET_SUCURSAL":
            return {
                ...state,
                sucursal: action.payload,
            }
        
        default:
            return state;

    }

}

export default reducer;