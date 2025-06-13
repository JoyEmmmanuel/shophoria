import { useState } from "react";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";

const products = [
  { id: "smartwatch", image: "/assets/Tech/reliogio smartwatch.jpg", brand: "Apple", name: "Reliogio Smartwatch", price: 50000 },
  { id: "mouse", image: "/assets/Tech/amazonmouse.jpg", brand: "Amazon", name: "itel Mousepad", price: 10500 },
  { id: "cameralens", image: "/assets/Tech/cameralens protector.jpg", brand: "iPhone", name: "Camera lens protector", price: 14500 },
  { id: "wirelesspod", image: "/assets/Tech/earpodwireless.jpg", brand: "Samsung", name: "Earpod Wireless", price: 12000 },
  { id: "headphones", image: "/assets/Tech/headphones.jpg", brand: "Oraimo", name: "Headphone M2", price: 8000 },
  { id: "earpiece", image: "/assets/Tech/ebayearpiece.jpg", brand: "iPhone", name: "Wired Earpiece", price: 3000 },
  { id: "powerbank", image: "/assets/Tech/powerbank.jpg", brand: "Oraimo", name: "20,000 mAh Powerbank", price: 25000 },
  { id: "phonecase1", image: "/assets/Tech/phonecase1.jpg", brand: "Shangu", name: "iPhone 11 Pro Phone Case", price: 5000 },
];

export default function TechProducts() {
  const { addToCart } = useCart();
  const [addedProductId, setAddedProductId] = useState(null);

  const handleAddToCart = (product, e) => {
    e.stopPropagation(); // Prevent navigation
    e.preventDefault();  // Prevent navigation
    addToCart(product);
    setAddedProductId(product.id);
    setTimeout(() => setAddedProductId(null), 1000);
  };

  return (
    <section className="px-6 md:px-20 py-14 text-center">
      <h2 className="text-3xl font-bold mb-2">
        Gadgets & <span className="text-yellow-400">Accessories</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-8 mt-10 ">
        {products.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="w-[250px] border border-green-100 rounded-[25px] p-3 transition-shadow duration-300 hover:shadow-lg cursor-pointer"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full  h-[300px]  object-cover rounded-xl"
            />
            <div className="text-start mt-3">
              <span className="text-xs text-gray-600">{product.brand}</span>
              <h5 className="pt-2 text-sm font-semibold">{product.name}</h5>
              <div className="text-orange-500 text-xs flex space-x-1 py-1">
                {Array(5).fill().map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <div className="flex justify-between items-center">
                <h4 className="text-base font-bold">₦{product.price.toLocaleString()}</h4>
                <button
                  onClick={(e) => handleAddToCart(product, e)}
                  className={`text-lg px-2 py-1 rounded transition-all duration-300 ${
                    addedProductId === product.id
                      ? "bg-orange-500 text-white text-[12px]"
                      : "text-orange-500 hover:text-orange-600"
                  }`}
                >
                  {addedProductId === product.id ? "Added" : <FaShoppingCart />}
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Link
        to="/shop"
        className="inline-block mt-6 bg-white border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-2 rounded font-semibold transition"
      >
        See More <i className="fas fa-arrow-right ml-2"></i>
      </Link>
    </section>
  );
}

