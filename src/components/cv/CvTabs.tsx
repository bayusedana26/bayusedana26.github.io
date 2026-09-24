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
      label: { en: "Experience", id: "Pengalaman" },
      icon: <Briefcase className="w-3.5 h-3.5" />,
    },
    {
      id: "projects",
      label: { en: "Projects", id: "Proyek" },
      icon: <FolderGit2 className="w-3.5 h-3.5" />,
    },
    {
      id: "capabilities",
      label: { en: "Capabilities", id: "Keahlian" },
      icon: <Cpu className="w-3.5 h-3.5" />,
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

  return (
    <div className="sticky top-16 z-30 w-full bg-editorial-light-bg/95 dark:bg-editorial-dark-bg/95 backdrop-blur-md border-b border-editorial-light-border dark:border-editorial-dark-border py-2.5">
      <div
        role="tablist"
        aria-label="Online CV Sections"
        className="flex items-center space-x-1.5 overflow-x-auto no-scrollbar scroll-smooth"
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              id={`tab-${tab.id}`}
              onClick={() => onTabChange(tab.id)}
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
  );
};
