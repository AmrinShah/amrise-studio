"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string, e?: React.MouseEvent) => {
    if (pathname === "/") {
      e?.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setMobileMenuOpen(false);
      }
    }
  };

  const handleNavClick = (sectionId: string, e: React.MouseEvent) => {
    scrollToSection(sectionId, e);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-purple-100/70 bg-white/80 shadow-sm shadow-purple-500/5 backdrop-blur-md supports-[backdrop-filter]:bg-white/70 md:h-20">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          onClick={(event) => {
            if (pathname === "/") {
              event.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="group flex items-center gap-3 rounded-lg outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-purple-500/60 focus-visible:ring-offset-2 sm:gap-4"
          aria-label="Amrise Studio home"
        >
          <div className="relative">
            <Image
              src="/portfolio/logo.png"
              alt="Amrise Studio"
              width={140}
              height={140}
              priority
              className="h-20 w-20 shrink-0 object-contain sm:h-24 sm:w-24 md:h-28 md:w-28"
              style={{ backgroundColor: 'transparent' }}
              unoptimized
            />
          </div>
          <span className="text-[1.1rem] font-semibold tracking-tight text-gray-900 sm:text-xl md:text-2xl">
            <span className="gradient-text">Amrise</span>{" "}
            <span className="text-gray-800">Studio</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={(e) => handleNavClick("hero", e)}
            className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
          >
            Home
          </button>
          <button
            onClick={(e) => handleNavClick("packages", e)}
            className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
          >
            Packages
          </button>
          <button
            onClick={(e) => handleNavClick("portfolio", e)}
            className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
          >
            Projects
          </button>
          <button
            onClick={(e) => handleNavClick("contact", e)}
            className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
          >
            Contact
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white hover:bg-purple-700 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white/95 backdrop-blur-md border-b border-purple-100/70">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={(e) => handleNavClick("hero", e)}
              className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
            >
              Home
            </button>
            <button
              onClick={(e) => handleNavClick("packages", e)}
              className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
            >
              Packages
            </button>
            <button
              onClick={(e) => handleNavClick("portfolio", e)}
              className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
            >
              Projects
            </button>
            <button
              onClick={(e) => handleNavClick("contact", e)}
              className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
            >
              Contact
            </button>
            <a
              href="https://wa.me/918830857785"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left px-4 py-3 text-sm font-medium text-green-600 hover:text-green-700 hover:bg-green-50 rounded-lg transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
