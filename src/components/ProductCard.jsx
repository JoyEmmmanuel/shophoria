// src/components/ProductCard.jsx
import { FaShoppingCart, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useCart } from "../context/useCart";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ id, image, brand, name, price, rating = 5 }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart({ id, image, brand, name, price });
    setAdded(true);
    setTimeout(() => setAdded(false), 1000);
  };

  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="w-[250px] border border-green-100 rounded-[25px] p-3 m-2 transition-shadow duration-300 hover:shadow-lg cursor-pointer">
      <Link to={`/product/${id}`}>
        <img src={image} alt={name} className="w-full h-[300px] object-cover rounded-2xl" />
      </Link>
      <div className="text-start mt-2">
        <span className="text-xs text-gray-600">{brand}</span>
        <Link to={`/product/${id}`}>
          <h5 className="pt-2 text-sm text-gray-900 hover:text-orange-500 transition">{name}</h5>
        </Link>

        <div className="text-orange-500 text-xs flex space-x-1 py-1">
          {[...Array(fullStars)].map((_, i) => <FaStar key={i} />)}
          {hasHalfStar && <FaStarHalfAlt />}
        </div>

        <div className="flex justify-between items-center">
          <h4 className="text-base font-bold">₦{price.toLocaleString()}</h4>
          <button
            onClick={handleAddToCart}
            className={`text-lg px-2 py-1 rounded transition-all duration-300 ${
              added ? "bg-orange-500 text-white text-[12px]" : "text-orange-500 hover:text-orange-600"
            }`}
          >
            {added ? "Added" : <FaShoppingCart />}
          </button>
        </div>
      </div>
    </div>
  );
}



