import PromoAd from "../components/PromoAd";
import FeaturedProducts from "../components/Featuredproducts";
import FashionAccessories from "../components/FashionAccessories";
import TechProducts from "../components/TechProducts";
import Newsletter from "../components/Newsletter";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Home({ searchTerm }) {
  const features = [
    ["Fast and Reliable Shipping", "/assets/features/fastshipping.png"],
    ["Secure Shopping Experience", "/assets/features/securelogin.png"],
    ["Smooth Online Shopping", "/assets/features/fastonlineshop.png"],
    ["Competitive Prices & Discount", "/assets/features/competitiveprice.png"],
    ["Excellent Customer Service", "/assets/features/customerservice.png"],
    ["Exclusive Deals and Offers", "/assets/features/Exclusive deals.png"],
  ];

  const filteredProducts = products.filter((product) =>
    `${product.name} ${product.brand}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // ✅ When searching, only show filtered product results
  if (searchTerm.trim() !== "") {
    return (
      <section className="px-6 md:px-20 py-10">
        <h2 className="text-2xl font-semibold mb-4">
          Search Results for "<span className="text-orange-500">{searchTerm}</span>"
        </h2>
        {filteredProducts.length > 0 ? (
          <div className="flex flex-wrap gap-4 justify-center">
            {filteredProducts.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No products found.</p>
        )}
      </section>
    );
  }

  // ✅ Default homepage layout
  return (
    <div>
      <PromoAd />

      {/* Hero Section */}
      <section
        className="h-[90vh] bg-cover bg-center px-6 md:px-20 flex items-center"
        style={{ backgroundImage: "url('/assets/hero4.png')" }}
      >
        <div className="max-w-xl space-y-4">
          <h4 className="text-[20px] font-medium">Trade-in-offer</h4>
          <h2 className="text-4xl font-bold">Discover Quality Products</h2>
          <h1 className="text-5xl font-extrabold text-orange-500">at Unbeatable Prices</h1>
          <p className="text-gray-700">
            Explore a wide selection of top-notch items across various categories.<br />
            Enjoy fast shipping, secure shopping, and excellent customer service.<br />
            <span className="text-orange-500 font-semibold">
              Shop with confidence and elevate your shopping experience today!
            </span>
          </p>
          <Link to="/shop">
            <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition">
              Shop Now
            </button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-14 px-6 md:px-20 bg-white">
        <h2 className="text-center text-3xl font-bold mb-10">Why Shop with Us?</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {features.map(([label, image], idx) => (
            <div key={idx} className="text-center p-4 shadow-md rounded hover:shadow-lg transition">
              <img src={image} alt={label} className="w-full h-20 object-contain mb-2" />
              <h6 className="text-sm font-semibold text-orange-500">{label}</h6>
            </div>
          ))}
        </div>
      </section>

      <FeaturedProducts />

      {/* Fashion Banner */}
      <section
        className="flex flex-col justify-center items-center text-center w-full h-[50vh] bg-cover bg-center bg-no-repeat px-[80px] py-[25px]"
        style={{ backgroundImage: "url('/shophoria/assets/banner/b2.jpg')" }}
      >
        <h4 className="text-white text-[18px]">Fashion Accessories Deals</h4>
        <h2 className="text-white text-[30px] py-2">
          Up to <span className="text-orange-500">70% off</span> all Fashion Accessories
        </h2>
        <Link
          to="/shop"
          className="inline-block mt-6 bg-white border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-2 rounded font-semibold transition"
        >
          Explore More <i className="fas fa-arrow-right ml-2"></i>
        </Link>
      </section>

      <FashionAccessories />

      {/* Tech Banner */}
      <section id="sm-banner" className="px-10 md:px-20 py-6">
        <div
          className="w-full h-[50vh] bg-cover bg-center rounded-md"
          style={{ backgroundImage: "url('/shophoria/assets/banner/techbanner1.png')" }}
        ></div>
      </section>

      <TechProducts />
      
<section className="px-6 md:px-20 py-14 bg-gray-50">
  <h2 className="text-center text-3xl font-bold text-gray-800 mb-10">What Our Customers Say</h2>
  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
    {[
      { name: "Jane Doe", text: "Absolutely love the service! Delivery was super fast and the product quality is amazing.", img:   "profile1.png" },
      { name: "Michael Smith", text: "Great prices and smooth checkout. Will definitely shop again!", img: "profile2.png" },
      { name: " Johnson Walker", text: "Customer service was helpful and friendly. Highly recommend!", img: "profile3.png" },
      { name: "James Allen", text: "Very satisfied with my order. The packaging was neat and secure.", img: "profile4.png" },
      { name: "Maxwell Tom", text: "Found exactly what I needed at a great price. Thank you!", img: "profile5.png" },
      { name: "Whitney Austin", text: "Easy shopping experience. The website is fast and user-friendly.", img: "profile6.png" },
    ].map((t, idx) => (
      <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
        <div className="flex items-center gap-4 mb-4">
          <img
  src={`/shophoria/assets/profile-pic/${t.img}`}
  alt={t.name}
  className="w-16 h-16 rounded-full object-cover"
/>

          <div>
            <h4 className="font-semibold text-gray-800">{t.name}</h4>
            <p className="text-sm text-orange-500">Verified Buyer</p>
          </div>
        </div>
        <p className="text-gray-700 text-sm leading-relaxed">{t.text}</p>
      </div>
    ))}
  </div>
</section>
      <Newsletter />
      <Footer />
    </div>
  );
}
