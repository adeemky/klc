import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import logo from "../images/logo.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/projects", label: "Nos Projets" },
    {
      label: "Nos services ↓",
      dropdown: true,
      items: [
        { href: "/services/moustiquaire", label: "Moustiquaires" },
        { href: "/services/renovation", label: "Renovation" },
        { href: "/services/platrerie", label: "Travaux de Plâtrerie" },
        { href: "/services/peinture", label: "Peinture" },
        { href: "/services/carrelage", label: "Carrelage" },
      ],
    },
  ];

  return (
    <motion.nav
      variants={fadeIn("down", 0.2, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-transparent border-none shadow-none"
          : "bg-gradient-to-br from-white via-neutral-50 to-white backdrop-blur-sm border-b border-gray-50 shadow-sm"
      }`}
    >
      <div className="w-full flex justify-between items-center container mx-auto px-4 sm:px-6 lg:px-8 md:h-20 h-16">
        {/* Logo & Brand */}
        <Link to="/">
          <div className="flex items-center gap-1 cursor-pointer opacity-80 hover:opacity-100">
            <img src={logo} width="60" />
            <h3
              style={{ color: "#1b4f33" }}
              className={`font-semibold font-ancizar text-3xl text-emerald-900 transition-all duration-500 transform ${
                isScrolled ? "-translate-x-20 opacity-0" : "translate-x-0 opacity-100"
              }`}
            >
              KLC
            </h3>
          </div>
        </Link>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, index) =>
            !link.dropdown ? (
              <Link
                key={index}
                to={link.href}
                className={`text-md font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-green-900 after:transition-all ${
                  location.pathname === link.href
                    ? "text-green-800 after:w-full"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {link.label}
              </Link>
            ) : (
              <div key={index} className="relative group">
                <span className="text-md font-medium text-gray-500 hover:text-gray-900 cursor-pointer">
                  {link.label}
                </span>
                <div className="absolute left-0 top-full mt-2 bg-white border border-gray-100 rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                  <ul className="py-2 w-48">
                    {link.items.map((item, idx) => (
                      <li key={idx}>
                        <Link
                          to={item.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          )}
        </div>
        {/* CU Button */}
        <Link
          to="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block bg-green-800 text-white px-6 py-2.5 rounded-lg hover:bg-green-900 text-md font-medium transition-all hover:shadow-lg hover:shadow-green-100"
        >
          Nous contacter
        </Link>

        <button
          className="md:hidden p-2"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
            setIsScrolled(false);
          }}
        >
          {isMenuOpen ? (
            <HiX className="h-6 w-6 text-gray-500 hover:text-red-500 transition-transform duration-500 hover:scale-105 cursor-pointer" />
          ) : (
            <HiMenu className="h-6 w-6 text-gray-500 hover:text-green-500 transition-transform duration-500 hover:scale-105 cursor-pointer" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          variants={fadeIn("down", 1.59, 0.2)}
          initial="hidden"
          animate="show"
          className="md:hidden bg-gradient-to-br from-white via-neutral-100 to-white border-t border-gray-100 py-4"
        >
          <motion.div
            variants={fadeIn("down", 1.1, 0.3)}
            initial="hidden"
            animate="show"
            className="container mx-auto px-4 space-y-4"
          >
            {navLinks.map((link, index) =>
              !link.dropdown ? (
                <motion.div
                  variants={fadeIn("right", 1.1, 0.1 * (index + 1))}
                  initial="hidden"
                  animate="show"
                  key={index}
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block text-md font-medium py-2 ${
                      location.pathname === link.href
                        ? "text-green-900"
                        : "text-gray-500 hover:text-gray-900"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ) : (
                <motion.div
                  key={index}
                  variants={fadeIn("right", 1.1, 0.1 * (index + 1))}
                  initial="hidden"
                  animate="show"
                >
                  <span className="block text-md font-semibold py-2 text-gray-700">
                    Nos services
                  </span>
                  {link.items.map((item, subIndex) => (
                    <motion.div
                      key={`${index}-${subIndex}`}
                      variants={fadeIn("right", 1.1, 0.1 * (index + subIndex + 2))}
                      initial="hidden"
                      animate="show"
                    >
                      <Link
                        to={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-sm font-medium py-1 text-gray-500 hover:text-gray-900 pl-4"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )
            )}
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full"
            >
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block text-center bg-green-800 text-white px-6 py-2.5 rounded-lg hover:bg-green-900 text-md font-medium transition-all hover:shadow-lg hover:shadow-green-100"
              >
                Nous Contacter
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
