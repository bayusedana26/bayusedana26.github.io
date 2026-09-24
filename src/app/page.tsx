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
  };

  return (
    <main className="editorial-container py-6 sm:py-8 lg:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Sticky Executive Profile Sidebar (4.5 cols on desktop) */}
        <div className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-20 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto no-scrollbar">
          <ProfileSidebar onOpenCv={() => setIsCvOpen(true)} />
        </div>

        {/* Right Column: Dynamic Segmented Online CV Canvas (7.5 cols on desktop) */}
        <div className="lg:col-span-7 xl:col-span-8 min-w-0 space-y-4">
          <CvTabs activeTab={activeTab} onTabChange={handleTabChange} />

          <div className="pt-2">
            {activeTab === "experience" && <ExperienceTab />}
            {activeTab === "projects" && <ProjectsTab />}
            {activeTab === "capabilities" && <CapabilitiesTab />}
            {activeTab === "credentials" && <CredentialsTab />}
            {activeTab === "beyond" && <BeyondWorkTab />}
          </div>
        </div>
      </div>

      {/* Full Lightbox CV Modal */}
      <CvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
    </main>
  );
}
