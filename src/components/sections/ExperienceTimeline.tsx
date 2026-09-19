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

        {/* 2-Column Split: In-House vs Freelance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Column 1: Formal In-House Roles */}
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-editorial-light-border dark:border-editorial-dark-border">
              <span className="text-sm font-bold text-editorial-light-text dark:text-editorial-dark-text">
                {t.experience.groupFormal}
              </span>
              <span className="rounded bg-editorial-light-bg dark:bg-editorial-dark-bg border border-editorial-light-border dark:border-editorial-dark-border px-2 py-0.5 text-xs font-mono text-editorial-light-muted dark:text-editorial-dark-muted">
                {t.experience.groupFormalBadge}
              </span>
            </div>

            <div className="space-y-4">
              {formalExperiences.map((exp) => (
                <article
                  key={exp.id}
                  className="p-4 sm:p-5 rounded-lg border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface dark:bg-editorial-dark-surface space-y-3 hover:border-editorial-light-accent dark:hover:border-editorial-dark-accent transition-colors flex flex-col justify-between"
                >
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
                          <h3 className="text-sm sm:text-base font-bold text-editorial-light-text dark:text-editorial-dark-text truncate">
                            {exp.role[language]}
                          </h3>
                        </div>
                      </div>
                      <div className="shrink-0 inline-flex items-center space-x-1 font-mono text-[11px] text-editorial-light-muted dark:text-editorial-dark-muted pt-0.5">
                        <Calendar className="w-3 h-3" />
                        <span>
                          {exp.start} - {exp.end === "Present" ? t.experience.present : exp.end}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-1 text-xs text-editorial-light-muted dark:text-editorial-dark-muted leading-relaxed list-disc list-outside pl-3.5">
                      {exp.description[language].map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>

                  {exp.tags && (
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-editorial-light-border/50 dark:border-editorial-dark-border/50 mt-1">
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
                </article>
              ))}
            </div>
          </div>

          {/* Column 2: Freelance Consulting & Corporate Training */}
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-editorial-light-border dark:border-editorial-dark-border">
              <span className="text-sm font-bold text-editorial-light-text dark:text-editorial-dark-text">
                {t.experience.groupFreelance}
              </span>
              <span className="rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 px-2 py-0.5 text-xs font-mono font-medium">
                {t.experience.groupFreelanceBadge}
              </span>
            </div>

            <div className="space-y-4">
              {freelanceExperiences.map((exp) => (
                <article
                  key={exp.id}
                  className="p-4 sm:p-5 rounded-lg border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface dark:bg-editorial-dark-surface space-y-3 hover:border-editorial-light-accent dark:hover:border-editorial-dark-accent transition-colors flex flex-col justify-between"
                >
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
                          <h3 className="text-sm sm:text-base font-bold text-editorial-light-text dark:text-editorial-dark-text truncate">
                            {exp.role[language]}
                          </h3>
                        </div>
                      </div>
                      <div className="shrink-0 inline-flex items-center space-x-1 font-mono text-[11px] text-editorial-light-muted dark:text-editorial-dark-muted pt-0.5">
                        <Calendar className="w-3 h-3" />
                        <span>
                          {exp.start} - {exp.end === "Present" ? t.experience.present : exp.end}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-1 text-xs text-editorial-light-muted dark:text-editorial-dark-muted leading-relaxed list-disc list-outside pl-3.5">
                      {exp.description[language].map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>

                  {exp.tags && (
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-editorial-light-border/50 dark:border-editorial-dark-border/50 mt-1">
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
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
