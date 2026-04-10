/*
 * Design: Structured Elegance — Neo-Corporate
 * Navbar: Fixed top, deep blue background, orange accent on active/hover
 * Uses Apollo Solar triangle logo from CDN
 */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "wouter";

const APOLLO_LOGO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663446627473/mXShMzizVjeCZcp6Mzi5x9/apollo-logo_9d73a455.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Key Study", href: "#key-study" },
  { label: "Projects", href: "#projects" },
  { label: "Partners", href: "#partners" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location, navigate] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (location === "/calculator") {
      // If on calculator page, navigate to home first, then scroll
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // If on home page, just scroll to the section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleCalculatorClick = () => {
    navigate("/calculator");
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D3B7A]/98 backdrop-blur-md shadow-lg"
          : "bg-[#0D3B7A]/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <button
          onClick={handleLogoClick}
          className="flex items-center gap-3 text-white no-underline shrink-0 bg-transparent border-none cursor-pointer"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <img
            src={APOLLO_LOGO}
            alt="Apollo Solar Logo"
            className="w-10 h-10 object-contain"
          />
          <span className="text-xl font-black tracking-tight">
            Apollo <span className="text-[#F7931E]">Solar</span>
          </span>
        </button>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-7 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="text-white/60 hover:text-[#F7931E] text-[0.85rem] font-medium no-underline transition-colors duration-200 tracking-wide bg-transparent border-none cursor-pointer"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button
          onClick={handleCalculatorClick}
          className="inline-flex items-center bg-[#F7931E] hover:bg-[#FDB95B] text-[#0D3B7A] font-semibold text-sm px-6 py-2.5 rounded-full no-underline transition-all duration-200 hover:-translate-y-0.5 border-none cursor-pointer"
        >
          Calculator
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0D3B7A] border-t border-white/10 px-6 pb-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => {
                handleNavClick(link.href);
                setMobileOpen(false);
              }}
              className="block py-3 text-white/70 hover:text-[#F7931E] text-sm font-medium no-underline border-b border-white/5 transition-colors w-full text-left bg-transparent border-none cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={handleCalculatorClick}
            className="mt-4 inline-flex items-center bg-[#F7931E] text-[#0D3B7A] font-semibold text-sm px-6 py-2.5 rounded-full no-underline bg-transparent border-none cursor-pointer"
          >
            Calculator
          </button>
        </div>
      )}
    </nav>
  );
}
