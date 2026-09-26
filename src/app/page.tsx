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
        hash === "capabilities" ||
        hash === "credentials" ||
        hash === "beyond"
      ) {
        setActiveTab(hash as CvTabId);
      } else if (hash === "about") {
        setActiveTab("capabilities");
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

    // Fix #3: On mobile, auto-scroll to the content area so the user can see the tab panel
    if (window.innerWidth < 1024) {
      const contentEl = document.getElementById("cv-content-area");
      if (contentEl) {
        contentEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <main className="editorial-container">
      {/*
        Fix #1: Split-pane layout on desktop.
        On lg+: grid is viewport-height (100vh minus 64px navbar) with overflow-hidden.
        Each column fills the full height and scrolls independently via overflow-y-auto.
        On mobile (below lg): normal stacked document flow — no fixed heights.
      */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:h-[calc(100vh-4rem)] lg:overflow-hidden items-start">

        {/* Left Column: Anchored profile sidebar — scrolls internally on desktop, normal flow on mobile */}
        <div className="lg:col-span-4 xl:col-span-4 lg:h-full lg:overflow-y-auto custom-scrollbar py-6 sm:py-8 lg:py-6">
          <ProfileSidebar onOpenCv={() => setIsCvOpen(true)} />
        </div>

        {/* Right Column: Dynamic CV canvas — scrolls independently on desktop */}
        <div
          id="cv-content-area"
          className="lg:col-span-8 xl:col-span-8 min-w-0 lg:h-full lg:overflow-y-auto custom-scrollbar"
        >
          <div className="py-6 sm:py-8 lg:py-6 space-y-6">
            {/* CvTabs is sticky top-0 within this scroll container on desktop */}
            <CvTabs activeTab={activeTab} onTabChange={handleTabChange} />

            <div className="pt-2 pb-8">
              {activeTab === "experience" && <ExperienceTab />}
              {activeTab === "projects" && <ProjectsTab />}
              {activeTab === "capabilities" && <CapabilitiesTab />}
              {activeTab === "credentials" && <CredentialsTab />}
              {activeTab === "beyond" && <BeyondWorkTab />}
            </div>
          </div>
        </div>
      </div>

      {/* Full Lightbox CV Modal */}
      <CvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
    </main>
  );
}
