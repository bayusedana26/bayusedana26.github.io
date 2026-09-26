"use client";

import React, { useState, useEffect } from "react";
import {
  ProfileSidebar,
  CvTabs,
  CvTabId,
  CvModal,
  ExperienceTab,
  ProjectsTab,
  CapabilitiesTab,
  CredentialsTab,
  BeyondWorkTab,
} from "@/components/cv";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<CvTabId>("experience");
  const [isCvOpen, setIsCvOpen] = useState(false);

  // Sync active tab with URL hash
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (
        hash === "experience" ||
        hash === "projects" ||
        hash === "credentials" ||
        hash === "beyond"
      ) {
        setActiveTab(hash as CvTabId);
      } else if (
        hash === "skills" ||
        hash === "capabilities" ||
        hash === "about"
      ) {
        setActiveTab("experience");
      } else if (hash === "certifications") {
        setActiveTab("credentials");
      } else if (hash === "gallery") {
        setActiveTab("beyond");
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const handleTabChange = (tabId: CvTabId) => {
    setActiveTab(tabId);
    window.history.replaceState(null, "", `#${tabId}`);

    // On mobile (< 768px), auto-scroll smoothly to the content area
    if (window.innerWidth < 768) {
      const contentEl = document.getElementById("cv-content-area");
      if (contentEl) {
        contentEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <main className="w-full h-auto md:h-[calc(100dvh-4rem)] md:overflow-hidden flex flex-col md:flex-row">
      {/* ── Left Column: Persistent Structural Profile Sidebar ── */}
      <div className="w-full md:w-[320px] lg:w-[360px] xl:w-[400px] shrink-0 md:h-full md:overflow-y-auto no-scrollbar border-b md:border-b-0 md:border-r border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface/40 dark:bg-editorial-dark-surface/40">
        <ProfileSidebar onOpenCv={() => setIsCvOpen(true)} />
      </div>

      {/* ── Right Column: Full-Width Workspace with Independent Scrolling ── */}
      <div
        id="cv-content-area"
        className="flex-1 min-w-0 w-full md:h-full md:overflow-y-auto custom-scrollbar flex flex-col bg-editorial-light-bg dark:bg-editorial-dark-bg"
      >
        {/* Workspace Toolbar / Tabs: Sticky at top */}
        <CvTabs activeTab={activeTab} onTabChange={handleTabChange} />

        {/* Content Canvas: Centered max-w for readability on ultra-wide screens */}
        <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-8 lg:px-10 xl:px-12 py-6 sm:py-8 flex-1">
          {(activeTab === "experience" || (activeTab as string) === "capabilities") && (
            <ExperienceTab />
          )}
          {activeTab === "projects" && <ProjectsTab />}
          {activeTab === "credentials" && <CredentialsTab />}
          {activeTab === "beyond" && <BeyondWorkTab />}
        </div>

        {/* Embedded Workspace Footer at the end of the scroll stream */}
        <Footer />
      </div>

      {/* Full Lightbox CV Modal */}
      <CvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
    </main>
  );
}
