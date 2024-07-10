import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/actions";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Shopping Cart</h1>
      <ul className="space-y-4">
        {cart.map((product) => (
          <li key={product.id} className="flex items-center bg-white p-4 rounded-lg shadow-lg">
            <img src={product.img} className="w-24 h-24 rounded-lg mr-4 object-cover" alt={product.name} />
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
              <div className="flex items-center mt-2">
                <button
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition duration-200 ease-in-out"
                  onClick={() => handleIncrementQuantity(product.id)}
                >
                  +
                </button>
                <span className="text-lg mx-4">{product.quantity}</span>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-200 ease-in-out"
                  onClick={() => handleDecrementQuantity(product.id)}
                >
                  -
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg ml-4 transition duration-200 ease-in-out"
                  onClick={() => handleRemoveFromCart(product.id)}
                >
                  O'chirish
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {cart.length === 0 && <p className="text-center text-gray-500 mt-8">hozircha hech narsa yo'q.</p>}
    </div>
  );
};

export default Cart;
