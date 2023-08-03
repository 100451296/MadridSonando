/* eslint-disable react/prop-types */
import AuthButton from "./AuthButton";
import { useCart } from "../hooks/useCart.js";

function Product({ id, image, name, price }) {
  const {addToCart} = useCart();

  const handleAddCart = () => {
    console.log("click")
    const product = {
      id,
      image,
      name,
      price
    }
    addToCart(product);
  }
  return (
    <li
      key={id}
      className="group relative xs:p-5 lg:p-5 bg-cyan-900 text-white flex flex-col justify-center 
        items-center rounded-2xl shadow-2xl shadow-gray-500/50 "
    >
      <div
        className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]
            lg:aspect-none group-hover:opacity-75 lg:h-80"
      >
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>

      <div className="flex flex-col text-center items-center mt-4">
        <strong className="text-xl">{name}</strong>
        <strong className="text-2xl">{price + "$"}</strong>
      </div>
      <AuthButton onClick={handleAddCart}>Añadir al carrito</AuthButton>
    </li>
  );
}

export default Product;
