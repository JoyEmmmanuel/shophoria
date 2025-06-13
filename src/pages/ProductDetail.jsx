// src/pages/ProductDetail.jsx
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { products } from "../data/products";
import { useCart } from "../context/useCart";

const sizes = ["S", "M", "L", "XL"];
const colors = ["#000000", "#FF0000", "#008000", "#0000FF"];

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const found = products.find((item) => item.id === id);
    setProduct(found);
    if (found) {
      const related = products.filter(
        (p) => p.id !== found.id && p.brand === found.brand
      ).slice(0, 4);
      setRelatedProducts(related);
    }
  }, [id]);

  const handleAddToCart = () => {
    addToCart({
      ...product,
      size: selectedSize,
      color: selectedColor,
      quantity,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  if (!product) {
    return <p className="p-6">Product not found.</p>;
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="flex flex-col md:flex-row gap-10">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 h-[600px] object-cover rounded-xl shadow"
        />
        <div className="md:w-1/2 space-y-5">
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <p className="text-sm text-gray-600">Brand: {product.brand}</p>
          <p className="text-xl font-semibold text-orange-500">
            ₦{product.price.toLocaleString()}
          </p>
          <p className="text-sm text-green-600">In Stock</p>

          <div>
            <p className="font-semibold mb-2">Select Color:</p>
            <div className="flex gap-3">
              {colors.map((color, i) => (
                <button
                  key={i}
                  className={`w-7 h-7 rounded-full border-2 ${
                    selectedColor === color ? "border-black" : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>

          <div>
            <p className="font-semibold mt-4 mb-2">Select Size:</p>
            <div className="flex gap-2">
              {sizes.map((s) => (
                <button
                  key={s}
                  className={`px-4 py-1 border rounded ${
                    selectedSize === s
                      ? "bg-black text-white"
                      : "border-gray-400 text-gray-800"
                  }`}
                  onClick={() => setSelectedSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <p className="font-semibold mb-2">Quantity:</p>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="border w-20 p-2 rounded"
            />
          </div>

          <button
            onClick={handleAddToCart}
            className={`mt-6 px-6 py-3 rounded text-white font-semibold transition duration-300 ${
              added ? "bg-green-600" : "bg-orange-500 hover:bg-orange-600"
            }`}
          >
            {added ? "Added to Cart!" : "Add to Cart"}
          </button>

          <div className="mt-6">
            <h3 className="text-lg font-bold mb-1">Product Description:</h3>
            <p className="text-gray-700">
              {product.description ||
                "This is a premium-quality item, perfect for everyday use or special occasions."}
            </p>
          </div>
        </div>
      </div>

      {/* Related Products */}
    {/* Related Products */}
<div className="mt-16">
  <h3 className="text-2xl font-bold mb-6 text-center">You may also like</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {relatedProducts.map((item) => (
      <Link
        to={`/product/${item.id}`}
        key={item.id}
        className="border rounded-2xl overflow-hidden shadow hover:shadow-md transition duration-300"
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-[230px] object-cover"
        />
        <div className="p-4 text-left">
          <p className="font-semibold text-gray-800 text-sm">{item.name}</p>
          <p className="text-xs text-gray-500 mt-1">{item.brand}</p>
          <p className="text-orange-500 font-bold text-sm mt-2">
            ₦{item.price.toLocaleString()}
          </p>
        </div>
      </Link>
    ))}
  </div>
</div>

    </div>
  );
}
