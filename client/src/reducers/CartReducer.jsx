export const CART_ACTIONS_TYPE = {
    ADD_TO_CART: 'ADD_TO_CART',
    CLEAR_CART: 'CLEAR_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
}

export const initialState = [];

// Recibe el estado actual y devuelve el resultante tras aplicar la accion
export const CartReducer = (state, action) => {
    const { type: actionType, payload: actionPayload} = action;
    switch(actionType) {
        case CART_ACTIONS_TYPE.ADD_TO_CART: {
            const { id } = actionPayload;
            const existingItemIndex = state.findIndex(item => item.id === id);
          
            if (existingItemIndex !== -1) {
              // Si el producto ya existe, incrementa la cantidad en 1
              const newState = state.slice();
              newState[existingItemIndex] = { ...newState[existingItemIndex], quantity: newState[existingItemIndex].quantity + 1 };
              return newState;
            } else {
              // Si el producto no existe, agrégalo al carrito con quantity igual a 1
              return [...state, { ...actionPayload, quantity: 1 }];
            }
        }

        case CART_ACTIONS_TYPE.REMOVE_FROM_CART: {
            const { id } = actionPayload;
            const existingItemIndex = state.findIndex(item => item.id === id);
          
            if (existingItemIndex !== -1) {
              // Si el producto existe en el carrito, lo eliminamos
              const newState = state.slice();
              newState.splice(existingItemIndex, 1);
              return newState;
            } else {
              // Si el producto no existe en el carrito, no hacemos nada y devolvemos el estado actual
              return state;
            }
          }
        
        case CART_ACTIONS_TYPE.CLEAR_CART: {
            return initialState;
        }
    }
}