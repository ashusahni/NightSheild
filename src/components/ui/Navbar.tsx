"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const maxScroll = windowHeight * 0.8;
      
      setIsScrolled(scrollY > 20);
      
      if (scrollY <= maxScroll) {
        setScrollProgress(scrollY / maxScroll);
      } else {
        setScrollProgress(1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const navbarWidth = scrollProgress > 0 ? `${20 + (80 * (1 - scrollProgress))}%` : "100%";
  const navbarOpacity = scrollProgress > 0 ? 0.8 + (0.2 * (1 - scrollProgress)) : 1;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        width: navbarWidth,
        opacity: navbarOpacity,
      }}
      className={cn(
        "fixed top-0 left-0 z-50 transition-all duration-500 ease-out",
        isScrolled
          ? "bg-black/90 backdrop-blur-md border-b border-white/10 rounded-br-2xl"
          : "bg-transparent",
        className
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <Image
              src="/images/logo/LOGO TRANSPARENT.png"
              alt="NightShield"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <motion.span 
              className="text-xl md:text-2xl font-bold text-white"
              animate={{
                opacity: scrollProgress > 0.5 ? 0 : 1,
                scale: scrollProgress > 0.5 ? 0.8 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              Night<span className="text-cyan-500">Shield</span>
            </motion.span>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div 
            className="hidden md:flex items-center space-x-8"
            animate={{
              opacity: scrollProgress > 0.3 ? 0 : 1,
              x: scrollProgress > 0.3 ? -20 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="hidden md:flex items-center space-x-4"
            animate={{
              opacity: scrollProgress > 0.3 ? 0 : 1,
              x: scrollProgress > 0.3 ? 20 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
            >
              Register
            </motion.button>
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              onClick={() => scrollToSection("#contact")}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200"
            >
              Book a demo
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col space-y-1 p-2"
          >
            <span
              className={cn(
                "w-6 h-0.5 bg-white transition-all duration-300",
                isMobileMenuOpen && "rotate-45 translate-y-1.5"
              )}
            />
            <span
              className={cn(
                "w-6 h-0.5 bg-white transition-all duration-300",
                isMobileMenuOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "w-6 h-0.5 bg-white transition-all duration-300",
                isMobileMenuOpen && "-rotate-45 -translate-y-1.5"
              )}
            />
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10"
            >
              <div className="py-4 space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-200 font-medium px-4 py-2"
                  >
                    {item.label}
                  </motion.button>
                ))}
                <div className="border-t border-white/10 pt-4 px-4 space-y-3">
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-200 font-medium py-2"
                  >
                    Register
                  </motion.button>
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    onClick={() => scrollToSection("#contact")}
                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full font-medium transition-colors duration-200"
                  >
                    Book a demo
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

