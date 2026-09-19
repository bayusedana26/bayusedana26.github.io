"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Code2, Database, Network, BookOpen, Layers } from "lucide-react";
import { TechIcon, BrandIcon } from "@/components/ui";

interface TechStackItem {
  name: string;
  icon: string;
  role: {
    en: string;
    id: string;
  };
}

const techStackItems: TechStackItem[] = [
  {
    name: "Python",
    icon: "python",
    role: { en: "Data Analytics & ML", id: "Analitik Data & ML" },
  },
  {
    name: "Node.js",
    icon: "nodejs",
    role: { en: "Backend & REST APIs", id: "Backend & REST API" },
  },
  {
    name: "SQL",
    icon: "sql",
    role: { en: "Database & Queries", id: "Database & Kueri" },
  },
  {
    name: "TypeScript",
    icon: "typescript",
    role: { en: "Type-Safe Web Systems", id: "Sistem Web Tipe Aman" },
  },
  {
    name: "Google Colab",
    icon: "googlecolab",
    role: { en: "EDA & ML Notebooks", id: "Notebook EDA & ML" },
  },
  {
    name: "Canva",
    icon: "canva",
    role: { en: "Executive Pitch Decks", id: "Pitch Deck Eksekutif" },
  },
  {
    name: "Tableau",
    icon: "tableau",
    role: { en: "BI & Dashboards", id: "BI & Dasbor Interaktif" },
  },
  {
    name: "Next.js",
    icon: "nextjs",
    role: { en: "Full-Stack Web App", id: "Aplikasi Web Full-Stack" },
  },
  {
    name: "Git",
    icon: "github",
    role: { en: "Version Control & CI", id: "Manajemen Versi & Repo" },
  },
  {
    name: "Pandas",
    icon: "pandas",
    role: { en: "Data Wrangling", id: "Olah & Bersih Data" },
  },
];

export const CapabilityIndex: React.FC = () => {
  const { language, t } = useLanguage();

  const capabilities = [
    {
      key: "build",
      icon: Code2,
      data: t.capability.items.build,
    },
    {
      key: "analyze",
      icon: Database,
      data: t.capability.items.analyze,
    },
    {
      key: "connect",
      icon: Network,
      data: t.capability.items.connect,
    },
    {
      key: "teach",
      icon: BookOpen,
      data: t.capability.items.teach,
    },
  ];

  return (
    <section id="capabilities" className="w-full section-spacing border-b border-editorial-light-border dark:border-editorial-dark-border">
      <div className="editorial-container space-y-12 md:space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-editorial-light-accent dark:text-editorial-dark-accent font-semibold">
            {t.capability.sectionTag}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-editorial-light-text dark:text-editorial-dark-text leading-tight">
            {t.capability.headline}
          </h2>
          <p className="text-base text-editorial-light-muted dark:text-editorial-dark-muted">
            {t.capability.sub}
          </p>
        </div>

        {/* Unified Tech Stack Grid with Clear Prominent HD Icons */}
        <div className="rounded-xl border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface/60 dark:bg-editorial-dark-surface/60 p-6 md:p-8 space-y-6 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-editorial-light-border/70 dark:border-editorial-dark-border/70 pb-4">
            <div className="flex items-center space-x-2.5">
              <Layers className="w-4 h-4 text-editorial-light-accent dark:text-editorial-dark-accent" />
              <h3 className="text-sm sm:text-base font-bold text-editorial-light-text dark:text-editorial-dark-text tracking-tight">
                {language === "id" ? "Stack Teknologi & Perangkat Lunak" : "Core Tech Stack & Tooling"}
              </h3>
            </div>
            <span className="font-mono text-[11px] text-editorial-light-muted dark:text-editorial-dark-muted">
              {language === "id"
                ? "Perangkat lunak utama dalam software, data & presentasi"
                : "Primary tools across software, data & executive presentations"}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {techStackItems.map((tool) => (
              <div
                key={tool.name}
                className="p-3.5 rounded-lg border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-bg dark:bg-editorial-dark-bg flex items-center space-x-3.5 hover:border-editorial-light-accent dark:hover:border-editorial-dark-accent hover:shadow-xs transition-all duration-150 group"
              >
                <div className="p-2 rounded-md bg-editorial-light-surface dark:bg-editorial-dark-surface border border-editorial-light-border/70 dark:border-editorial-dark-border/70 shrink-0 group-hover:scale-105 transition-transform">
                  <BrandIcon name={tool.icon} size={24} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs sm:text-sm font-bold text-editorial-light-text dark:text-editorial-dark-text truncate">
                    {tool.name}
                  </div>
                  <div className="text-[11px] font-mono text-editorial-light-muted dark:text-editorial-dark-muted truncate">
                    {tool.role[language]}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visually Elevated 4-Pillar Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            const accentGradients = [
              "from-blue-600 to-cyan-500",
              "from-teal-600 to-emerald-500",
              "from-emerald-600 to-teal-500",
              "from-amber-600 to-orange-500",
            ];
            const numTag = `0${idx + 1}`;

            return (
              <div
                key={cap.key}
                className="relative flex flex-col justify-between rounded-xl border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface dark:bg-editorial-dark-surface p-6 hover:border-editorial-light-accent dark:hover:border-editorial-dark-accent hover:shadow-md transition-all duration-200 group overflow-hidden"
              >
                {/* Top Accent Gradient Bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${accentGradients[idx]} opacity-70 group-hover:opacity-100 transition-opacity`}
                />

                <div className="space-y-4">
                  {/* Top Row: Numeric Index & Elevated Icon */}
                  <div className="flex items-center justify-between pt-1">
                    <span className="font-mono text-sm font-bold tracking-widest text-editorial-light-muted dark:text-editorial-dark-muted">
                      {numTag} / {cap.key.toUpperCase()}
                    </span>
                    <div className="p-2.5 rounded-lg bg-editorial-light-bg dark:bg-editorial-dark-bg border border-editorial-light-border/80 dark:border-editorial-dark-border/80 text-editorial-light-text dark:text-editorial-dark-text group-hover:border-editorial-light-accent dark:group-hover:border-editorial-dark-accent group-hover:scale-105 transition-all shadow-xs">
                      <Icon className="w-5 h-5 text-editorial-light-accent dark:text-editorial-dark-accent" />
                    </div>
                  </div>

                  {/* Title & Domain Subtitle */}
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-bold tracking-tight text-editorial-light-text dark:text-editorial-dark-text group-hover:text-editorial-light-accent dark:group-hover:text-editorial-dark-accent transition-colors">
                      {cap.data.title}
                    </h3>
                    <div className="text-xs font-mono font-semibold text-editorial-light-accent dark:text-editorial-dark-accent">
                      {cap.data.subtitle}
                    </div>
                  </div>

                  {/* Descriptive Narrative */}
                  <p className="text-xs sm:text-sm text-editorial-light-muted dark:text-editorial-dark-muted leading-relaxed">
                    {cap.data.desc}
                  </p>
                </div>

                {/* Skill tags with inline micro-icons */}
                <div className="pt-5 mt-5 border-t border-editorial-light-border/60 dark:border-editorial-dark-border/60 flex flex-wrap gap-1.5">
                  {cap.data.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center space-x-1.5 rounded-md border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-bg dark:bg-editorial-dark-bg px-2 py-1 text-[11px] font-mono text-editorial-light-text dark:text-editorial-dark-text hover:border-editorial-light-accent dark:hover:border-editorial-dark-accent transition-colors"
                    >
                      <TechIcon name={skill} size={12} className="w-3 h-3 shrink-0" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

