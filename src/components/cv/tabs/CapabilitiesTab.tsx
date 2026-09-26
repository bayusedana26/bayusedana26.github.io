"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { institutionalPartners } from "@/data/experience";
import { InstitutionalLogo, TechIcon } from "@/components/ui";
import { Cpu, Building, PlusCircle, Code2, BarChart3, GraduationCap } from "lucide-react";

/* ─── Skill Groups ──────────────────────────────────────────────────────── */
const skillGroups = [
  {
    group: { en: "Backend & APIs", id: "Backend & API" },
    skills: [
      { name: "Node.js",     icon: "nodejs" },
      { name: "Express.js",  icon: "express" },
      { name: "FastAPI",     icon: "fastapi" },
      { name: "Flask",       icon: "flask" },
      { name: "Passport.js", icon: "passport" },
      { name: "REST API",    icon: "restapi" },
    ],
  },
  {
    group: { en: "Data & ML", id: "Data & ML" },
    skills: [
      { name: "Python",      icon: "python" },
      { name: "Pandas",      icon: "pandas" },
      { name: "NumPy",       icon: "numpy" },
      { name: "TensorFlow",  icon: "tensorflow" },
      { name: "OpenCV",      icon: "opencv" },
      { name: "Matplotlib",  icon: "matplotlib" },
      { name: "Streamlit",   icon: "streamlit" },
    ],
  },
  {
    group: { en: "Databases", id: "Database" },
    skills: [
      { name: "PostgreSQL",  icon: "postgresql" },
      { name: "MySQL",       icon: "mysql" },
    ],
  },
  {
    group: { en: "Tooling", id: "Alat & Lainnya" },
    skills: [
      { name: "TypeScript",  icon: "typescript" },
      { name: "Git",         icon: "git" },
    ],
  },
];

/* ─── Domain cards config ───────────────────────────────────────────────── */
const domains = [
  {
    icon: Code2,
    // Tailwind full class strings — no template literals so purge works
    iconBg:     "bg-blue-500/10 dark:bg-blue-500/15",
    iconColor:  "text-blue-500",
    cardBorder: "border-blue-500/20 dark:border-blue-500/25",
    cardBg:     "bg-gradient-to-br from-blue-500/5 to-transparent dark:from-blue-500/8",
    tagBg:      "bg-blue-500/10 dark:bg-blue-500/15 text-blue-700 dark:text-blue-300",
    title:      { en: "Backend & REST API", id: "Backend & REST API" },
    sub:        { en: "Software Engineering", id: "Software Engineering" },
    tags:       ["Node.js", "Express", "FastAPI", "PostgreSQL", "TypeScript"],
  },
  {
    icon: BarChart3,
    iconBg:     "bg-violet-500/10 dark:bg-violet-500/15",
    iconColor:  "text-violet-500",
    cardBorder: "border-violet-500/20 dark:border-violet-500/25",
    cardBg:     "bg-gradient-to-br from-violet-500/5 to-transparent dark:from-violet-500/8",
    tagBg:      "bg-violet-500/10 dark:bg-violet-500/15 text-violet-700 dark:text-violet-300",
    title:      { en: "Data & ML Engineering", id: "Data & ML Engineering" },
    sub:        { en: "Analytics & AI Models", id: "Analitik & Model AI" },
    tags:       ["Python", "Pandas", "TensorFlow", "OpenCV", "Tableau"],
  },
  {
    icon: GraduationCap,
    iconBg:     "bg-emerald-500/10 dark:bg-emerald-500/15",
    iconColor:  "text-emerald-500",
    cardBorder: "border-emerald-500/20 dark:border-emerald-500/25",
    cardBg:     "bg-gradient-to-br from-emerald-500/5 to-transparent dark:from-emerald-500/8",
    tagBg:      "bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300",
    title:      { en: "Corporate Training", id: "Pelatihan Korporat" },
    sub:        { en: "Advisory & Curriculum Design", id: "Advisory & Desain Kurikulum" },
    tags:       ["In-house", "BNSP", "Curriculum", "200+ mentees"],
  },
];

