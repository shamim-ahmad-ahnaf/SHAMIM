import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaSearch
} from "react-icons/fa";
import { Link } from "react-scroll";

const navLinks = [
  { label: "Home", to: "home", icon: <FaHome /> },
  { label: "About", to: "about", icon: <FaUser /> },
  { label: "Skills", to: "skills", icon: <FaCode /> },
  { label: "Projects", to: "projects", icon: <FaProjectDiagram /> },
  { label: "Contact", to: "contact", icon: <FaEnvelope /> },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  const handleBackdropClick = (e) => {
    if (e.target.id === "drawer-backdrop") {
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-white/80 backdrop-blur-md shadow-md border-b border-green-200"
          : "bg-transparent"
        }`}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">
        {/* Logo Section */}
        <motion.div
          className="text-green-700"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <h1 className="text-2xl md:text-3xl font-extrabold cursor-pointer">SHAMIM AHMAD</h1>
          <p className="text-xs tracking-widest text-green-600 uppercase">
           Data Entry Specialist
          </p>
        </motion.div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-10 items-center font-medium text-gray-700">
          {navLinks.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1, color: "#16a34a" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center gap-2"
            >
              <span className="text-green-600">{item.icon}</span>
              <Link
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={700}
                className="cursor-pointer transition-colors duration-300"
              >
                {item.label}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <div className="flex items-center gap-4">
          {/* Search Icon (optional) */}
          <FaSearch className="hidden md:block text-green-600 text-lg cursor-pointer" />
          <button
            className="md:hidden text-green-700 text-2xl cursor-pointer"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Drawer with Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="drawer-backdrop"
            className="fixed inset-0 z-[9999] bg-black/40 flex justify-end"
            onClick={handleBackdropClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-72 h-full bg-white p-6 relative flex flex-col justify-start gap-8"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4 }}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-green-700 text-2xl cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <FaTimes />
              </button>

              {/* Header Name */}
              <div className="text-center mt-8">
                <h2 className="text-xl font-bold text-green-700">
                  SHAMIM AHMAD 
                </h2>
                <p className="text-sm text-green-500 uppercase">Data Entry Specialist</p>
              </div>

              {/* Search Input */}


              {/* Navigation Links */}
              <div className="flex flex-col gap-6 font-semibold text-lg text-green-700 mt-4">
                {navLinks.map((item, index) => (
                  <Link
                    key={index}
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={700}
                    onClick={() => setIsOpen(false)}
                    className="cursor-pointer hover:text-green-600 flex items-center gap-3"
                  >
                    <span>{item.icon}</span>
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full border border-green-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
              {/* Social Icons */}
              <div className="mt-auto flex justify-center gap-6 pt-6 border-t border-gray-200">
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <FaFacebookF className="text-green-700 hover:text-green-500 text-xl" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <FaLinkedinIn className="text-green-700 hover:text-green-500 text-xl" />
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer">
                  <FaGithub className="text-green-700 hover:text-green-500 text-xl" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
