"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUp, Mail } from "lucide-react";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";
import { BrandIcon } from "@/components/ui";

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface dark:bg-editorial-dark-surface transition-colors duration-200">
      <div className="editorial-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-3">
            <h2 className="text-xl font-bold tracking-tight text-editorial-light-text dark:text-editorial-dark-text">
              {t.footer.name}
            </h2>
            <p className="text-sm text-editorial-light-muted dark:text-editorial-dark-muted max-w-md leading-relaxed">
              {t.footer.tagline}
            </p>
            <p className="text-xs text-editorial-light-muted dark:text-editorial-dark-muted font-mono pt-2">
              {t.footer.builtWith}
            </p>
          </div>

          {/* Direct Social & Connect Links */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-editorial-light-muted dark:text-editorial-dark-muted">
              {language === "id" ? "Kontak & Tautan" : "Connect & Channels"}
            </h3>
            <div className="flex flex-col space-y-2.5 text-sm">
              <a
                href="https://wa.me/6281369075494"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2.5 text-editorial-light-text dark:text-editorial-dark-text hover:text-emerald-600 transition-colors group"
              >
                <BrandIcon name="whatsapp" size={18} />
                <span className="group-hover:translate-x-0.5 transition-transform">WhatsApp</span>
              </a>
              <a
                href="mailto:bayusedana26@gmail.com"
                className="inline-flex items-center space-x-2.5 text-editorial-light-text dark:text-editorial-dark-text hover:text-editorial-light-accent dark:hover:text-editorial-dark-accent transition-colors group"
              >
                <Mail className="w-4 h-4 text-editorial-light-muted dark:text-editorial-dark-muted group-hover:text-editorial-light-accent dark:group-hover:text-editorial-dark-accent" />
                <span className="group-hover:translate-x-0.5 transition-transform">bayusedana26@gmail.com</span>
              </a>
              <a
                href="https://github.com/bayusedana26"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2.5 text-editorial-light-text dark:text-editorial-dark-text hover:text-editorial-light-accent dark:hover:text-editorial-dark-accent transition-colors group"
              >
                <BrandIcon name="github" size={16} className="text-editorial-light-text dark:text-editorial-dark-text" />
                <span className="group-hover:translate-x-0.5 transition-transform">GitHub / bayusedana26</span>
              </a>
              <a
                href="https://medium.com/@bayusedana26"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2.5 text-editorial-light-text dark:text-editorial-dark-text hover:text-editorial-light-accent dark:hover:text-editorial-dark-accent transition-colors group"
              >
                <BrandIcon name="medium" size={16} className="text-editorial-light-text dark:text-editorial-dark-text" />
                <span className="group-hover:translate-x-0.5 transition-transform">Medium / @bayusedana26</span>
              </a>
              <a
                href="https://www.linkedin.com/in/bayusedana/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2.5 text-editorial-light-text dark:text-editorial-dark-text hover:text-editorial-light-accent dark:hover:text-editorial-dark-accent transition-colors group"
              >
                <BrandIcon name="linkedin" size={16} />
                <span className="group-hover:translate-x-0.5 transition-transform">LinkedIn / bayusedana</span>
              </a>
              <a
                href="https://public.tableau.com/app/profile/bayusedana/vizzes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2.5 text-editorial-light-text dark:text-editorial-dark-text hover:text-editorial-light-accent dark:hover:text-editorial-dark-accent transition-colors group"
              >
                <BrandIcon name="tableau" size={16} />
                <span className="group-hover:translate-x-0.5 transition-transform">Tableau Public Portfolio</span>
              </a>
            </div>
          </div>

          {/* Quick Actions Column */}
          <div className="md:col-span-2 flex flex-col md:items-end space-y-4">
            <button
              onClick={scrollToTop}
              type="button"
              className="inline-flex items-center space-x-1.5 text-xs font-mono text-editorial-light-muted hover:text-editorial-light-text dark:text-editorial-dark-muted dark:hover:text-editorial-dark-text transition-colors"
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
            <div className="flex items-center space-x-2 pt-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-editorial-light-border dark:border-editorial-dark-border flex flex-col sm:flex-row justify-between items-center text-xs text-editorial-light-muted dark:text-editorial-dark-muted font-mono space-y-2 sm:space-y-0">
          <div>
            &copy; {currentYear} Bayu Sedana. {t.footer.rights}
          </div>
          <div>Bilingual ID / EN • Light & Dark Mode</div>
        </div>
      </div>
    </footer>
  );
};
