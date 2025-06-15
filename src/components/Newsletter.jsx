import { FaEnvelope } from "react-icons/fa";

export default function Newsletter() {
  return (
    <section id="newsletter" className="bg-black text-white py-14 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h4 className="text-[22px] font-bold mt-4">Sign up for Newsletter</h4>
        <p className="text-sm sm:text-base font-semibold text-yellow-400 mt-2">
          Get E-mail updates about our latest and{" "}
          <span className="text-orange-500">special offers</span>
        </p>

        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-3">
          {/* Input wrapper with icon */}
          <div className="relative w-full max-w-md">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              <FaEnvelope />
            </span>
            <input
              type="email"
              placeholder="Enter your email address"
              className="h-12 w-full pl-10 pr-3 text-sm rounded outline-none border border-gray-300 focus:border-orange-500"
            />
          </div>

          <button className="mt-3 sm:mt-0 bg-white text-black font-semibold px-6 py-3 rounded transition hover:bg-orange-500 hover:text-white w-full sm:w-auto">
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
}

