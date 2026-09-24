"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = "" }) => {
  const { resolvedTheme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`w-9 h-9 rounded-md border border-editorial-light-border dark:border-editorial-dark-border ${className}`}
        aria-hidden="true"
      />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
      className={`relative inline-flex items-center justify-center min-w-[44px] min-h-[44px] sm:min-w-[36px] sm:min-h-[36px] w-9 h-9 rounded-md text-editorial-light-muted hover:text-editorial-light-text dark:text-editorial-dark-muted dark:hover:text-editorial-dark-text border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface dark:bg-editorial-dark-surface transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-editorial-light-accent dark:focus-visible:ring-editorial-dark-accent ${className}`}
    >
      {resolvedTheme === "dark" ? (
        <Sun className="w-4 h-4 text-editorial-dark-text" />
      ) : (
        <Moon className="w-4 h-4 text-editorial-light-text" />
      )}
    </button>
  );
};
