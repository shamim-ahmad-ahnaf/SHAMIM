import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
    exit: { x: "100%", transition: { ease: "easeInOut", duration: 0.3 } },
  };

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-green-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">
        {/* Logo */}
        <a
          href="#home"
          className="text-3xl font-extrabold text-green-700 tracking-wide select-none"
          aria-label="Shamim Ahmad Ahanaf Logo"
        >
          ShamimAhanaf
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-12 text-lg font-medium text-gray-700">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="relative group px-2 py-1 hover:text-green-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {label}
                <motion.span
                  className="absolute left-0 bottom-0 w-full h-0.5 bg-green-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform"
                  layoutId="underline"
                  initial={false}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-3xl text-green-700 focus:outline-none"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 right-0 w-64 h-full bg-white shadow-xl z-50 flex flex-col p-8"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <nav className="flex flex-col space-y-8 font-semibold text-gray-800 text-xl">
              {navLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-green-600 transition-colors"
                >
                  {label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
