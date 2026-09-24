"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { institutionalPartners } from "@/data/experience";
import { InstitutionalLogo, TechIcon } from "@/components/ui";
import { Cpu, Code2, Database, BookOpen, Building } from "lucide-react";

interface TechItem {
  name: string;
  icon: string;
  role: { en: string; id: string };
}

const techItems: TechItem[] = [
  { name: "Python", icon: "python", role: { en: "Data Analytics & ML", id: "Analitik Data & ML" } },
  { name: "Node.js", icon: "nodejs", role: { en: "Backend & REST APIs", id: "Backend & REST API" } },
  { name: "SQL", icon: "sql", role: { en: "Database & Queries", id: "Database & Kueri" } },
  { name: "TypeScript", icon: "typescript", role: { en: "Type-Safe Web Systems", id: "Sistem Web Tipe Aman" } },
  { name: "Google Colab", icon: "googlecolab", role: { en: "EDA & ML Notebooks", id: "Notebook EDA & ML" } },
  { name: "Tableau", icon: "tableau", role: { en: "BI & Dashboards", id: "BI & Dasbor Interaktif" } },
  { name: "Next.js", icon: "nextjs", role: { en: "Full-Stack Web App", id: "Aplikasi Web Full-Stack" } },
  { name: "Git", icon: "github", role: { en: "Version Control", id: "Version Control" } },
  { name: "PostgreSQL", icon: "sql", role: { en: "Relational Database", id: "Database Relasional" } },
  { name: "Canva", icon: "canva", role: { en: "Executive Pitch Decks", id: "Pitch Deck Eksekutif" } },
];

