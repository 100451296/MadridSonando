import { useId } from "react";

export function Cart() {
  const cartCheckboxId = useId();

  return (
    <div className="absolute top-0 z-50 cart-button flex flex-col justify-center items-center bg-white mb-10 p-2 rounded-2xl">
      <label className="" htmlFor={cartCheckboxId}>
        <div className="flex justify-center items-center bg-cyan-950 text-white rounded-full text-4xl p-4">
          <ion-icon name="cart-outline"></ion-icon>
        </div>
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <aside className="cart hidden flex-col justify-center items-center mt-4 overflow-y-auto max-h-96 w-80">
        <ul className="mb-4">
          <li className="flex flex-col justify-center items-center bg-cyan-100 p-4">
            <img
              src="https://www.bigbasket.com/media/uploads/p/l/40075537_5-fresho-onion.jpg"
              alt="ProductoImg"
            />

            <div>
              <strong>Producto</strong>
            </div>

            <footer className="flex justify-center items-center space-x-3">
              <small className="text-sm">Cantidad: 1</small>
              <button className="flex justify-center items-center px-3 bg-gray-500 text-xl rounded-xl">
                +
              </button>
            </footer>
          </li>

          <li className="flex flex-col justify-center items-center bg-cyan-100 p-4">
            <img
              src="https://www.bigbasket.com/media/uploads/p/l/40075537_5-fresho-onion.jpg"
              alt="ProductoImg"
            />

            <div>
              <strong>Producto</strong>
            </div>

            <footer className="flex justify-center items-center space-x-3">
              <small className="text-sm">Cantidad: 1</small>
              <button className="flex justify-center items-center px-3 bg-gray-500 text-xl rounded-xl">
                +
              </button>
            </footer>
          </li>

          <li className="flex flex-col justify-center items-center bg-cyan-100 p-4">
            <img
              src="https://www.bigbasket.com/media/uploads/p/l/40075537_5-fresho-onion.jpg"
              alt="ProductoImg"
            />

            <div>
              <strong>Producto</strong>
            </div>

            <footer className="flex justify-center items-center space-x-3">
              <small className="text-sm">Cantidad: 1</small>
              <button className="flex justify-center items-center px-3 bg-gray-500 text-xl rounded-xl">
                +
              </button>
            </footer>
          </li>

          <li className="flex flex-col justify-center items-center bg-cyan-100 p-4">
            <img
              src="https://www.bigbasket.com/media/uploads/p/l/40075537_5-fresho-onion.jpg"
              alt="ProductoImg"
            />

            <div>
              <strong>Producto</strong>
            </div>

            <footer className="flex justify-center items-center space-x-3">
              <small className="text-sm">Cantidad: 1</small>
              <button className="flex justify-center items-center px-3 bg-gray-500 text-xl rounded-xl">
                +
              </button>
            </footer>
          </li>

          <li className="flex flex-col justify-center items-center bg-cyan-100 p-4">
            <img
              src="https://www.bigbasket.com/media/uploads/p/l/40075537_5-fresho-onion.jpg"
              alt="ProductoImg"
            />

            <div>
              <strong>Producto</strong>
            </div>

            <footer className="flex justify-center items-center space-x-3">
              <small className="text-sm">Cantidad: 1</small>
              <button className="flex justify-center items-center px-3 bg-gray-500 text-xl rounded-xl">
                +
              </button>
            </footer>
          </li>
        </ul>
        <button>
          <div className="flex justify-center items-center bg-cyan-950 text-white rounded-full text-4xl p-4">
            <ion-icon name="close-circle-outline"></ion-icon>
          </div>
        </button>
      </aside>
    </div>
  );
}

