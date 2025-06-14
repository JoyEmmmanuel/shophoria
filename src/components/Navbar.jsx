// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";
import {
  FaUser,
  FaChevronDown,
  FaChevronUp,
  FaSearch,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar({ searchTerm, setSearchTerm }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
const { cartCount } = useCart();
  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };
const navigate = useNavigate();
const location = useLocation();
  return (
  <header className="bg-white sticky top-0 z-50 shadow px-[50px]  ">
       <div className="max-w-[100%] mx-auto flex items-center justify-between h-[80px] md:px-6 lg:px-10">
        {/* Logo */}
       <Link to="/" className="flex items-center pr-2">
  <img src= {logo} alt="Shophoria Logo" className="h-10 w-auto"  />
</Link>
        {/* Search Bar */}
        <div className="flex flex-grow items-center justify-between mx-2">
          <input
            type="text"
            placeholder="Search products, brands and categories"
            value={searchTerm}
            onChange={(e) => {
  setSearchTerm(e.target.value);
  if (location.pathname !== "/shop") navigate("/shop");
}}

            className="w-full min-w-[400px] px-4 py-2 mr-2 border border-gray-300 rounded-lg outline-none focus:border-orange-500"
            
          />
          <button className=" mr-6 px-[13px] py-[12px] bg-orange-500 hover:bg-orange-600 text-white rounded-xl transition duration-200">
            <FaSearch />
          </button>
          
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 items-center font-medium text-gray-800">
          <li><Link to="/" className="hover:text-orange-500 transition font-bold">Home</Link></li>
 <li><Link to="/shop" className="hover:text-orange-500 transition font-bold">Shop</Link></li>
          {/* Account Dropdown */}
          <li className="relative">
            <button
              onClick={() => toggleDropdown("account")}
              className="flex items-center gap-1 hover:text-orange-500 transition font-bold"
            >
              <FaUser /> Account {dropdownOpen === "account" ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {dropdownOpen === "account" && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-md border rounded-md p-3 z-10 animate-fade font-bold">
                <Link to="/signin" className="block py-1 hover:text-orange-500">Sign-In</Link>
                <Link to="/profile" className="block py-1 hover:text-orange-500">My Profile</Link>
                <Link to="/orders" className="block py-1 hover:text-orange-500">Orders</Link>
                <Link to="/saved" className="block py-1 hover:text-orange-500">Saved Items</Link>
                <Link to="/logout" className="block py-1 hover:text-orange-500">Log Out</Link>
              </div>
            )}
          </li>

          {/* Help Dropdown */}
          <li className="relative">
            <button
              onClick={() => toggleDropdown("help")}
              className="flex items-center gap-1 hover:text-orange-500 transition font-bold"
            >
              Help {dropdownOpen === "help" ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {dropdownOpen === "help" && (
              <div className="absolute right-0 mt-2 w-52 bg-white shadow-md border rounded-md p-3 z-10 animate-fade">
                <Link to="/payment" className="block py-1 hover:text-orange-500">Payment Options</Link>
                <Link to="/help-center" className="block py-1 hover:text-orange-500">Help Center</Link>
                <Link to="/faq" className="block py-1 hover:text-orange-500">Cancel an Order</Link>
                <Link to="/track" className="block py-1 hover:text-orange-500">Track Order</Link>
                <Link to="/support" className="block py-1 hover:text-orange-500">Returns & Refunds</Link>
              </div>
            )}
          </li>

          <li className="relative">
  <Link to="/cart" className="flex items-center gap-1 hover:text-orange-500 transition font-bold">
    <FaShoppingCart className="text-xl" />
    Cart
    {cartCount > 0 && (
      <span className="absolute -top-2 -right-3 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
        {cartCount}
      </span>
    )}
  </Link>
</li>

        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-100 px-6 pb-4 space-y-2 animate-fade">
          <Link to="/" className="block py-1">Home</Link>
          <Link to="/cart" className="block py-1">Cart</Link>
          <Link to="/signin" className="block py-1">Sign In</Link>
          <Link to="/help-center" className="block py-1">Help Center</Link>
        </div>
      )}
      
    </header>
  );
}

