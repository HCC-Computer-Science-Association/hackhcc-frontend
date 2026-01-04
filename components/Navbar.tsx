"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 pb-8  z-50 bg-gradient-to-b from-black/65 to-transparent">
      <nav
        className="relative mt-8 w-fit mx-auto  bg-black/60  border-2 border-cyber-yellow/30  before:content-[''] after:content-['']
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
            [clip-path:polygon(18px_0,100%_0,100%_48px,calc(100%-20px)_100%,0_100%,0_18px)]
            
"
      >
        <div className="max-w-7xl mx-auto px-4 ">
          <div className="flex items-center justify-center h-16 gap-1 mx-2 ">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative group cursor-pointer h-full "
                onMouseEnter={() =>
                  item.hasDropdown && setActiveDropdown(item.label)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center h-full gap-1 px-6  text-white/90  hover:text-neon-yellow transition-all duration-300 hover:bg-dark-bg/50 border-r border-white/10 last:border-r-0 relative group"
                >
                  <span className="tracking-wide">{item.label}</span>
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  {/* <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-neon-yellow scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div> */}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Neon glow effect at bottom */}
        {/* <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyber-cyan to-transparent opacity-50"></div> */}
      </nav>
    </div>
  );
}
