import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { products } from "../data/products"; 
import ProductCard from "./ProductCard";     

export default function FeaturedProducts() {
  const featured = products.slice(0, 8); 

  return (
    <section className="py-10 px-6 sm:px-10 md:px-20 bg-gray-50">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">
        Featured Products
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center">
        {featured.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            brand={product.brand}
            name={product.name}
            price={product.price}
            rating={product.rating} 
          />
        ))}
      </div>
    </section>
  );
}



