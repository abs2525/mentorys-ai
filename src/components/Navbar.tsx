"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import BrainLogo from "./BrainLogo";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "בית", href: "/" },
  { label: "שירותים", href: "/#services" },
  { label: "אודות", href: "/#about" },
  { label: "כלי AI", href: "/ai-tools" },
  { label: "לקוחות", href: "/#clients" },
  { label: "צור קשר", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 bg-white transition-shadow duration-200 ${
        scrolled ? "shadow-md" : "border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <BrainLogo size={36} />
          <span className="text-gray-800 font-semibold text-base">mentorys.ai</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-gray-700 hover:text-[#E8491D] font-medium text-sm transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="תפריט"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-gray-700 hover:text-[#E8491D] font-medium text-base"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
