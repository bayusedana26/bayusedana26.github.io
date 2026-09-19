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

            <div className="space-y-6">
              {formalExperiences.map((exp) => (
                <article
                  key={exp.id}
                  className="p-6 rounded-lg border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface dark:bg-editorial-dark-surface space-y-3.5 hover:border-editorial-light-accent dark:hover:border-editorial-dark-accent transition-colors"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex items-start space-x-3.5">
                      {exp.logo && (
                        <InstitutionalLogo
                          src={exp.logo}
                          alt={exp.company}
                          className="w-11 h-11 p-1.5"
                          size={44}
                        />
                      )}
                      <div>
                        <div className="font-semibold text-xs font-mono text-editorial-light-accent dark:text-editorial-dark-accent">
                          {exp.company}
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-editorial-light-text dark:text-editorial-dark-text">
                          {exp.role[language]}
                        </h3>
                      </div>
                    </div>
                    <div className="inline-flex items-center space-x-1.5 font-mono text-xs text-editorial-light-muted dark:text-editorial-dark-muted pt-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>
                        {exp.start} - {exp.end === "Present" ? t.experience.present : exp.end}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-1.5 text-xs sm:text-sm text-editorial-light-muted dark:text-editorial-dark-muted leading-relaxed list-disc list-outside pl-4">
                    {exp.description[language].map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>

                  {exp.tags && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-bg dark:bg-editorial-dark-bg px-2 py-0.5 text-[11px] font-mono text-editorial-light-text dark:text-editorial-dark-text"
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

            <p className="text-xs sm:text-sm text-editorial-light-muted dark:text-editorial-dark-muted leading-relaxed">
              {t.experience.freelanceIntro}
            </p>

            <div className="space-y-6">
              {freelanceExperiences.map((exp) => (
                <article
                  key={exp.id}
                  className="p-6 rounded-lg border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface dark:bg-editorial-dark-surface space-y-3.5 hover:border-editorial-light-accent dark:hover:border-editorial-dark-accent transition-colors"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <div className="font-semibold text-xs font-mono text-editorial-light-accent dark:text-editorial-dark-accent">
                        {exp.company}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-editorial-light-text dark:text-editorial-dark-text">
                        {exp.role[language]}
                      </h3>
                    </div>
                    <div className="inline-flex items-center space-x-1.5 font-mono text-xs text-editorial-light-muted dark:text-editorial-dark-muted">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>
                        {exp.start} - {exp.end === "Present" ? t.experience.present : exp.end}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-1.5 text-xs sm:text-sm text-editorial-light-muted dark:text-editorial-dark-muted leading-relaxed list-disc list-outside pl-4">
                    {exp.description[language].map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>

                  {exp.tags && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-bg dark:bg-editorial-dark-bg px-2 py-0.5 text-[11px] font-mono text-editorial-light-text dark:text-editorial-dark-text"
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
