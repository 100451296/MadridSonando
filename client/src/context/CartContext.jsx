/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { CartReducer, initialState } from "../reducers/CartReducer.jsx";

// 1. Crear contexto
export const CartContext = createContext();

// 2. Definir useCustomReducer
function useCartReducer() {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = (product) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });

  const removeFromCart = (product) =>
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });
  const clearCart = (product) =>
    dispatch({
      type: "CLEAR_CART",
      payload: product,
    });

  return { state, addToCart, removeFromCart, clearCart };
}

// 3. Crear provider
export const CartProvider = ({ children }) => {
  const { state, addToCart, removeFromCart, clearCart } = useCartReducer();

  return (
    <CartContext.Provider
      value={{ cart: state, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
