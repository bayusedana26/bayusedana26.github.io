"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { formalExperiences, freelanceExperiences } from "@/data/experience";
import { Calendar } from "lucide-react";
import { InstitutionalLogo } from "@/components/ui";

export const ExperienceTimeline: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="experience" className="w-full section-spacing border-b border-editorial-light-border dark:border-editorial-dark-border">
      <div className="editorial-container space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-editorial-light-accent dark:text-editorial-dark-accent font-semibold">
            {t.experience.sectionTag}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-editorial-light-text dark:text-editorial-dark-text leading-tight">
            {t.experience.headline}
          </h2>
          <p className="text-base text-editorial-light-muted dark:text-editorial-dark-muted">
            {t.experience.sub}
          </p>
        </div>

        {/* 2-Column Split: In-House vs Freelance as Symmetrical Unified Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Column 1: Formal In-House Roles as a SINGLE UNIFIED CARD */}
          <div className="flex flex-col h-full rounded-xl border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface dark:bg-editorial-dark-surface overflow-hidden shadow-xs hover:border-editorial-light-accent dark:hover:border-editorial-dark-accent transition-colors">
            {/* Card 1 Header */}
            <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface/80 dark:bg-editorial-dark-surface/80">
              <div className="flex items-center space-x-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                <h3 className="text-sm sm:text-base font-bold text-editorial-light-text dark:text-editorial-dark-text">
                  {t.experience.groupFormal}
                </h3>
              </div>
              <span className="rounded bg-editorial-light-bg dark:bg-editorial-dark-bg border border-editorial-light-border dark:border-editorial-dark-border px-2.5 py-1 text-xs font-mono font-medium text-editorial-light-muted dark:text-editorial-dark-muted">
                {t.experience.groupFormalBadge}
              </span>
            </div>

            {/* Card 1 Content (Divide-y between roles) */}
            <div className="flex-1 divide-y divide-editorial-light-border/60 dark:divide-editorial-dark-border/60 flex flex-col justify-between">
              {formalExperiences.map((exp) => (
                <div key={exp.id} className="p-5 sm:p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2.5">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center space-x-3 min-w-0">
                        {exp.logo && (
                          <InstitutionalLogo
                            src={exp.logo}
                            alt={exp.company}
                            className="w-9 h-9 p-1.5 shrink-0"
                            size={36}
                          />
                        )}
                        <div className="min-w-0">
                          <div className="font-semibold text-xs font-mono text-editorial-light-accent dark:text-editorial-dark-accent truncate">
                            {exp.company}
                          </div>
                          <h4 className="text-sm sm:text-base font-bold text-editorial-light-text dark:text-editorial-dark-text truncate">
                            {exp.role[language]}
                          </h4>
                        </div>
                      </div>
                      <div className="shrink-0 inline-flex items-center space-x-1 font-mono text-[11px] text-editorial-light-muted dark:text-editorial-dark-muted pt-0.5">
                        <Calendar className="w-3 h-3" />
                        <span>
                          {exp.start} - {exp.end === "Present" ? t.experience.present : exp.end}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-1.5 text-xs text-editorial-light-muted dark:text-editorial-dark-muted leading-relaxed list-disc list-outside pl-4">
                      {exp.description[language].map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>

                  {exp.tags && (
                    <div className="flex flex-wrap gap-1.5 pt-2 mt-1">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-bg dark:bg-editorial-dark-bg px-2 py-0.5 text-[10px] font-mono text-editorial-light-text dark:text-editorial-dark-text"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Freelance Consulting & Corporate Training as a SINGLE UNIFIED CARD */}
          <div className="flex flex-col h-full rounded-xl border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface dark:bg-editorial-dark-surface overflow-hidden shadow-xs hover:border-editorial-light-accent dark:hover:border-editorial-dark-accent transition-colors">
            {/* Card 2 Header */}
            <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface/80 dark:bg-editorial-dark-surface/80">
              <div className="flex items-center space-x-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <h3 className="text-sm sm:text-base font-bold text-editorial-light-text dark:text-editorial-dark-text">
                  {t.experience.groupFreelance}
                </h3>
              </div>
              <span className="rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 px-2.5 py-1 text-xs font-mono font-medium">
                {t.experience.groupFreelanceBadge}
              </span>
            </div>

            {/* Card 2 Content (Divide-y between roles) */}
            <div className="flex-1 divide-y divide-editorial-light-border/60 dark:divide-editorial-dark-border/60 flex flex-col justify-between">
              {freelanceExperiences.map((exp) => (
                <div key={exp.id} className="p-5 sm:p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2.5">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center space-x-3 min-w-0">
                        {exp.logo && (
                          <InstitutionalLogo
                            src={exp.logo}
                            alt={exp.company}
                            className="w-9 h-9 p-1.5 shrink-0"
                            size={36}
                          />
                        )}
                        <div className="min-w-0">
                          <div className="font-semibold text-xs font-mono text-editorial-light-accent dark:text-editorial-dark-accent truncate">
                            {exp.company}
                          </div>
                          <h4 className="text-sm sm:text-base font-bold text-editorial-light-text dark:text-editorial-dark-text truncate">
                            {exp.role[language]}
                          </h4>
                        </div>
                      </div>
                      <div className="shrink-0 inline-flex items-center space-x-1 font-mono text-[11px] text-editorial-light-muted dark:text-editorial-dark-muted pt-0.5">
                        <Calendar className="w-3 h-3" />
                        <span>
                          {exp.start} - {exp.end === "Present" ? t.experience.present : exp.end}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-1.5 text-xs text-editorial-light-muted dark:text-editorial-dark-muted leading-relaxed list-disc list-outside pl-4">
                      {exp.description[language].map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>

                  {exp.tags && (
                    <div className="flex flex-wrap gap-1.5 pt-2 mt-1">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-bg dark:bg-editorial-dark-bg px-2 py-0.5 text-[10px] font-mono text-editorial-light-text dark:text-editorial-dark-text"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
