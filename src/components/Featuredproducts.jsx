import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

// ✅ Import images
import productm1 from "../assets/product-image/productm1.jpg";
import productw1 from "../assets/product-image/productw1.jpg";
import productm2 from "../assets/product-image/productm2.jpg";
import productw2 from "../assets/product-image/productw2.jpg";
import productm3 from "../assets/product-image/productm3.jpg";
import productw7 from "../assets/product-image/productw7.jpg";
import productm4 from "../assets/product-image/productm4.jpg";
import productw4 from "../assets/product-image/productw4.jpg";

const products = [
  {
    id: "m1",
    image: productm1,
    brand: "Bonton",
    name: "Limited Bonton Joggers",
    price: 10000,
  },
  {
    id: "w1",
    image: productw1,
    brand: "Pretty Little Thing",
    name: "Hotty Pink",
    price: 10500,
  },
  {
    id: "m2",
    image: productm2,
    brand: "Advantage",
    name: "Blackline Joggers",
    price: 14500,
  },
  {
    id: "w2",
    image: productw2,
    brand: "Fashion Nova",
    name: "Gone Girl",
    price: 12000,
  },
  {
    id: "m3",
    image: productm3,
    brand: "Outline",
    name: "Double Nude Set",
    price: 13000,
  },
  {
    id: "w7",
    image: productw7,
    brand: "Jordan",
    name: "Hot Chicolate",
    price: 15000,
  },
  {
    id: "m4",
    image: productm4,
    brand: "Outline",
    name: "Double Coral Set",
    price: 10000,
  },
  {
    id: "w4",
    image: productw4,
    brand: "Nornalize",
    name: "Pink Baggy Set",
    price: 10000,
  },
];

export default function FeaturedProducts({ searchTerm }) {
  const filteredProducts = products.filter((product) =>
    `${product.name} ${product.brand}`.toLowerCase().includes((searchTerm || "").toLowerCase())
  );

  return (
    <section className="text-center px-6 md:px-20 py-[25px]">
      <h2 className="text-[38px] font-bold text-center mb-2">
        Featured <span className="text-yellow-400">Products</span>
      </h2>
      <p className="text-gray-600 mt-2 mb-8">Winter collection New Design</p>

      <div className="flex flex-wrap justify-center gap-4 pt-10">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p, i) => <ProductCard key={p.id || i} {...p} />)
        ) : (
          <p className="text-gray-500 text-lg w-full text-left">
            No products found for "{searchTerm}"
          </p>
        )}
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
