"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { institutionalPartners, educationList } from "@/data/experience";
import { Building, GraduationCap } from "lucide-react";
import { InstitutionalLogo } from "@/components/ui";

export const AboutSection: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="about" className="w-full section-spacing border-b border-editorial-light-border dark:border-editorial-dark-border">
      <div className="editorial-container space-y-16">
        {/* About & Work Approach Narrative */}
        <div className="space-y-6 max-w-4xl">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-editorial-light-accent dark:text-editorial-dark-accent font-semibold">
              {language === "id" ? "TENTANG & PENDEKATAN KERJA" : "ABOUT & WORK ETHIC"}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-editorial-light-text dark:text-editorial-dark-text leading-tight">
              {t.about.title}
            </h2>
          </div>

          <div className="space-y-4 text-base sm:text-lg text-editorial-light-muted dark:text-editorial-dark-muted leading-relaxed text-justify [text-justify:inter-word]">
            <p
              className="text-justify [text-justify:inter-word]"
              dangerouslySetInnerHTML={{
                __html: t.about.p1.replace(/\*\*(.*?)\*\*/g, '<strong class="text-editorial-light-text dark:text-editorial-dark-text font-semibold">$1</strong>'),
              }}
            />
            <p
              className="text-justify [text-justify:inter-word]"
              dangerouslySetInnerHTML={{
                __html: t.about.p2.replace(/\*\*(.*?)\*\*/g, '<strong class="text-editorial-light-text dark:text-editorial-dark-text font-semibold">$1</strong>'),
              }}
            />
            <p
              className="text-justify [text-justify:inter-word]"
              dangerouslySetInnerHTML={{
                __html: t.about.p3.replace(/\*\*(.*?)\*\*/g, '<strong class="text-editorial-light-text dark:text-editorial-dark-text font-semibold">$1</strong>'),
              }}
            />
          </div>
        </div>

        {/* Institutional Partners & Clients Grid */}
        <div className="space-y-6">
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-xs font-mono font-semibold uppercase tracking-wider text-editorial-light-accent dark:text-editorial-dark-accent">
              <Building className="w-4 h-4" />
              <span>{t.institutions.title}</span>
            </div>
            <p className="text-sm text-editorial-light-muted dark:text-editorial-dark-muted">
              {t.institutions.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {institutionalPartners.map((inst, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface dark:bg-editorial-dark-surface flex items-start space-x-3.5 hover:border-editorial-light-accent dark:hover:border-editorial-dark-accent transition-all duration-200 shadow-xs"
              >
                <InstitutionalLogo
                  src={inst.logo}
                  alt={inst.name}
                  className="w-10 h-10 p-1.5"
                  size={40}
                />
                <div className="space-y-1 min-w-0 flex-1">
                  <span className="font-semibold text-sm text-editorial-light-text dark:text-editorial-dark-text block">
                    {inst.name}
                  </span>
                  <div className="text-xs font-mono text-editorial-light-muted dark:text-editorial-dark-muted">
                    {inst.scope[language]}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Many more institutions footnote indicator */}
          <div className="flex items-center justify-center pt-1">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-editorial-light-border/80 dark:border-editorial-dark-border/80 bg-editorial-light-surface/50 dark:bg-editorial-dark-surface/50 text-xs font-mono text-editorial-light-muted dark:text-editorial-dark-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-editorial-light-accent dark:bg-editorial-dark-accent" />
              <span>
                {language === "id"
                  ? "+ dan berbagai institusi perbankan, universitas & organisasi lainnya"
                  : "+ and many more partner institutions, universities & organizations"}
              </span>
            </div>
          </div>
        </div>

        {/* Education Section (Understated / Compact Background Credentials) */}
        <div className="space-y-3 pt-6 border-t border-editorial-light-border/60 dark:border-editorial-dark-border/60">
          <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-wider text-editorial-light-muted dark:text-editorial-dark-muted font-medium">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{t.education.title}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {educationList.map((edu, idx) => (
              <div
                key={idx}
                className="py-2.5 px-3.5 rounded-md border border-editorial-light-border/60 dark:border-editorial-dark-border/60 bg-editorial-light-surface/40 dark:bg-editorial-dark-surface/40 flex items-center space-x-3 text-xs"
              >
                <InstitutionalLogo
                  src={edu.logo}
                  alt={edu.institution}
                  className="w-7 h-7 p-1 rounded shrink-0"
                  size={28}
                />
                <div className="min-w-0 flex-1 leading-snug">
                  <div className="font-semibold text-xs text-editorial-light-text dark:text-editorial-dark-text truncate">
                    {edu.institution}
                  </div>
                  <div className="text-[11px] text-editorial-light-muted dark:text-editorial-dark-muted truncate">
                    {edu.degree[language]}
                  </div>
                </div>
                <div className="shrink-0 font-mono text-[10px] text-editorial-light-muted dark:text-editorial-dark-muted">
                  {typeof edu.period === "object" ? edu.period[language] : edu.period}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
