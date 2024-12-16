import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-white sticky top-0 z-50 shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        {/* Logo Section */}
        <h1 className="text-2xl font-bold">
          <Link to="/" className="hover:text-yellow-300 transition">
            Aditya.
          </Link>
        </h1>

        {/* Hamburger Menu for Mobile */}
        <button
          className="lg:hidden text-white text-3xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-6 text-lg">
          <li>
            <Link to="/" className="hover:text-yellow-300 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-yellow-300 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="hover:text-yellow-300 transition">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-300 transition">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="lg:hidden flex flex-col bg-gray-900 text-center py-4 space-y-4 text-lg">
          <li>
            <Link
              to="/"
              className="hover:text-yellow-300 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-yellow-300 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className="hover:text-yellow-300 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-yellow-300 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
