import { Link } from "react-router-dom";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { useCart } from "../context/useCart";
import { useState } from "react";

export default function ProductCard({ id, image, brand, name, price }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    addToCart({ id, image, brand, name, price });
    setAdded(true);
    setTimeout(() => setAdded(false), 1000);
  };

  return (
    <Link
      to={`/product/${id}`}
      className="w-[250px] border border-green-100 rounded-[25px] p-3 transition-shadow duration-300 hover:shadow-lg"
    >
      <img src={image} alt={name} className="w-full h-[300px] object-cover rounded-xl" />
      <div className="text-start mt-3">
        <span className="text-xs text-gray-600">{brand}</span>
        <h5 className="pt-2 text-sm font-semibold">{name}</h5>
        <div className="text-orange-500 text-xs flex space-x-1 py-1">
          {Array(5).fill().map((_, i) => <FaStar key={i} />)}
        </div>
        <div className="flex justify-between items-center">
          <p className="text-base font-bold">₦{price.toLocaleString()}</p>
          <button
            onClick={handleAdd}
            className={`text-lg px-2 py-1 rounded transition-all duration-300 ${
              added
                ? "bg-orange-500 text-white text-sm"
                : "text-orange-500 hover:text-orange-600"
            }`}
          >
            {added ? "Added" : <FaShoppingCart />}
          </button>
        </div>
      </div>
    </Link>
  );
}
