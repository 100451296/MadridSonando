/* eslint-disable react/prop-types */
import { useCart } from "../hooks/useCart.js"

export function CartProduct({id, name, quantity, image, price}) {
    const { addToCart, removeFromCart } = useCart();

    const handleIncrementQuantity = () => {
      const product = {
        id,
        name, 
        quantity,
        image,
        price,
      }

      addToCart(product)
    }

    const handleDecreaseQuantity = () => {
      const product = {
        id,
        name, 
        quantity,
        image,
        price,
      }

      removeFromCart(product)
    }

    return(
        <li className="flex flex-col justify-center items-center bg-cyan-100 p-4 mt-8">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]
            lg:aspect-none group-hover:opacity-75 lg:h-60">
              <img
                src={image}
                alt="ProductoImg"
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
              <div>
                <strong>{name}</strong>
                <strong>{price}</strong>
              </div>

              <footer className="flex justify-center items-center space-x-3">
                <small className="text-sm">Cantidad: {quantity}</small>
                <button onClick={handleIncrementQuantity} className="flex justify-center items-center px-3 bg-gray-500 text-xl rounded-xl">
                  +
                </button>
                <button onClick={handleDecreaseQuantity} className="flex justify-center items-center px-3 bg-red-500 text-xl rounded-xl">
                  x
                </button>
              </footer>
            </li>
    )
}