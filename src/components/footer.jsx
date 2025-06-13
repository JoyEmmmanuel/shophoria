import {
  FaFacebook,
  FaInstagramSquare,
  FaPinterest,
  FaTwitter,
  FaYoutube,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcApplePay,
  FaCcAmazonPay,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="px-8 md:px-20 py-10 border-t border-[#606063] bg-white text-gray-800">
      <div className="flex justify-between flex-wrap ">
        {/* Contact Section */}
        <div className="flex flex-col mb-[20px] ">
          <h4 className="text-[14px] font-bold mb-4 ">Contact</h4>
          <p className="text-[13px] mb-2">Address: AJ 132, Mainland Road Street</p>
          <p className=" text-[13px] mb-2">Phone: +234 9012367893 / +234 8098765432</p>
          <p className="text-[13px] mb-2 ">Hours: 10:00 - 18:00, Mon-Sun</p>
          <div className="mt-4">
            <h4 className="text-sm font-semibold mb-[20px]">Follow Us</h4>
            <div className="flex gap-3 text-xl">
              <FaFacebook className="hover:text-orange-500 cursor-pointer" />
              <FaInstagramSquare className="hover:text-orange-500 cursor-pointer" />
              <FaPinterest className="hover:text-orange-500 cursor-pointer" />
              <FaTwitter className="hover:text-orange-500 cursor-pointer" />
              <FaYoutube className="hover:text-orange-500 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="flex flex-col mb-[20px]">
          <h4 className="text-[14px] font-bold mb-4">About</h4>
          {["About Us", "Delivery Information", "Privacy Policy", "Terms and Conditions", "Contact Us", "Official Stores", "Cookie Notice"].map((text) => (
            <a key={text} href="#" className="text-[13px] mb-2 hover:border-b-2 border-orange-500 w-fit">
              {text  }
            </a>
          ))}
        </div>

        {/* Make Money Section */}
        <div className="flex flex-col mb-[20px] ">
          <h4 className="text-[14px] font-bold mb-4">Make Money With UV</h4>
          {[
            "Sell on UV",
            "Become a sales consultant",
            "Become a logistics services partner",
            "Join the UV DA Academy",
            "Vendor hub",
            "Join the UV KOL Academy",
          ].map((text) => (
            <a key={text} href="#" className="text-[13px] mb-2 hover:border-b-2 border-orange-500 w-fit">
              {text}
            </a>
          ))}
        </div>

        {/* My Account Section */}
        <div className="flex flex-col mb-[20px] ">
          <h4 className="text-[14px] font-bold mb-4">My Account</h4>
          {["Sign In", "View Cart", "My Wishlist", "Track My Order", "Help"].map((text) => (
            <a key={text} href="#" className="text-[13px] mb-2 hover:border-b-2 border-orange-500 w-fit">
              {text}
            </a>
          ))}
        </div>

        {/* App & Payment Section */}
        <div className="flex flex-col mb-[20px]">
          <h4 className="text-sm font-bold mb-2">Install App</h4>
          <p className="text-sm">From Appstore or Google Play</p>
          <div className="flex flex-row gap-3 mt-2">
            <a href="#">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="w-[150px] h-[50px]"
              />
            </a>
            <a href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                alt="Google Play"
                className="w-[170px] h-[50px]"
              />
            </a>
          </div>
          <h4 className="text-sm bold mt-4">Secured Payment Gateway</h4>
          <div className="flex gap-3 text-2xl mt-2">
            <FaCcVisa className="hover:text-orange-500 cursor-pointer" />
            <FaCcMastercard className="hover:text-orange-500 cursor-pointer" />
            <FaCcPaypal className="hover:text-orange-500 cursor-pointer" />
            <FaCcApplePay className="hover:text-orange-500 cursor-pointer" />
            <FaCcAmazonPay className="hover:text-orange-500 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-[16px] mt-10 border-t pt-4 border-gray-800">
        © 2025, Emmanuel Joy Chidera — E-commerce site built using React and Tailwind Css.
      </div>
    </footer>
  );
}
