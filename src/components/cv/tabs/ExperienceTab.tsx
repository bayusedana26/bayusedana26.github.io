"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { formalExperiences, freelanceExperiences } from "@/data/experience";
import { InstitutionalLogo } from "@/components/ui";
import { Calendar, Building, CheckCircle2 } from "lucide-react";

export const ExperienceTab: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div
      role="tabpanel"
      id="panel-experience"
      aria-labelledby="tab-experience"
      className="space-y-8 animate-fadeIn"
    >
      {/* Tab Header Banner */}
      <div className="space-y-1.5 pb-4 border-b border-editorial-light-border dark:border-editorial-dark-border">
        <div className="flex items-center space-x-2 text-xs font-mono font-semibold uppercase tracking-wider text-editorial-light-accent dark:text-editorial-dark-accent">
          <Building className="w-3.5 h-3.5" />
          <span>{language === "id" ? "RIWAYAT KARIR & PENGALAMAN" : "CAREER & WORK HISTORY"}</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-editorial-light-text dark:text-editorial-dark-text">
          {language === "id" ? "Pengalaman Kerja & Konsultasi" : "Work Experience & Advisory"}
        </h2>
        <p className="text-xs sm:text-sm text-editorial-light-muted dark:text-editorial-dark-muted">
          {language === "id"
            ? "Rekam jejak software engineering, analitik data operasional, dan corporate mentoring sejak 2021."
            : "Software engineering, operational data analytics, and corporate mentoring since 2021."}
        </p>
      </div>

      {/* Group 1: Formal In-House Roles */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-editorial-light-text dark:text-editorial-dark-text">
            {language === "id" ? "Peran Formal In-House & Korporat" : "Formal In-House Roles"}
          </h3>
        </div>

        <div className="space-y-4">
          {formalExperiences.map((exp) => (
            <div
              key={exp.id}
              className="rounded-xl border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface dark:bg-editorial-dark-surface p-5 sm:p-6 shadow-xs hover:border-editorial-light-accent dark:hover:border-editorial-dark-accent transition-colors space-y-4"
            >
              {/* Role Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="flex items-start space-x-3.5">
                  <InstitutionalLogo
                    src={exp.logo}
                    alt={exp.company}
                    className="w-10 h-10 p-1.5 shrink-0"
                    size={40}
                  />
                  <div className="space-y-0.5 min-w-0">
                    <h4 className="text-base font-bold text-editorial-light-text dark:text-editorial-dark-text leading-snug">
                      {exp.role[language]}
                    </h4>
                    <p className="text-xs sm:text-sm font-semibold text-editorial-light-accent dark:text-editorial-dark-accent">
                      {exp.company}
                    </p>
                  </div>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-1.5 shrink-0">
                  <div className="inline-flex items-center space-x-1 px-2.5 py-1 rounded bg-editorial-light-bg dark:bg-editorial-dark-bg border border-editorial-light-border/70 dark:border-editorial-dark-border/70 text-xs font-mono text-editorial-light-muted dark:text-editorial-dark-muted">
                    <Calendar className="w-3 h-3 text-editorial-light-accent dark:text-editorial-dark-accent" />
                    <span>
                      {exp.start} - {exp.end}
                    </span>
                  </div>
                  {exp.current && (
                    <span className="text-[10px] font-mono font-medium text-emerald-600 dark:text-emerald-400">
                      ● {language === "id" ? "Posisi Aktif" : "Active"}
                    </span>
                  )}
                </div>
              </div>

              {/* Achievements / Responsibilities */}
              <ul className="space-y-2 pt-1 border-t border-editorial-light-border/60 dark:border-editorial-dark-border/60">
                {exp.description[language].map((bullet, idx) => (
                  <li
                    key={idx}
                    className="flex items-start space-x-2.5 text-xs sm:text-sm text-editorial-light-muted dark:text-editorial-dark-muted leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-editorial-light-accent dark:text-editorial-dark-accent shrink-0 mt-0.5 opacity-80" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Tags */}
              {exp.tags && exp.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-mono border border-editorial-light-border/70 dark:border-editorial-dark-border/70 bg-editorial-light-bg dark:bg-editorial-dark-bg text-editorial-light-text dark:text-editorial-dark-text"
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

      {/* Group 2: Independent Consulting & Technical Training */}
      <div className="space-y-4 pt-4 border-t border-editorial-light-border/60 dark:border-editorial-dark-border/60">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-editorial-light-text dark:text-editorial-dark-text">
            {language === "id"
              ? "Konsultasi Independen & Corporate Training"
              : "Independent Advisory & Corporate Training"}
          </h3>
        </div>

        <div className="space-y-4">
          {freelanceExperiences.map((exp) => (
            <div
              key={exp.id}
              className="rounded-xl border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface dark:bg-editorial-dark-surface p-5 sm:p-6 shadow-xs hover:border-editorial-light-accent dark:hover:border-editorial-dark-accent transition-colors space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="space-y-0.5 min-w-0">
                  <h4 className="text-base font-bold text-editorial-light-text dark:text-editorial-dark-text leading-snug">
                    {exp.role[language]}
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-editorial-light-accent dark:text-editorial-dark-accent">
                    {exp.company}
                  </p>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-1.5 shrink-0">
                  <div className="inline-flex items-center space-x-1 px-2.5 py-1 rounded bg-editorial-light-bg dark:bg-editorial-dark-bg border border-editorial-light-border/70 dark:border-editorial-dark-border/70 text-xs font-mono text-editorial-light-muted dark:text-editorial-dark-muted">
                    <Calendar className="w-3 h-3 text-editorial-light-accent dark:text-editorial-dark-accent" />
                    <span>
                      {exp.start} - {exp.end}
                    </span>
                  </div>
                  {exp.current && (
                    <span className="text-[10px] font-mono font-medium text-emerald-600 dark:text-emerald-400">
                      ● {language === "id" ? "Proyek Berkelanjutan" : "Ongoing"}
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-2 pt-1 border-t border-editorial-light-border/60 dark:border-editorial-dark-border/60">
                {exp.description[language].map((bullet, idx) => (
                  <li
                    key={idx}
                    className="flex items-start space-x-2.5 text-xs sm:text-sm text-editorial-light-muted dark:text-editorial-dark-muted leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5 opacity-80" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {exp.tags && exp.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-mono border border-editorial-light-border/70 dark:border-editorial-dark-border/70 bg-editorial-light-bg dark:bg-editorial-dark-bg text-editorial-light-text dark:text-editorial-dark-text"
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
  );
};
