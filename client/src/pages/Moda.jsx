import { getPage } from "../api/products";
import { useState, useEffect } from "react";
import Product from "../components/Product";

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
    <div className="flex flex-col xs:p-10 sm:p-12 lg:px-20 lg:py-17 justify-center items-center min-h-screen w-full text-black bg-gray-100 ">
      <div className="w-full p-4 bg-cyan-950 mb-10 rounded-2xl text-white text-center">
        <strong className="text-5xl">Filtros</strong>
      </div>
     
      <ul className="w-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-4">
        {products.map((product) => (
          <Product key={product.id} id={product.id} image={product.Image_Url} name={product.ProductName} price={product.Price}>
          </Product>
        ))}
      </ul>
    </div>
  );
}
