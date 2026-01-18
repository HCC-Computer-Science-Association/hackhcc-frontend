"use client";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems = [
    { label: "ABOUT", href: "#about", hasDropdown: false },
    { label: "LOCATION", href: "#location", hasDropdown: false },
    { label: "SCHEDULE", href: "#schedule", hasDropdown: false },
    { label: "PRIZES", href: "#prizes", hasDropdown: false },
    { label: "SPONSORS", href: "#sponsors", hasDropdown: false },
    { label: "TEAM", href: "#team", hasDropdown: false },
    { label: "FAQ", href: "#faq", hasDropdown: false },
  ];

  const scrollToSection = (href: string) => {
    setIsMobileOpen(false);
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 pb-8 z-50 bg-gradient-to-b from-black/65 to-transparent pointer-events-none">
      {/* Desktop Navigation */}
      <nav
        className="hidden md:block pointer-events-auto relative mt-8 w-fit mx-auto bg-black/60 border-2 border-cp-yellow/30 before:content-[''] after:content-['']
            after:absolute
            after:z-[-99]
            after:bottom-0
            after:right-[-1px]
            after:border-b-[20px]
            after:border-b-[#fcee0a]
            after:border-l-[20px]
            after:border-l-transparent
            before:absolute
            before:top-0
            before:left-[-1px]
            before:border-t-[18px]
            before:border-t-[#fcee0a]
            before:border-r-[18px]
            before:border-r-transparent
            [clip-path:polygon(18px_0,100%_0,100%_48px,calc(100%-20px)_100%,0_100%,0_18px)]"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center h-16 gap-1 mx-2">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative group cursor-pointer h-full"
                onMouseEnter={() =>
                  item.hasDropdown && setActiveDropdown(item.label)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center h-full gap-1 px-6 text-white/90 hover:text-neon-yellow transition-all duration-300 hover:bg-dark-bg/50 border-r border-white/10 last:border-r-0 relative group"
                >
                  <span className="tracking-wide font-['interceptor']">{item.label}</span>
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </a>
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden pointer-events-auto flex justify-start p-4">
        <button
          onClick={() => setIsMobileOpen(true)}
          className="text-white bg-black/80 border border-cp-yellow/50 p-3 rounded-sm hover:bg-cp-yellow/20 hover:text-cp-yellow transition-all duration-300 neon-border-yellow backdrop-blur-md"
          aria-label="Open Menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 pointer-events-auto"
            />
            
            {/* Drawer Panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[80%] max-w-sm bg-dark-navy border-r-2 border-cp-yellow z-50 pointer-events-auto flex flex-col shadow-[0_0_50px_rgba(252,238,10,0.2)]"
            >
              <div className="p-6 flex justify-between items-center border-b border-white/10 bg-black/20">
                <span className="text-cp-yellow font-bold text-xl tracking-wider font-['interceptor']">MENU</span>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="text-white/80 hover:text-cp-yellow transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>
              
              <div className="flex flex-col p-6 gap-2 overflow-y-auto">
                {navItems.map((item, index) => (
                  <motion.a
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + 0.1 }}
                    onClick={() => scrollToSection(item.href)}
                    className="text-lg font-['interceptor'] font-bold text-white/90 hover:text-cp-yellow hover:bg-white/5 py-4 px-4 border-l-2 border-transparent hover:border-cp-yellow transition-all duration-200 uppercase tracking-widest cursor-pointer"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>

              {/* Decorative elements */}
              <div className="mt-auto p-6 border-t border-white/10">
                 <div className="h-1 w-20 bg-cp-yellow mb-2"></div>
                 <div className="text-xs text-white/40 font-mono">HACKHCC: CODERUNNERS 2026</div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}