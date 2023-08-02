import { getPage } from "../api/products";
import { useState, useEffect } from "react";
import AuthButton from "../components/AuthButton";

export function Moda() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function page() {
      try {
        const productsList = await getPage();
        console.log(products);
        setProducts(productsList.products);
      } catch (error) {
        console.error(error);
        setProducts([]);
      }
    }
    page();

    return;
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full text-black bg-gray-100">
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-4 p-10">
        {products.map((product) => (
          <li key={product.id} className="bg-white flex flex-col justify-center items-center">
            <img
              src={product.Image_Url}
              alt={product.Name}
              className="h-[200px] md:h-[300px] lg:h-[400px] w-auto lg:w-full object-cover"
            />
            <div>
              <strong>{product.ProductName}</strong>
              <strong>{product.Price}</strong>
            </div>
            <AuthButton>Comprar</AuthButton>
          </li>
        ))}
      </ul>
    </div>
  );
}
