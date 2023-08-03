import { useEffect, useId, useState } from "react";
import { CartProduct } from "./CartProduct";
import { useCart } from "../hooks/useCart.js";

export function Cart() {
  const cartCheckboxId = useId();
  const { cart, clearCart } = useCart();
  const [totalPrice, setTotal] = useState(0);

  const handleClear = () => {
    console.log("cart", cart)
    clearCart();
  };

  const formatProductName = (name) => {
    if (name.length <= 10) {
      return name;
    } else {
      return name.slice(0, 10) + "...";
    }
  };

  useEffect(() => {
    let auxPrice = 0;
    cart.forEach((product) => {
      auxPrice += product.price * product.quantity;
    });
    setTotal(auxPrice.toFixed(2));
  }, [cart]);

  return (
    <div className="absolute top-0 z-40 right-0 cart-button flex flex-col justify-center items-center bg-cyan-800 mb-10 p-2 rounded-2xl">
      <label className="" htmlFor={cartCheckboxId}>
        <div className="flex justify-center items-center bg-cyan-300 text-white rounded-full text-4xl p-4">
          <ion-icon name="cart-outline"></ion-icon>
        </div>
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <aside className="cart hidden flex-col justify-center items-center mt-4 w-80 text-white">
        <div className="overflow-y-auto">
          <div>
            {cart.length === 0 ? (
              <div>
                <p className="text-2xl">El carrito está vacío.</p>
              </div>
            ) : (
              <ul className="flex flex-col text-black">
                {cart.map((product) => (
                  <CartProduct
                    key={product.id}
                    id={product.id}
                    name={formatProductName(product.name)}
                    image={product.image}
                    quantity={product.quantity}
                    price={product.price}
                  />
                ))}
                <footer className="text-white text-xl mt-3 font-bold">{"Total "+ totalPrice + "$"}</footer>
              </ul>
            )}
          </div>
        </div>

        <button className="mt-5">
          {cart.length > 0 && (
            <div
              onClick={handleClear}
              className="flex justify-center items-center bg-red-500 text-white rounded-full text-4xl p-4"
            >
              <ion-icon name="close-circle-outline"></ion-icon>
            </div>
          )}
        </button>
      </aside>
    </div>
  );
}
