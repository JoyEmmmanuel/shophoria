// src/components/Navbar.jsx
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaUser, FaChevronDown, FaChevronUp, FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useCart } from "../context/useCart";
import logo from "../assets/logo.png";

export default function Navbar({ searchTerm, setSearchTerm }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const { cartCount } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef();
  const menuRef = useRef();

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  const closeMenus = (e) => {
    if (!dropdownRef.current?.contains(e.target)) {
      setDropdownOpen(null);
    }
    if (!menuRef.current?.contains(e.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeMenus);
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => document.removeEventListener("mousedown", closeMenus);
  }, [menuOpen]);

  return (
    <header className="bg-white sticky top-0 z-50 shadow px-4 md:px-[50px]">
      <div className="flex items-center justify-between h-[80px] max-w-full">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Shophoria Logo" className="h-10 w-auto" />
        </Link>

        {/* Search Bar (desktop) */}
        <div className="hidden sm:flex flex-grow items-center justify-center px-4">
          <input
            type="text"
            placeholder="Search products, brands and categories"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              if (location.pathname !== "/shop") navigate("/shop");
            }}
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg outline-none focus:border-orange-500"
          />
          <button className="ml-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg">
            <FaSearch />
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 font-semibold text-gray-800">
          <li><Link to="/" className="hover:text-orange-500">Home</Link></li>
          <li><Link to="/shop" className="hover:text-orange-500">Shop</Link></li>

          {/* Account Dropdown */}
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => toggleDropdown("account")}
              className="flex items-center gap-1 hover:text-orange-500"
            >
              <FaUser /> Account {dropdownOpen === "account" ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {dropdownOpen === "account" && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-md border rounded-md p-3 z-50">
                <Link to="/signin" className="block py-1 hover:text-orange-500">Sign-In</Link>
                <Link to="/profile" className="block py-1 hover:text-orange-500">My Profile</Link>
                <Link to="/orders" className="block py-1 hover:text-orange-500">Orders</Link>
                <Link to="/saved" className="block py-1 hover:text-orange-500">Saved Items</Link>
                <Link to="/logout" className="block py-1 hover:text-orange-500">Log Out</Link>
              </div>
            )}
          </li>

          {/* Help Dropdown */}
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => toggleDropdown("help")}
              className="flex items-center gap-1 hover:text-orange-500"
            >
              Help {dropdownOpen === "help" ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {dropdownOpen === "help" && (
              <div className="absolute right-0 mt-2 w-52 bg-white shadow-md border rounded-md p-3 z-50">
                <Link to="/payment" className="block py-1 hover:text-orange-500">Payment Options</Link>
                <Link to="/help-center" className="block py-1 hover:text-orange-500">Help Center</Link>
                <Link to="/faq" className="block py-1 hover:text-orange-500">Cancel an Order</Link>
                <Link to="/track" className="block py-1 hover:text-orange-500">Track Order</Link>
                <Link to="/support" className="block py-1 hover:text-orange-500">Returns & Refunds</Link>
              </div>
            )}
          </li>

          {/* Cart */}
          <li className="relative">
            <Link to="/cart" className="flex items-center gap-1 hover:text-orange-500">
              <FaShoppingCart className="text-xl" /> Cart
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                  {cartCount}
                </span>
              )}
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-xl z-50" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Search Bar (mobile) */}
      <div className="sm:hidden px-4 pb-2">
        <input
          type="text"
          placeholder="Search products"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            if (location.pathname !== "/shop") navigate("/shop");
          }}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:border-orange-500"
        />
      </div>

      {/* Mobile Slide-in Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="p-6 space-y-4">
          <Link to="/" onClick={() => setMenuOpen(false)} className="block font-medium">Home</Link>
          <Link to="/shop" onClick={() => setMenuOpen(false)} className="block font-medium">Shop</Link>
          <Link to="/cart" onClick={() => setMenuOpen(false)} className="block font-medium">Cart</Link>
          <Link to="/signin" onClick={() => setMenuOpen(false)} className="block font-medium">Sign In</Link>
          <Link to="/help-center" onClick={() => setMenuOpen(false)} className="block font-medium">Help Center</Link>
        </div>
      </div>
    </header>
  );
}

