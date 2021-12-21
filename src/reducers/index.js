export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.precio + amount, 0);


const reducer = (state, action) => {
    switch (action.type) {
        case "SET_USUARIO":
            return {
                ...state,//trae el objeto
                usuario: action.payload,
            }
        case "SET_USUARIO_ID":
            return {
                ...state,
                id: action.payload,
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
        case "SET_CARRITO":
            return {
                ...state,
                carrito: [...state.carrito, action.payload],
            }
        case 'REMOVE_FROM_BASKET':
            // LOGIC FOR REMOVE ITEM FROM BASKET

            // We cloned the basket 
            let newBasket = [...state.carrito];

            // we check to see if product is the same id
            const index = state.carrito.findIndex((basketItem) => basketItem.id === action.payload.id);
            if (index >= 0) {
                // item exists in basket, remove it...
                newBasket.splice(index, 1);

            } else {
                console.warn(`Cant remove product (id: ${action.id}) as its not in the basket`);
            }

            return { ...state, carrito: newBasket };
        default:
            return state;

    }

}

export default reducer;