"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { Menu, X } from "lucide-react";
import { BrandIcon } from "@/components/ui";

export const Navbar: React.FC = () => {
  const { language, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#experience", label: t.nav.experience },
    { href: "#projects", label: t.nav.projects },
    { href: "#capabilities", label: language === "id" ? "Keahlian" : "Capabilities" },
    { href: "#credentials", label: t.nav.certifications },
    { href: "#beyond", label: language === "id" ? "Dokumentasi" : "Beyond Work" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    window.location.hash = href;
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-bg/95 dark:bg-editorial-dark-bg/95 backdrop-blur supports-[backdrop-filter]:bg-editorial-light-bg/80 dark:supports-[backdrop-filter]:bg-editorial-dark-bg/80 transition-colors duration-200">
      <div className="editorial-container flex h-16 items-center justify-between">
        {/* Brand */}
        <Link
          href="#"
          className="group flex items-baseline space-x-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-editorial-light-accent dark:focus-visible:ring-editorial-dark-accent rounded"
        >
          <span className="font-semibold tracking-tight text-base sm:text-lg text-editorial-light-text dark:text-editorial-dark-text">
            Bayu Sedana
          </span>
          <span className="hidden md:inline-block text-xs font-mono text-editorial-light-muted dark:text-editorial-dark-muted border-l border-editorial-light-border dark:border-editorial-dark-border pl-2">
            Online CV
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="text-editorial-light-muted hover:text-editorial-light-text dark:text-editorial-dark-muted dark:hover:text-editorial-dark-text transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Controls & Quick Action */}
        <div className="flex items-center space-x-3">
          <LanguageToggle />
          <ThemeToggle />

          <a
            href="https://wa.me/6281369075494"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center space-x-1.5 rounded-md px-3 py-1.5 text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
          >
            <BrandIcon name="whatsapp" size={15} />
            <span>WhatsApp</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-editorial-light-muted hover:text-editorial-light-text dark:text-editorial-dark-muted dark:hover:text-editorial-dark-text"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface dark:bg-editorial-dark-surface px-6 py-5 shadow-sm animate-fadeIn">
          <nav className="flex flex-col space-y-4 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-editorial-light-text dark:text-editorial-dark-text hover:text-editorial-light-accent dark:hover:text-editorial-dark-accent py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-editorial-light-border dark:border-editorial-dark-border flex items-center justify-between">
              <a
                href="https://wa.me/6281369075494"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex justify-center items-center space-x-2 rounded-md px-4 py-2.5 text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white"
              >
                <BrandIcon name="whatsapp" size={16} />
                <span>WhatsApp</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
