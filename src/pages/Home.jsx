import PromoAd from "../components/PromoAd";
import FeaturedProducts from "../components/Featuredproducts";
import FashionAccessories from "../components/FashionAccessories";
import TechProducts from "../components/TechProducts";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import heroImg from "../assets/hero4.png";
import fastshipping from "../assets/features/fastshipping.png";
import securelogin from "../assets/features/securelogin.png";
import fastonlineshop from "../assets/features/fastonlineshop.png";
import competitiveprice from "../assets/features/competitiveprice.png";
import customerservice from "../assets/features/customerservice.png";
import exclusiveDeals from "../assets/features/exclusiveDeals.png";
import fashionBanner from "../assets/banner/b2.jpg";
import techBanner from "../assets/banner/techbanner1.png";
import profile1 from "../assets/profile-pic/profile1.png";
import profile2 from "../assets/profile-pic/profile2.png";
import profile3 from "../assets/profile-pic/profile3.png";
import profile4 from "../assets/profile-pic/profile4.png";
import profile5 from "../assets/profile-pic/profile5.png";
import profile6 from "../assets/profile-pic/profile6.png";

export default function Home({ searchTerm }) {
  const features = [
    ["Fast and Reliable Shipping", fastshipping],
    ["Secure Shopping Experience", securelogin],
    ["Smooth Online Shopping", fastonlineshop],
    ["Competitive Prices & Discount", competitiveprice],
    ["Excellent Customer Service", customerservice],
    ["Exclusive Deals and Offers", exclusiveDeals],
  ];

  const filteredProducts = products.filter((product) =>
    `${product.name} ${product.brand}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (searchTerm.trim() !== "") {
    return (
      <section className="px-4 sm:px-6 md:px-20 py-10">
        <h2 className="text-2xl font-semibold mb-4">
          Search Results for "<span className="text-orange-500">{searchTerm}</span>"
        </h2>
        {filteredProducts.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
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

  return (
    <div>
      <PromoAd />

      {/* Hero Section */}
      <section
        className="min-h-screen bg-cover bg-center bg-no-repeat px-4 sm:px-6 md:px-20 flex items-center justify-between"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
    <div className="max-w-xl w-full space-y-4 text-left">
          <h4 className="text-md font-medium text-gray-700"> Trade-in Offer</h4>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Discover Quality Products
          </h2>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-orange-500">
            at Unbeatable Prices
          </h1>
          <p className="  text-gray-800 leading-relaxed">
            Explore a wide selection of top-notch items across various categories.
            <br />
            Enjoy fast shipping, secure shopping, and excellent customer service.
            <br />
            <span className="text-gray-800 font-semibold">
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
      <section className="py-14 px-4 sm:px-6 md:px-20 bg-white">
        <h2 className="text-center text-2xl sm:text-3xl font-bold mb-10">Why Shop with Us?</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6">
          {features.map(([label, image], idx) => (
            <div key={idx} className="text-center p-4 shadow-md rounded hover:shadow-lg transition">
              <img src={image} alt={label} loading="lazy" className="w-full h-20 object-contain mb-2" />
              <h6 className="text-sm font-semibold text-orange-500">{label}</h6>
            </div>
          ))}
        </div>
      </section>

      <FeaturedProducts />

      {/* Fashion Banner */}
      <section
        className="flex flex-col justify-center items-center text-center w-full h-[50vh] bg-cover bg-center bg-no-repeat px-4 sm:px-[80px] py-[25px]"
        style={{ backgroundImage: `url(${fashionBanner})` }}
      >
        <h4 className="text-white text-[16px] sm:text-[18px]">Fashion Accessories Deals</h4>
        <h2 className="text-white text-[24px] sm:text-[30px] py-2">
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
      <section className="px-4 sm:px-10 md:px-20 py-6">
        <div
          className="w-full h-[50vh] bg-cover bg-center rounded-md"
          style={{ backgroundImage: `url(${techBanner})` }}
        ></div>
      </section>

      <TechProducts />

      {/* Testimonials */}
      <section className="px-4 sm:px-6 md:px-20 py-14 bg-gray-50">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-800 mb-10">What Our Customers Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {[
            { name: "Jane Doe", text: "Absolutely love the service! Delivery was super fast and the product quality is amazing.", img: profile1 },
            { name: "Michael Smith", text: "Great prices and smooth checkout. Will definitely shop again!", img: profile2 },
            { name: "Johnson Walker", text: "Customer service was helpful and friendly. Highly recommend!", img: profile3 },
            { name: "James Allen", text: "Very satisfied with my order. The packaging was neat and secure.", img: profile4 },
            { name: "Maxwell Tom", text: "Found exactly what I needed at a great price. Thank you!", img: profile5 },
            { name: "Whitney Austin", text: "Easy shopping experience. The website is fast and user-friendly.", img: profile6 },
          ].map((t, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.img}
                  alt={`${t.name}'s profile picture`}
                  loading="lazy"
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