export const CapabilitiesTab: React.FC = () => {
  const { language } = useLanguage();

  const pillars = [
    {
      icon: <Code2 className="w-5 h-5 text-blue-500" />,
      tag: "01 / BUILD",
      title: language === "id" ? "Bangun" : "Build",
      subtitle: language === "id" ? "Software, Sistem, dan API" : "Software, Systems, and APIs",
      desc:
        language === "id"
          ? "Pengembangan software, fundamental backend, perancangan sistem dan alur data, desain database, dan integrasi API yang andal."
          : "Full-stack web systems, backend services, relational database schemas, and dependable third-party API integrations.",
    },
    {
      icon: <Database className="w-5 h-5 text-indigo-500" />,
      tag: "02 / ANALYZE",
      title: language === "id" ? "Analisis" : "Analyze",
      subtitle: language === "id" ? "Data, ML, dan Wawasan Bisnis" : "Data, ML, and Business Insights",
      desc:
        language === "id"
          ? "Pemodelan machine learning terapan, pengolahan dataset operasional, analisis tren, dan visualisasi interaktif via Tableau."
          : "Applied machine learning pipelines, exploratory data analysis, pattern recognition, and executive Tableau BI dashboards.",
    },
    {
      icon: <BookOpen className="w-5 h-5 text-emerald-500" />,
      tag: "03 / GUIDE",
      title: language === "id" ? "Pandu" : "Guide",
      subtitle: language === "id" ? "Training, Kurikulum, dan Konsultasi" : "Training, Curriculum, and Advisory",
      desc:
        language === "id"
          ? "Penyusunan modul pelatihan teknis, corporate in-house workshop institusi, pembimbingan BNSP, dan presentasi strategis."
          : "Hands-on corporate training workshops, technical curriculum design, BNSP mentoring, and executive pitch deck craftsmanship.",
    },
  ];

  return (
    <div
      role="tabpanel"
      id="panel-capabilities"
      aria-labelledby="tab-capabilities"
      className="space-y-8 animate-fadeIn"
    >
      {/* Header Banner */}
      <div className="space-y-1.5 pb-4 border-b border-editorial-light-border dark:border-editorial-dark-border">
        <div className="flex items-center space-x-2 text-xs font-mono font-semibold uppercase tracking-wider text-editorial-light-accent dark:text-editorial-dark-accent">
          <Cpu className="w-3.5 h-3.5" />
          <span>{language === "id" ? "DISIPLIN TEKNIS & KAPABILITAS" : "TECHNICAL DOMAINS & SKILLS"}</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-editorial-light-text dark:text-editorial-dark-text">
          {language === "id" ? "Keahlian Teknis & Mitra Kolaborasi" : "Technical Capabilities & Partners"}
        </h2>
        <p className="text-xs sm:text-sm text-editorial-light-muted dark:text-editorial-dark-muted">
          {language === "id"
            ? "Perpaduan software engineering modern, data intelligence terapan, dan pengalaman advisory lintas institusi."
            : "A synthesis of modern software engineering, applied data analytics, and institutional technical advisory."}
        </p>
      </div>

      {/* 3 Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {pillars.map((pillar) => (
          <div
            key={pillar.tag}
            className="rounded-xl border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface dark:bg-editorial-dark-surface p-5 shadow-xs space-y-3"
          >
            <div className="flex items-center justify-between">
              {pillar.icon}
              <span className="text-[10px] font-mono font-semibold text-editorial-light-muted dark:text-editorial-dark-muted">
                {pillar.tag}
              </span>
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-editorial-light-text dark:text-editorial-dark-text">
                {pillar.title}
              </h3>
              <p className="text-xs font-semibold text-editorial-light-accent dark:text-editorial-dark-accent">
                {pillar.subtitle}
              </p>
            </div>
            <p className="text-xs text-editorial-light-muted dark:text-editorial-dark-muted leading-relaxed">
              {pillar.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Tech Stack Inventory */}
      <div className="space-y-4">
        <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-editorial-light-text dark:text-editorial-dark-text">
          {language === "id" ? "Daftar Stack & Peran Penggunaan" : "Stack Inventory & Application Roles"}
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {techItems.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center text-center p-3 rounded-lg border border-editorial-light-border/70 dark:border-editorial-dark-border/70 bg-editorial-light-surface dark:bg-editorial-dark-surface space-y-2 hover:border-editorial-light-accent dark:hover:border-editorial-dark-accent transition-colors"
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <TechIcon name={tech.icon} size={28} />
              </div>
              <div className="space-y-0.5">
                <span className="block text-xs font-bold text-editorial-light-text dark:text-editorial-dark-text">
                  {tech.name}
                </span>
                <span className="block text-[10px] font-mono text-editorial-light-muted dark:text-editorial-dark-muted leading-tight">
                  {tech.role[language]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Institutional Partners & Trusted Entities */}
      <div className="space-y-4 pt-4 border-t border-editorial-light-border/60 dark:border-editorial-dark-border/60">
        <div className="flex items-center space-x-2">
          <Building className="w-4 h-4 text-editorial-light-accent dark:text-editorial-dark-accent" />
          <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-editorial-light-text dark:text-editorial-dark-text">
            {language === "id"
              ? "Institusi & Klien yang Pernah Bekerja Sama"
              : "Institutional Partners & Training Clients"}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {institutionalPartners.map((inst) => (
            <div
              key={inst.name}
              className="flex items-center space-x-3 p-3 rounded-lg border border-editorial-light-border/70 dark:border-editorial-dark-border/70 bg-editorial-light-surface dark:bg-editorial-dark-surface hover:border-editorial-light-accent dark:hover:border-editorial-dark-accent transition-colors"
            >
              <InstitutionalLogo
                src={inst.logo}
                alt={inst.name}
                className="w-8 h-8 p-1 shrink-0"
                size={32}
              />
              <div className="min-w-0">
                <p className="text-xs font-semibold text-editorial-light-text dark:text-editorial-dark-text truncate">
                  {inst.name}
                </p>
                <p className="text-[10px] font-mono text-editorial-light-muted dark:text-editorial-dark-muted truncate">
                  {inst.scope[language]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
