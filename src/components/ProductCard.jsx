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

  const safeRating = isNaN(rating) ? 5 : rating;
  const fullStars = Math.floor(safeRating);
  const hasHalfStar = safeRating % 1 !== 0;

  return (
    <div className="w-full sm:w-[48%] md:w-[31%] lg:w-[23%] xl:w-[250px] border border-green-100 rounded-[25px] p-3 m-1 sm:m-2 transition-shadow duration-300 hover:shadow-lg cursor-pointer flex flex-col">
      <Link to={`/product/${id}`} className="block">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-[220px] sm:h-[240px] md:h-[260px] lg:h-[280px] object-cover rounded-2xl"
        />
      </Link>

      <div className="text-start mt-2 flex-1 flex flex-col justify-between">
        <span className="text-xs sm:text-sm text-gray-600">{brand}</span>

        <Link to={`/product/${id}`}>
          <h5 className="pt-2 text-sm sm:text-base text-gray-900 hover:text-orange-500 transition">
            {name}
          </h5>
        </Link>

        <div className="text-orange-500 text-xs flex space-x-1 py-1">
          {[...Array(fullStars)].map((_, i) => (
            <FaStar key={i} />
          ))}
          {hasHalfStar && <FaStarHalfAlt />}
        </div>

        <div className="flex justify-between items-center mt-1">
          <h4 className="text-sm sm:text-base font-bold">₦{price.toLocaleString()}</h4>
          <button
            onClick={handleAddToCart}
            aria-label="Add to cart"
            className={`text-sm sm:text-base px-2 py-1 rounded transition-all duration-300 ${
              added
                ? "bg-orange-500 text-white text-[12px]"
                : "text-orange-500 hover:text-orange-600"
            }`}
          >
            {added ? "Added" : <FaShoppingCart />}
          </button>
        </div>
      </div>
    </div>
  );
}
