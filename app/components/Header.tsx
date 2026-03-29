"use client";
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from "framer-motion";
import Image from 'next/image';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const buttons = [
    {
      buttonName: "Work",
      buttonSectionName: "work"
    },
    {
      buttonName: "About",
      buttonSectionName: "about"
    },
    {
      buttonName: "Services",
      buttonSectionName: "services"
    },
    {
      buttonName: "Contact",
      buttonSectionName: "contact"
    }
  ]

  const navVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        // Delay between each child's animation start (e.g., 0.1 seconds)
        staggerChildren: 0.1,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const charVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const websiteNameArr = ["R", "e", "e", "v", "i", "x", " ", "M", "e", "d", "i", "a"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between z-10">
          {/* Logo */}
          <div className='flex gap-3 items-center'>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, ease: "easeOut"}}
              className='w-8 h-8'
            >
              <Image
                src={"/images/icon.jpeg"}
                width={1080}
                height={1080}
                alt="REEVIX MEDIA LOGO"
                className='h-full w-full'
              />
            </motion.div>
            <motion.button
              variants={navVariants}
              initial="hidden"
              animate="visible"
              onClick={() => scrollToSection('hero')}
              className="text-lg sm:text-2xl tracking-wider text-white hover:text-white/80 transition-colors"
            >
              {websiteNameArr.map((char, idx) => {
                return (
                  <motion.span
                    key={idx}
                    variants={charVariants}
                  // className="inline-block"
                  >
                    {char}
                  </motion.span>
                )
              })}
            </motion.button>
          </div>

          {/* Desktop Navigation */}
          <motion.div
            variants={navVariants}
            initial="hidden"
            animate="visible"
            className="hidden md:flex items-center gap-8"
          >
            {/* <button
              onClick={() => scrollToSection('work')}
              className="text-white/70 hover:text-white transition-colors"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white/70 hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-white/70 hover:text-white transition-colors"
            >
              Services
            </button> */}
            {buttons.map((btn, idx) => {
              return (
                <motion.button
                  key={idx}
                  variants={buttonVariants}
                  onClick={() => scrollToSection(btn.buttonSectionName)}
                  className={btn.buttonName === "Contact"
                    ? "px-6 py-2 bg-white text-black hover:bg-white/90 transition-colors"
                    : "text-white/70 hover:text-white transition-colors"
                  }
                >
                  {btn.buttonName}
                </motion.button>
              )
            })}
            {/* <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 bg-white text-black hover:bg-white/90 transition-colors"
            >
              Contact
            </button> */}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, x: 100 }}    // Starts slightly lower and invisible
            animate={{ opacity: 1, x: 0 }}     // Slides up and fades in
            transition={{ duration: 1, delay: 1.6, ease: "easeOut" }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:hidden mt-4 pb-4 flex flex-col gap-4"
          >
            <button
              onClick={() => scrollToSection('work')}
              className="text-white/70 hover:text-white transition-colors text-left"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white/70 hover:text-white transition-colors text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-white/70 hover:text-white transition-colors text-left"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 bg-white text-black hover:bg-white/90 transition-colors text-center"
            >
              Contact
            </button>
          </motion.div>
        )}
      </nav>
    </header>
  );
}