// src/pages/Cart.jsx
import { useCart } from "../context/useCart";
import Footer from "../components/footer";
export default function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      <div className="p-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">{item.name}</h4>
                    <p className="text-sm text-gray-600">
                      Quantity: {item.quantity}
                    </p>
                    <p className="text-sm text-gray-600">
                      ₦{item.price.toLocaleString()} each
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-bold">
                    ₦{(item.price * item.quantity).toLocaleString()}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-800 hover:underline text-sm mt-2"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="mt-8 border-t pt-4 flex flex-col md:flex-row justify-between items-center gap-4">
  <h3 className="text-2xl font-bold">
    Total: ₦{total.toLocaleString()}
  </h3>
  <div className="flex gap-3">
    <button
      onClick={clearCart}
      className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 text-[16px]"
    >
      Clear Cart
    </button>
    <a
      href="/checkout"
      className="bg-orange-500 text-white  text-[16px] px-5 py-2 rounded hover:bg-orange-600 "
    >
      Proceed to Checkout
    </a>
  </div>
</div>

          </div>
        )}
      </div>


      <Footer />
    </>
  );
}