/* ─── Component ─────────────────────────────────────────────────────────── */
export const CapabilitiesTab: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div
      role="tabpanel"
      id="panel-capabilities"
      aria-labelledby="tab-capabilities"
      className="space-y-8 animate-fadeIn"
    >
      {/* Header */}
      <div className="space-y-1.5 pb-4 border-b border-editorial-light-border dark:border-editorial-dark-border">
        <div className="flex items-center space-x-2 text-xs font-mono font-semibold uppercase tracking-wider text-editorial-light-accent dark:text-editorial-dark-accent">
          <Cpu className="w-3.5 h-3.5" />
          <span>{language === "id" ? "KEAHLIAN TEKNIS" : "TECHNICAL SKILLS"}</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-editorial-light-text dark:text-editorial-dark-text">
          {language === "id" ? "Keahlian & Spesialisasi" : "Skills & Specialisations"}
        </h2>
        <p className="text-xs sm:text-sm text-editorial-light-muted dark:text-editorial-dark-muted">
          {language === "id"
            ? "Backend engineering, data analytics terapan, dan advisory lintas institusi."
            : "Backend engineering, applied data analytics, and advisory across institutions."}
        </p>
      </div>

      {/* What I Do — rich domain cards */}
      <div className="space-y-3">
        <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-editorial-light-muted dark:text-editorial-dark-muted">
          {language === "id" ? "Apa yang saya kerjakan" : "What I do"}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {domains.map((d, i) => {
            const Icon = d.icon;
            return (
              <div
                key={i}
                className={`rounded-xl border p-4 space-y-3 ${d.cardBorder} ${d.cardBg}`}
              >
                {/* Icon + number */}
                <div className="flex items-center justify-between">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${d.iconBg}`}>
                    <Icon className={`w-5 h-5 ${d.iconColor}`} />
                  </div>
                  <span className={`text-[10px] font-mono font-bold ${d.iconColor} opacity-60`}>
                    0{i + 1}
                  </span>
                </div>

                {/* Title + sub */}
                <div className="space-y-0.5">
                  <p className="text-sm font-bold text-editorial-light-text dark:text-editorial-dark-text leading-snug">
                    {d.title[language]}
                  </p>
                  <p className={`text-xs font-medium ${d.iconColor}`}>
                    {d.sub[language]}
                  </p>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {d.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`inline-block px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold ${d.tagBg}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tech Stack — grouped, icon pills */}
      <div className="space-y-4">
        <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-editorial-light-muted dark:text-editorial-dark-muted">
          {language === "id" ? "Stack & Tools" : "Stack & Tools"}
        </h3>

        <div className="space-y-3">
          {skillGroups.map((grp) => (
            <div key={grp.group.en} className="space-y-1.5">
              <span className="text-[10px] font-mono text-editorial-light-muted dark:text-editorial-dark-muted uppercase tracking-wider">
                {grp.group[language]}
              </span>
              <div className="flex flex-wrap gap-2">
                {grp.skills.map((s) => (
                  <div
                    key={s.name}
                    className="inline-flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg border border-editorial-light-border/80 dark:border-editorial-dark-border/80 bg-editorial-light-surface dark:bg-editorial-dark-surface hover:border-editorial-light-accent dark:hover:border-editorial-dark-accent transition-colors shadow-2xs"
                  >
                    <TechIcon name={s.icon} size={16} />
                    <span className="text-xs font-medium text-editorial-light-text dark:text-editorial-dark-text">
                      {s.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Institutional Partners */}
      <div className="space-y-4 pt-4 border-t border-editorial-light-border/60 dark:border-editorial-dark-border/60">
        <div className="flex items-center space-x-2">
          <Building className="w-3.5 h-3.5 text-editorial-light-accent dark:text-editorial-dark-accent" />
          <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-editorial-light-muted dark:text-editorial-dark-muted">
            {language === "id" ? "Klien & Mitra Institusi" : "Training Clients & Partners"}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {institutionalPartners.map((inst) => (
            <div
              key={inst.name}
              className="flex items-center space-x-2.5 p-2.5 rounded-lg border border-editorial-light-border/70 dark:border-editorial-dark-border/70 bg-editorial-light-surface dark:bg-editorial-dark-surface"
            >
              <InstitutionalLogo
                src={inst.logo}
                alt={inst.name}
                className="w-7 h-7 p-0.5 shrink-0"
                size={28}
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

          {/* NDA footnote card */}
          <div className="flex items-center space-x-2.5 p-2.5 rounded-lg border border-dashed border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-bg/50 dark:bg-editorial-dark-bg/50">
            <div className="w-7 h-7 rounded-lg bg-editorial-light-border/50 dark:bg-editorial-dark-border/50 flex items-center justify-center shrink-0">
              <PlusCircle className="w-3.5 h-3.5 text-editorial-light-accent dark:text-editorial-dark-accent" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-editorial-light-text dark:text-editorial-dark-text">
                {language === "id" ? "+ Institusi lainnya" : "+ More clients"}
              </p>
              <p className="text-[10px] font-mono text-editorial-light-muted dark:text-editorial-dark-muted">
                NDA
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
