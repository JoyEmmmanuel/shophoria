import { Link } from "react-router-dom";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/useCart";
import { useState } from "react";

// Image Imports
import FA1 from "../assets/fashion-accesory/FA1.jpg";
import FA3 from "../assets/fashion-accesory/FA3.jpg";
import FA5 from "../assets/fashion-accesory/FA5.jpg";
import FA6 from "../assets/fashion-accesory/FA6.jpg";
import FA8 from "../assets/fashion-accesory/FA8.jpg";
import FA10 from "../assets/fashion-accesory/FA10.jpg";
import FAcomb1 from "../assets/fashion-accesory/FAcomb1.png";
import FApacker1 from "../assets/fashion-accesory/FApacker1.png";

const accessories = [
  {
    id: "FA6",
    image: FA6,
    brand: "Nike",
    name: "Baseball cap",
    price: 3000,
    rating: 5,
  },
  {
    id: "FA5",
    image: FA5,
    brand: "Sanlee",
    name: "Blue Lens glasses",
    price: 3000,
    rating: 5,
  },
  {
    id: "FA3",
    image: FA3,
    brand: "Yiwu",
    name: "Fashion blue sunglasses",
    price: 3000,
    rating: 5,
  },
  {
    id: "FA1",
    image: FA1,
    brand: "Yiwu",
    name: "Mini Banana Bag",
    price: 3000,
    rating: 5,
  },
  {
    id: "FA10",
    image: FA10,
    brand: "Fashion Jewellery",
    name: "17k MK Set Jewellery",
    price: 3500,
    rating: 4.5,
  },
  {
    id: "FApacker1",
    image: FApacker1,
    brand: "Ore's Accessories",
    name: "Mini silk scrunchies set",
    price: 3000,
    rating: 4,
  },
  {
    id: "FAcomb1",
    image: FAcomb1,
    brand: "Ore's Accessories",
    name: "Big hair clips set",
    price: 2000,
    rating: 3.5,
  },
  {
    id: "FA8",
    image: FA8,
    brand: "Yiwu Fashion Jewellery",
    name: "Stainless steel knuckle ring",
    price: 3000,
    rating: 5,
  },
];

export default function FashionAccessories() {
  const { addToCart } = useCart();
  const [addedId, setAddedId] = useState(null);

  const handleAddToCart = (item) => {
    addToCart(item);
    setAddedId(item.id);
    setTimeout(() => setAddedId(null), 1000);
  };

  return (
    <section className="px-6 md:px-20 py-14 text-center">
      <h2 className="text-3xl md:text-4xl font-bold">
        Fashion <span className="text-yellow-400">Accessories</span>
      </h2>
      <p className="text-gray-600 mt-2">Top picks for your style</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mt-10">
        {accessories.map((item) => (
          <div
            key={item.id}
            className="border border-green-100 rounded-[25px] p-4 transition-shadow duration-300 hover:shadow-lg"
          >
            <Link to={`/product/${item.id}`}>
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[250px] object-cover rounded-xl"
              />
            </Link>
            <div className="text-start mt-3">
              <span className="text-xs text-gray-600">{item.brand}</span>
              <h5 className="pt-1 text-sm font-semibold text-gray-900">
                {item.name}
              </h5>
              <div className="text-orange-500 text-xs flex space-x-1 py-1">
                {Array(Math.floor(item.rating))
                  .fill()
                  .map((_, i) => (
                    <FaStar key={i} />
                  ))}
              </div>
              <div className="flex justify-between items-center mt-2">
                <p className="text-base font-bold">
                  ₦{item.price.toLocaleString()}
                </p>
                <button
                  onClick={() => handleAddToCart(item)}
                  className={`text-lg px-3 py-1 rounded transition-all duration-300 ${
                    addedId === item.id
                      ? "bg-orange-500 text-white text-xs"
                      : "text-orange-500 hover:text-orange-600"
                  }`}
                >
                  {addedId === item.id ? "Added" : <FaShoppingCart />}
                </button>
              </div>
            </div>
          </div>
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
