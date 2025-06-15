import { useState } from "react";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";

// Image imports
import earpodwireless from "../assets/Tech/earpodwireless.jpg";
import powerbank from "../assets/Tech/powerbank.jpg";
import amazonmouse from "../assets/Tech/amazonmouse.jpg";
import phonecase1 from "../assets/Tech/phonecase1.jpg";
import applewatchseries9 from "../assets/Tech/apple-watch-series9.jpg";
import JBLspeaker from "../assets/Tech/JBL-speaker.jpg";
import cameralensprotector from "../assets/Tech/cameralens-protector.jpg";

// Static tech product list
const products = [
  { id: "smartwatch", image: applewatchseries9, brand: "Apple", name: "Reliogio Smartwatch", price: 50000 },
  { id: "mouse", image: amazonmouse, brand: "Amazon", name: "itel Mousepad", price: 10500 },
  { id: "cameralens", image: cameralensprotector, brand: "iPhone", name: "Camera lens protector", price: 14500 },
  { id: "wirelesspod", image: earpodwireless, brand: "Samsung", name: "Earpod Wireless", price: 12000 },
  { id: "spaeaker", image: JBLspeaker, brand: "Oraimo", name: "JBL Speaker", price: 12000 },
  { id: "earpiece", image: earpodwireless, brand: "iPhone", name: "Wired Earpiece", price: 3000 },
  { id: "powerbank", image: powerbank, brand: "Oraimo", name: "20,000 mAh Powerbank", price: 25000 },
  { id: "phonecase1", image: phonecase1, brand: "Shangu", name: "iPhone 11 Pro Phone Case", price: 5000 },
];

export default function TechProducts() {
  const { addToCart } = useCart();
  const [addedProductId, setAddedProductId] = useState(null);

  const handleAddToCart = (product, e) => {
    e.stopPropagation();
    e.preventDefault();
    addToCart(product);
    setAddedProductId(product.id);
    setTimeout(() => setAddedProductId(null), 1000);
  };

  return (
    <section className="px-6 md:px-20 py-14 text-center">
      <h2 className="text-3xl font-bold mb-2">
        Gadgets & <span className="text-yellow-400">Accessories</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mt-10">
        {products.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="border border-green-100 rounded-[25px] p-4 transition-shadow duration-300 hover:shadow-lg"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[250px] object-cover rounded-xl"
            />
            <div className="text-start mt-3">
              <span className="text-xs text-gray-600">{product.brand}</span>
              <h5 className="pt-1 text-sm font-semibold">{product.name}</h5>
              <div className="text-orange-500 text-xs flex space-x-1 py-1">
                {Array(5).fill().map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <div className="flex justify-between items-center mt-2">
                <h4 className="text-base font-bold">
                  ₦{product.price.toLocaleString()}
                </h4>
                <button
                  onClick={(e) => handleAddToCart(product, e)}
                  className={`text-lg px-3 py-1 rounded transition-all duration-300 ${
                    addedProductId === product.id
                      ? "bg-orange-500 text-white text-xs"
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
        className="inline-block mt-10 bg-white border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-2 rounded font-semibold transition"
      >
        See More <i className="fas fa-arrow-right ml-2"></i>
      </Link>
    </section>
  );
}
