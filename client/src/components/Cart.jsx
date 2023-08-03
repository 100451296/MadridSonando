import { useId } from "react";
import { CartProduct } from "./CartProduct";
import {useCart} from "../hooks/useCart.js"

export function Cart() {
  const cartCheckboxId = useId();
  const {cart, clearCart} = useCart();

  const handleClear = () => {
    clearCart();
  }
  return (
    <div className="absolute top-0 z-40 cart-button flex flex-col justify-center items-center bg-white mb-10 p-2 rounded-2xl">
      <label className="" htmlFor={cartCheckboxId}>
        <div className="flex justify-center items-center bg-cyan-950 text-white rounded-full text-4xl p-4">
          <ion-icon name="cart-outline"></ion-icon>
        </div>
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <aside className="cart hidden flex-col justify-center items-center mt-4 w-80">
        <div className="overflow-y-auto">
          <ul className="flex flex-col text-black">
            {cart.map(product => (
                <CartProduct key={product.id} id={product.id} name={product.name} image={product.image} quantity={product.quantity} price={product.price}/>
            ))}

          </ul>
        </div>
        <button>
          <div onClick={handleClear}className="flex justify-center items-center bg-cyan-950 text-white rounded-full text-4xl p-4">
            <ion-icon name="close-circle-outline"></ion-icon>
          </div>
        </button>
      </aside>
    </div>
  );
}