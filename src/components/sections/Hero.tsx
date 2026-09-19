"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import {
  ArrowUpRight,
  X,
  Maximize2,
} from "lucide-react";
import { BrandIcon } from "@/components/ui";

export const Hero: React.FC = () => {
  const { language, t } = useLanguage();
  const [cvModalOpen, setCvModalOpen] = useState(false);

  return (
    <section className="relative w-full border-b border-editorial-light-border dark:border-editorial-dark-border py-10 md:py-16 lg:py-20 overflow-hidden">
      <div className="editorial-container space-y-8 sm:space-y-10">
        {/* Dedicated Hero Headline & Identity Section */}
        <div className="relative rounded-2xl border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface/75 dark:bg-editorial-dark-surface/75 backdrop-blur-md p-6 sm:p-8 lg:p-10 overflow-hidden shadow-xs">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-80 h-80 bg-blue-500/10 dark:bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 -mb-16 w-64 h-64 bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3">
              {/* Role Kicker & Live Status Pill */}
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-bg/80 dark:bg-editorial-dark-bg/80 text-xs font-mono text-editorial-light-muted dark:text-editorial-dark-muted shadow-2xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-semibold text-editorial-light-text dark:text-editorial-dark-text">
                  {t.hero.headline}
                </span>
                <span className="text-editorial-light-border dark:text-editorial-dark-border">•</span>
                <span>{t.hero.badgeExperience}</span>
              </div>

              {/* Big Bold Hero Name */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-editorial-light-text dark:text-editorial-dark-text leading-[0.96]">
                {t.hero.name}
              </h1>

              {/* Sub-headline / Specialty & Domains */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-lg sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-sky-400 dark:from-blue-400 dark:via-indigo-300 dark:to-sky-300">
                  {t.hero.headline}
                </span>
                <span className="hidden sm:inline text-editorial-light-border dark:border-editorial-dark-border">•</span>
                <span className="text-xs sm:text-sm font-mono text-editorial-light-muted dark:text-editorial-dark-muted">
                  {t.hero.domains}
                </span>
              </div>
            </div>

            {/* Quick Availability / Location Badges */}
            <div className="flex flex-wrap lg:flex-col items-start lg:items-end gap-2.5 shrink-0">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-bg dark:bg-editorial-dark-bg text-xs font-mono text-editorial-light-text dark:text-editorial-dark-text">
                <span className="text-editorial-light-accent dark:text-editorial-dark-accent">📍</span>
                <span>{t.hero.locationTag}</span>
              </div>
              <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-emerald-500/25 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>{t.hero.statusAvailable}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Hero Narrative */}
          <div className="lg:col-span-7 space-y-6">
            {/* Executive Overview Copy */}
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-editorial-light-accent dark:text-editorial-dark-accent font-semibold">
                {t.hero.executiveOverview}
              </span>
              <p className="text-base sm:text-lg text-editorial-light-muted dark:text-editorial-dark-muted leading-relaxed text-justify [text-justify:inter-word]">
                {t.hero.subheadline}
              </p>
            </div>

            {/* Direct Social & Connect Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <a
                href="https://wa.me/6281369075494"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 rounded-md px-3.5 py-2 text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors shadow-sm"
              >
                <BrandIcon name="whatsapp" size={16} />
                <span>WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
              </a>

              <a
                href="https://github.com/bayusedana26"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 rounded-md px-3.5 py-2 text-xs font-medium border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface dark:bg-editorial-dark-surface text-editorial-light-text dark:text-editorial-dark-text hover:border-editorial-light-accent dark:hover:border-editorial-dark-accent hover:text-editorial-light-accent dark:hover:text-editorial-dark-accent transition-colors shadow-xs"
              >
                <BrandIcon name="github" size={15} />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-editorial-light-muted dark:text-editorial-dark-muted" />
              </a>

              <a
                href="https://medium.com/@bayusedana26"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 rounded-md px-3.5 py-2 text-xs font-medium border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface dark:bg-editorial-dark-surface text-editorial-light-text dark:text-editorial-dark-text hover:border-editorial-light-accent dark:hover:border-editorial-dark-accent hover:text-editorial-light-accent dark:hover:text-editorial-dark-accent transition-colors shadow-xs"
              >
                <BrandIcon name="medium" size={15} />
                <span>Medium</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-editorial-light-muted dark:text-editorial-dark-muted" />
              </a>

              <a
                href="https://www.linkedin.com/in/bayusedana/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 rounded-md px-3.5 py-2 text-xs font-medium border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface dark:bg-editorial-dark-surface text-editorial-light-text dark:text-editorial-dark-text hover:border-editorial-light-accent dark:hover:border-editorial-dark-accent hover:text-editorial-light-accent dark:hover:text-editorial-dark-accent transition-colors shadow-xs"
              >
                <BrandIcon name="linkedin" size={15} />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-editorial-light-muted dark:text-editorial-dark-muted" />
              </a>
            </div>
          </div>

          {/* Right Column: Studio Avatar Card with CV Preview & Badges */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div
              className="group relative w-full max-w-sm rounded-xl border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface dark:bg-editorial-dark-surface p-3 shadow-lg cursor-pointer overflow-hidden transition-all duration-300 hover:border-editorial-light-accent dark:hover:border-editorial-dark-accent"
              onClick={() => setCvModalOpen(true)}
            >
              {/* Image Frame */}
              <div className="relative w-full h-80 sm:h-96 rounded-lg overflow-hidden bg-neutral-950">
                <Image
                  src="/assets/images/Bayu_CV.png"
                  alt="Bayu Sedana - Profile & CV"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex items-end p-4">
                  <span className="text-white text-xs font-mono inline-flex items-center space-x-1 bg-black/60 px-2.5 py-1 rounded backdrop-blur-sm">
                    <Maximize2 className="w-3 h-3" />
                    <span>{t.hero.previewCV}</span>
                  </span>
                </div>
              </div>

              {/* Floating Badges */}
              <div className="absolute top-6 right-6 rounded-md bg-editorial-light-surface/90 dark:bg-editorial-dark-surface/90 backdrop-blur border border-editorial-light-border dark:border-editorial-dark-border px-3 py-1 shadow-sm">
                <span className="text-xs font-mono font-semibold text-editorial-light-text dark:text-editorial-dark-text">
                  {t.hero.badgeExperience}
                </span>
              </div>
              <div className="absolute bottom-6 left-6 rounded-md bg-editorial-light-accent/90 dark:bg-editorial-dark-accent/90 text-white backdrop-blur px-3 py-1 shadow-sm">
                <span className="text-xs font-mono font-semibold">
                  {t.hero.badgeStatus}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Milestones Strip */}
        <div className="mt-14 pt-8 border-t border-editorial-light-border dark:border-editorial-dark-border grid grid-cols-1 sm:grid-cols-3 gap-6">
          {t.hero.milestones.map((m, idx) => (
            <div
              key={idx}
              className="p-4 rounded-lg border border-editorial-light-border/70 dark:border-editorial-dark-border/70 bg-editorial-light-surface/40 dark:bg-editorial-dark-surface/40 space-y-1"
            >
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold font-mono text-editorial-light-accent dark:text-editorial-dark-accent tracking-tight truncate">
                {m.number}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-editorial-light-text dark:text-editorial-dark-text">
                {m.label}
              </div>
              <div className="text-xs text-editorial-light-muted dark:text-editorial-dark-muted font-mono">
                {m.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CV Full Lightbox Modal */}
      {cvModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Curriculum Vitae Preview"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setCvModalOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-lg border border-neutral-800 bg-neutral-900 text-white overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800">
              <span className="font-mono text-xs text-blue-400 font-semibold">
                Bayu Sedana: Curriculum Vitae
              </span>
              <div className="flex items-center space-x-3">
                <a
                  href="/assets/images/Bayu_CV.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-neutral-300 hover:text-white underline"
                >
                  {language === "id" ? "Buka Gambar Asli ↗" : "Open Original Image ↗"}
                </a>
                <button
                  onClick={() => setCvModalOpen(false)}
                  type="button"
                  className="p-1 rounded text-neutral-400 hover:text-white"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="relative w-full h-[70vh] bg-black flex items-center justify-center overflow-auto p-2">
              <div className="relative w-full h-full">
                <Image
                  src="/assets/images/Bayu_CV.png"
                  alt="Bayu Sedana Curriculum Vitae"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
