"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Briefcase, FolderGit2, Cpu, Award, Camera } from "lucide-react";

export type CvTabId = "experience" | "projects" | "capabilities" | "credentials" | "beyond";

interface CvTabsProps {
  activeTab: CvTabId;
  onTabChange: (tabId: CvTabId) => void;
}

export const CvTabs: React.FC<CvTabsProps> = ({ activeTab, onTabChange }) => {
  const { language } = useLanguage();

  const tabs: { id: CvTabId; label: { en: string; id: string }; icon: React.ReactNode }[] = [
    {
      id: "experience",
      label: { en: "Experience & Skills", id: "Pengalaman & Keahlian" },
      icon: <Briefcase className="w-3.5 h-3.5" />,
    },
    {
      id: "projects",
      label: { en: "Projects", id: "Proyek" },
      icon: <FolderGit2 className="w-3.5 h-3.5" />,
    },
    {
      id: "credentials",
      label: { en: "Certifications", id: "Sertifikasi" },
      icon: <Award className="w-3.5 h-3.5" />,
    },
    {
      id: "beyond",
      label: { en: "Beyond Work", id: "Dokumentasi" },
      icon: <Camera className="w-3.5 h-3.5" />,
    },
  ];

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex = index;
    if (e.key === "ArrowRight") {
      nextIndex = (index + 1) % tabs.length;
    } else if (e.key === "ArrowLeft") {
      nextIndex = (index - 1 + tabs.length) % tabs.length;
    } else if (e.key === "Home") {
      nextIndex = 0;
    } else if (e.key === "End") {
      nextIndex = tabs.length - 1;
    } else {
      return;
    }
    e.preventDefault();
    onTabChange(tabs[nextIndex].id);
    const nextTabEl = document.getElementById(`tab-${tabs[nextIndex].id}`);
    nextTabEl?.focus();
  };

  return (
    /*
      Fix #1 / #10: Sticky is now top-0, relative to the right scroll column container.
      On desktop this is correct because CvTabs sits inside the right overflow-y-auto column.
      On mobile (body scroll), top-0 sticks to window top — acceptable UX since the navbar
      is also sticky and the tabs will appear just below it on scroll.
    */
    <div className="sticky top-0 z-30 w-full bg-editorial-light-bg/95 dark:bg-editorial-dark-bg/95 backdrop-blur-md border-b border-editorial-light-border dark:border-editorial-dark-border py-2.5 sm:py-3 transition-colors duration-200">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-8 lg:px-10 xl:px-12 relative">
        {/* Gradient fade — only visible on mobile to signal horizontal scroll affordance */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-4 sm:right-8 top-0 bottom-0 w-10 bg-gradient-to-l from-editorial-light-bg dark:from-editorial-dark-bg to-transparent z-10 md:hidden"
        />

        <div
          role="tablist"
          aria-label="Online CV Sections"
          className="flex items-center space-x-2 overflow-x-auto no-scrollbar scroll-smooth py-0.5"
        >
          {tabs.map((tab, idx) => {
            const isActive =
              activeTab === tab.id ||
              (tab.id === "experience" && (activeTab as string) === "capabilities");
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                id={`tab-${tab.id}`}
                onClick={() => onTabChange(tab.id)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                type="button"
                className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-editorial-light-accent ${
                  isActive
                    ? "bg-editorial-light-text text-editorial-light-bg dark:bg-editorial-dark-text dark:text-editorial-dark-bg shadow-2xs font-semibold"
                    : "border border-editorial-light-border/80 dark:border-editorial-dark-border/80 bg-editorial-light-surface/60 dark:bg-editorial-dark-surface/60 text-editorial-light-muted dark:text-editorial-dark-muted hover:text-editorial-light-text dark:hover:text-editorial-dark-text hover:border-editorial-light-accent dark:hover:border-editorial-dark-accent"
                }`}
              >
                <span className={isActive ? "text-editorial-light-accent dark:text-blue-400" : ""}>
                  {tab.icon}
                </span>
                <span>{tab.label[language]}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
