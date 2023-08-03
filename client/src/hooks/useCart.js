import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw Error("useCart must be within an AuthProvider");
  }
  
  return context;
};
