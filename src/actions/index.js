export const setUsuario = payload =>({
    type : "SET_USUARIO",
    payload
})
export const setId = payload =>({
    type : "SET_USUARIO_ID",
    payload
})
export const setEmpleado = payload =>({
    type : "SET_EMPLEADO",
    payload
})
export const setCarrito = payload =>({
    type : "SET_CARRITO",
    payload
})
export const removeCarrito = payload =>({
    type : "REMOVE_FROM_BASKET",
    payload
})
export const emptyCarrito = payload =>({
    type : "EMPTY_BASKET",
    payload
})