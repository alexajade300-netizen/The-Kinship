"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Courses", href: "/courses" },
    { name: "Our Approach", href: "/our-approach" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-[#F8F2E8]/95 backdrop-blur-md py-3 border-b border-[#EADFD2] shadow-subtle"
          : "bg-[#F8F2E8] py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8A1F42] rounded-md"
            aria-label="KINSHIP Homepage"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-lg overflow-hidden bg-[#4B0C1B] flex items-center justify-center border border-[#8A1F42]/20 flex-shrink-0">
              <Image
                src="/images/kinship-logo.png"
                alt="KINSHIP Brand Emblem"
                width={100}
                height={100}
                quality={100}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-semibold tracking-wider text-[#4B0C1B] leading-none">
                KINSHIP
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-widest uppercase font-medium text-[#6E6466] mt-0.5">
                Evidence-Led Parenting
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors py-1 relative ${
                    isActive
                      ? "text-[#4B0C1B] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#8A1F42]"
                      : "text-[#6E6466] hover:text-[#4B0C1B]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/courses"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 bg-[#4B0C1B] text-[#F8F2E8] hover:bg-[#8A1F42] shadow-sm hover:shadow active:scale-[0.98]"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#4B0C1B] hover:bg-[#F0E0E3] focus:outline-none focus:ring-2 focus:ring-[#8A1F42]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#EADFD2] bg-[#F8F2E8] px-4 pt-3 pb-6 shadow-elevated animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? "bg-[#F0E0E3] text-[#4B0C1B] font-semibold"
                      : "text-[#251C1E] hover:bg-[#F0E0E3]/50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-2">
              <Link
                href="/courses"
                className="w-full inline-flex items-center justify-center px-4 py-3 rounded-full text-sm font-semibold tracking-wider uppercase bg-[#4B0C1B] text-[#F8F2E8] hover:bg-[#8A1F42] shadow-sm"
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
