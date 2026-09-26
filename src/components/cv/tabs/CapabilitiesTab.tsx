"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { institutionalPartners } from "@/data/experience";
import { InstitutionalLogo, TechIcon } from "@/components/ui";
import { Cpu, Building, PlusCircle } from "lucide-react";

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

/* ─── What I Do ─────────────────────────────────────────────────────────── */
const domains = [
  {
    tag: "01",
    en: "Backend & REST API Engineering",
    id: "Backend & REST API Engineering",
    detail: {
      en: "Node.js · Express · FastAPI · PostgreSQL · MySQL · Auth",
      id: "Node.js · Express · FastAPI · PostgreSQL · MySQL · Auth",
    },
  },
  {
    tag: "02",
    en: "Applied Machine Learning & Data Analytics",
    id: "Machine Learning Terapan & Analitik Data",
    detail: {
      en: "Python · Pandas · TensorFlow · OpenCV · Tableau · Colab",
      id: "Python · Pandas · TensorFlow · OpenCV · Tableau · Colab",
    },
  },
  {
    tag: "03",
    en: "Corporate Training & Technical Advisory",
    id: "Pelatihan Korporat & Konsultasi Teknis",
    detail: {
      en: "In-house workshops · BNSP coaching · Curriculum design · 200+ mentees",
      id: "Workshop in-house · BNSP coaching · Desain kurikulum · 200+ mentee",
    },
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

      {/* What I Do — compact domain list */}
      <div className="space-y-2">
        <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-editorial-light-muted dark:text-editorial-dark-muted">
          {language === "id" ? "Apa yang saya kerjakan" : "What I do"}
        </h3>
        <div className="space-y-1.5">
          {domains.map((d) => (
            <div
              key={d.tag}
              className="flex items-start space-x-3 px-4 py-3 rounded-xl border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface dark:bg-editorial-dark-surface"
            >
              <span className="text-[10px] font-mono font-bold text-editorial-light-accent dark:text-editorial-dark-accent shrink-0 mt-px">
                {d.tag}
              </span>
              <div className="min-w-0 space-y-0.5">
                <p className="text-xs font-bold text-editorial-light-text dark:text-editorial-dark-text leading-snug">
                  {language === "id" ? d.id : d.en}
                </p>
                <p className="text-[11px] font-mono text-editorial-light-muted dark:text-editorial-dark-muted leading-relaxed">
                  {d.detail[language]}
                </p>
              </div>
            </div>
          ))}
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
