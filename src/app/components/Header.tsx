"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();

  // Framer Motion scroll tracking
  const { scrollY } = useScroll();

  /**
   * Smart Scroll Logic: 
   * If current scroll is greater than previous AND scrolled more than 150px, hide.
   * If current scroll is less than previous, show.
   */
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const toggleMenu = () => setIsOpen(!isOpen);

  const isLightPage = pathname.toLowerCase().includes("spenditure") 
  || pathname.toLowerCase().includes("nithub-forms") 
  || pathname.toLowerCase().includes("transtura") 
  || pathname.toLowerCase() === "/about";

  const navLinks = [
    { name: "Resume", href: "/Resume" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Resources", href: "/resources" },
    { name: "Playground", href: "/playground" },
  ];

  const textColor = isLightPage ? "text-gray-600" : "text-gray-400";
  const activeTextColor = isLightPage ? "text-black" : "text-white";
  const logoTextColor = isLightPage ? "text-black" : "text-white";
  const contactBtnBg = isLightPage ? "bg-[#1a1a1a]" : "bg-[#782E14]";

  return (
    <motion.header 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`w-[95%] mx-auto font-space fixed top-0 left-0 right-0 z-[100] flex justify-between px-6 md:px-16 items-center py-6 transition-colors duration-300 ${
        isLightPage ? "bg-white/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <h1 
        className={`border-b-[3px] border-[#FF4C00] inline-block sm:text-md lg:text-2xl font-bold transition-colors duration-300 ${logoTextColor}`}
      >
        <Link href="/">Arby</Link>
      </h1>

      <nav className="hidden md:block">
        <ul className="flex gap-10 text-sm">
          {navLinks.map((link) => {
            const isActive = pathname.toLowerCase() === link.href.toLowerCase();

            return (
              <li
                key={link.name}
                className="relative flex flex-col items-center"
              > 
                <Link
                  href={link.href}
                  className={`transition-colors duration-300 font-medium ${
                    isActive 
                      ? "text-[#FF4C00]" 
                      : `${textColor} hover:${activeTextColor}`
                  }`}
                >
                  {link.name}
                </Link>
                {isActive && (
                  <motion.span
                    layoutId="activeDot"
                    className="absolute -bottom-3 w-1.5 h-1.5 bg-[#FF4C00] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        <a
          href="mailto:arby.jegede@gmail.com"
          className={`hidden sm:block shadow-md text-white py-3 px-8 rounded-full hover:shadow-neon transition-all duration-300 ${contactBtnBg}`}
        >
          Contact me
        </a>

        <button
          onClick={toggleMenu}
          className={`md:hidden p-2 z-[60] transition-colors ${isLightPage && !isOpen ? "text-black" : "text-white"}`}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[50]"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[70%] bg-[#151515] border-l border-white/10 p-10 pt-32 z-[55] shadow-2xl"
            >
              <ul className="flex flex-col gap-8 text-2xl text-gray-300">
                {navLinks.map((link) => {
                  const isActive = pathname.toLowerCase() === link.href.toLowerCase();

                  return (
                    <li
                      key={link.name}
                      className="relative flex items-center gap-4"
                    >
                      <Link
                        href={link.href}
                        onClick={toggleMenu}
                        className={`transition-colors duration-300 ${
                          isActive ? "text-[#FF4C00]" : "hover:text-white"
                        }`}
                      >
                        {link.name}
                      </Link>

                      {isActive && (
                        <motion.span
                          layoutId="activeDotMobile"
                          className="w-2 h-2 bg-[#FF4C00] rounded-full"
                        />
                      )}
                    </li>
                  );
                })}
                <li className="pt-4">
                  <a
                    href="mailto:arby.jegede@gmail.com"
                    className="text-[#FF4C00] font-bold text-xl"
                    onClick={toggleMenu}
                  >
                    Contact me
                  </a>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;