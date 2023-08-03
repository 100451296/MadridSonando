import { getPage } from "../api/products";
import { useState, useEffect } from "react";
import Product from "../components/Product";
import { Cart } from "../components/Cart";

export function Moda() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const fetchData = async function () {
    setIsLoading(true);
    setError(null);

    try {
      const response = await getPage(page);
      const data = await response.products;

      setItems((prevItems) => [...prevItems, ...data]);
      setPage((prevPage) => prevPage + 1);
    } catch (err) {
      //console.error(err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleScroll = () => {
    // Verifica si no ha llegado al final de la pagina o esta cargando
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
      return;
    }
    fetchData();
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col xs:p-10 sm:p-12 lg:px-20 lg:py-17 justify-center items-center min-h-screen w-full text-black bg-gray-100 ">
      <div className="relative w-full p-4 bg-cyan-950 mb-10 rounded-2xl text-white text-center">
        <strong className="text-5xl">Filtros</strong>
        <Cart></Cart>
      </div>

      <ul className="w-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-4">
        {items.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            image={product.Image_Url}
            name={product.ProductName}
            price={product.Price}
          ></Product>
        ))}
      </ul>
    </div>
  );
}
