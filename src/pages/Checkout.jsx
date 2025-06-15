import { useState } from "react";
import { useCart } from "../context/useCart";
import { Link } from "react-router-dom";
import Footer from "../components/footer";

export default function Checkout() {
  const { cartItems } = useCart();
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
  };

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-orange-500">
          Checkout
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Shipping Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white border rounded-lg shadow-sm p-6 space-y-4"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Shipping Information
            </h3>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
            <textarea
              name="address"
              placeholder="Shipping Address"
              value={form.address}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
              rows="3"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition font-semibold"
            >
              Place Order
            </button>
          </form>

          {/* Order Summary */}
          <div className="bg-gray-50 border rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Order Summary
            </h3>
            <ul className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center py-3 text-sm sm:text-base"
                >
                  <span className="text-gray-700">
                    {item.name} × {item.quantity}
                  </span>
                  <span className="font-semibold text-gray-800">
                    ₦{(item.price * item.quantity).toLocaleString()}
                  </span>
                </li>
              ))}
            </ul>
            <div className="border-t mt-4 pt-4 flex justify-between font-bold text-lg text-gray-800">
              <span>Total:</span>
              <span>₦{totalAmount.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/"
            className="text-orange-500 hover:underline text-base sm:text-lg"
          >
            ← Back to Home
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
