'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IconMenu2, IconX } from '@tabler/icons-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'How It Works', href: '/#how-it-works' },
    { name: 'Features', href: '/#features' },
    { name: 'About Us', href: '/about' },
    // { name: 'Who It\'s For', href: '/#who-its-for' },
    // { name: 'Comparison', href: '/#comparison' },
    { name: 'Pricing', href: '/pricing' },
   
  ];

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  };

  const mobileMenuVariants: Variants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.4,
        ease: 'easeInOut',
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen ? 'bg-card-bg bg-opacity-90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-16' : 'h-24'}`}>
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/logo/LOGO TRANSPARENT.png"
                alt="NightShield Logo"
                width={isScrolled ? 40 : 50}
                height={isScrolled ? 40 : 50}
                priority
                className="transition-all duration-300"
              />
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, i) => (
              <motion.div key={link.name} custom={i} variants={linkVariants} initial="hidden" animate="visible">
                <Link
                  href={link.href}
                  className="text-text-primary hover:text-accent transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.a
              href="#contact"
              target="_self"
              rel="noopener noreferrer"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
          </div>

          <div className="lg:hidden flex items-center">
            <button onClick={toggleMenu} className="text-text-primary focus:outline-none z-50">
              {isOpen ? <IconX size={28} /> : <IconMenu2 size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden bg-card-bg bg-opacity-95 backdrop-filter backdrop-blur-lg"
          >
            <div className="flex flex-col items-center justify-center h-screen space-y-6 -mt-16">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={toggleMenu}
                  className="text-text-primary hover:text-accent transition-colors duration-200 text-2xl"
                >
                  {link.name}
                </Link>
              ))}
              <a href="https://app.nightsheild.com" target="_blank" rel="noopener noreferrer" className="btn-primary w-max mt-4 text-xl">
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
