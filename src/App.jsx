import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/shop";
import Cart from "./pages/cart";
import Checkout from "./pages/Checkout";
import ProductDetail from "./pages/ProductDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartContext";
import { products as sampleProducts } from "./data/products";
import { takeScreenshot } from "./utils/screenshot";
import ScreenshotButton from "./components/ScreenshotButton";
// ✅ Voice component
function VoiceScreenshot() {
  useEffect(() => {
    if (!("webkitSpeechRecognition" in window)) {
      console.warn("Speech recognition not supported in this browser.");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      const transcript = event.results[event.results.length - 1][0].transcript.trim().toLowerCase();
      console.log("Heard:", transcript);
      if (transcript.includes("take screenshot") || transcript.includes("screenshot now")) {
        takeScreenshot("voice");
      }
    };

    recognition.onerror = (err) => console.error("Speech error:", err.error);
    recognition.start();

    return () => recognition.stop();
  }, []);

  return null;
}

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const exists = localStorage.getItem("products");
    if (!exists) {
      localStorage.setItem("products", JSON.stringify(sampleProducts));
    }
  }, []);

  return (
  <CartProvider>
    <Router>
      <VoiceScreenshot />
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ScreenshotButton />
      
      <Routes>
        <Route
          path="/"
          element={<Home searchTerm={searchTerm} setSearchTerm={setSearchTerm} />}
        />
        <Route path="/shop" element={<Shop searchTerm={searchTerm} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  </CartProvider>
);

}

