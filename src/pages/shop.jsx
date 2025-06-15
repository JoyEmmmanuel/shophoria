import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Footer from "../components/footer";
import { products as productData } from "../data/products";

export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productData);
  }, []);

  return (
    <>
      <section className="px-6 md:px-20 py-10">
        <h2 className="text-4xl font-bold mb-8 text-center">All Products</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {products.length === 0 ? (
            <p className="text-gray-600">No products available.</p>
          ) : (
            products.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
