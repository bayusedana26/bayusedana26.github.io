"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export const LanguageToggle: React.FC<{ className?: string }> = ({ className = "" }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language selector"
      className={`inline-flex items-center rounded-md border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface dark:bg-editorial-dark-surface p-0.5 text-xs font-mono font-medium ${className}`}
    >
      <button
        type="button"
        onClick={() => setLanguage("id")}
        aria-pressed={language === "id"}
        className={`px-2 py-1 rounded transition-colors ${
          language === "id"
            ? "bg-editorial-light-accent text-white dark:bg-editorial-dark-accent dark:text-white font-semibold"
            : "text-editorial-light-muted hover:text-editorial-light-text dark:text-editorial-dark-muted dark:hover:text-editorial-dark-text"
        }`}
      >
        ID
      </button>
      <span className="text-editorial-light-border dark:text-editorial-dark-border px-0.5" aria-hidden="true">
        /
      </span>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        className={`px-2 py-1 rounded transition-colors ${
          language === "en"
            ? "bg-editorial-light-accent text-white dark:bg-editorial-dark-accent dark:text-white font-semibold"
            : "text-editorial-light-muted hover:text-editorial-light-text dark:text-editorial-dark-muted dark:hover:text-editorial-dark-text"
        }`}
      >
        EN
      </button>
    </div>
  );
};
