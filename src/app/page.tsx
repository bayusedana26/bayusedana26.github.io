import React from "react";
import {
  Hero,
  AboutSection,
  CapabilityIndex,
  ExperienceTimeline,
  ProjectGrid,
  CertificationList,
  GallerySection,
  CollaborationSection,
} from "@/components";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <AboutSection />
      <CapabilityIndex />
      <ExperienceTimeline />
      <ProjectGrid />
      <CertificationList />
      <GallerySection />
      <CollaborationSection />
    </main>
  );
}
