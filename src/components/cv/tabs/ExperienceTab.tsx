"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  formalExperiences,
  freelanceExperiences,
  institutionalPartners,
} from "@/data/experience";
import { InstitutionalLogo, TechIcon } from "@/components/ui";
import {
  Calendar,
  Building,
  CheckCircle2,
  Code2,
  BarChart3,
  GraduationCap,
  Briefcase,
  Layers,
  Cpu,
  PlusCircle,
} from "lucide-react";

/* ─── Domain Focus Config ────────────────────────────────────────────────── */
const domains = [
  {
    icon: Code2,
    iconBg: "bg-blue-500/10 dark:bg-blue-500/15",
    iconColor: "text-blue-500",
    cardBorder: "border-blue-500/20 dark:border-blue-500/25",
    cardBg: "bg-gradient-to-br from-blue-500/5 to-transparent dark:from-blue-500/8",
    tagBg: "bg-blue-500/10 dark:bg-blue-500/15 text-blue-700 dark:text-blue-300",
    title: { en: "Backend & REST API", id: "Backend & REST API" },
    sub: {
      en: "Enterprise Services & Integrations",
      id: "Layanan Backend & Integrasi Sistem",
    },
    desc: {
      en: "Building performant RESTful APIs, payment gateway reconciliations, and server infrastructure runbooks.",
      id: "Membangun RESTful API performa tinggi, rekonsiliasi payment gateway, dan dokumentasi server.",
    },
    tags: ["Node.js", "Express", "FastAPI", "PostgreSQL"],
  },
  {
    icon: BarChart3,
    iconBg: "bg-violet-500/10 dark:bg-violet-500/15",
    iconColor: "text-violet-500",
    cardBorder: "border-violet-500/20 dark:border-violet-500/25",
    cardBg: "bg-gradient-to-br from-violet-500/5 to-transparent dark:from-violet-500/8",
    tagBg: "bg-violet-500/10 dark:bg-violet-500/15 text-violet-700 dark:text-violet-300",
    title: { en: "Machine Learning & Analytics", id: "Machine Learning & Analitik" },
    sub: {
      en: "Data Pipelines & Applied AI",
      id: "Pipeline Data & AI Terapan",
    },
    desc: {
      en: "Applied predictive modeling, operational data dashboards, transaction metrics, and AI workflow automation.",
      id: "Pemodelan prediktif terapan, dashboard analitik operasional, metrik transaksi, dan automasi AI.",
    },
    tags: ["Python", "Pandas", "TensorFlow", "OpenCV"],
  },
  {
    icon: GraduationCap,
    iconBg: "bg-emerald-500/10 dark:bg-emerald-500/15",
    iconColor: "text-emerald-500",
    cardBorder: "border-emerald-500/20 dark:border-emerald-500/25",
    cardBg: "bg-gradient-to-br from-emerald-500/5 to-transparent dark:from-emerald-500/8",
    tagBg: "bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300",
    title: { en: "Corporate Training & Mentoring", id: "Pelatihan & Mentoring" },
    sub: {
      en: "Institutional Capacity Building",
      id: "Peningkatan Kapasitas Institusi",
    },
    desc: {
      en: "Delivered hands-on enterprise workshops, university guest lectures, and guided 200+ practitioners to certification.",
      id: "Pelatihan in-house instansi, kuliah tamu kampus, dan bimbingan 200+ peserta menuju sertifikasi.",
    },
    tags: ["BNSP Coaching", "In-House Training", "Curriculum", "200+ Mentees"],
  },
];

/* ─── Categorized Technical Stack ─────────────────────────────────────────── */
const skillGroups = [
  {
    group: { en: "Backend & APIs", id: "Backend & API" },
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "express" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "Flask", icon: "flask" },
      { name: "Passport.js", icon: "passport" },
      { name: "REST API", icon: "restapi" },
    ],
  },
  {
    group: { en: "Data & ML", id: "Data & ML" },
    skills: [
      { name: "Python", icon: "python" },
      { name: "Pandas", icon: "pandas" },
      { name: "NumPy", icon: "numpy" },
      { name: "TensorFlow", icon: "tensorflow" },
      { name: "OpenCV", icon: "opencv" },
      { name: "Matplotlib", icon: "matplotlib" },
      { name: "Streamlit", icon: "streamlit" },
    ],
  },
  {
    group: { en: "Databases", id: "Database" },
    skills: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MySQL", icon: "mysql" },
    ],
  },
  {
    group: { en: "Tooling & Languages", id: "Alat & Bahasa" },
    skills: [
      { name: "TypeScript", icon: "typescript" },
      { name: "Git", icon: "git" },
    ],
  },
];

export const ExperienceTab: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div
      role="tabpanel"
      id="panel-experience"
      aria-labelledby="tab-experience"
      className="space-y-10 animate-fadeIn"
    >
      {/* ── Tab Header Banner ── */}
      <div className="space-y-1.5 pb-4 border-b border-editorial-light-border dark:border-editorial-dark-border">
        <div className="flex items-center space-x-2 text-xs font-mono font-semibold uppercase tracking-wider text-editorial-light-accent dark:text-editorial-dark-accent">
          <Briefcase className="w-3.5 h-3.5" />
          <span>
            {language === "id"
              ? "KARIER & KEAHLIAN TEKNIS"
              : "CAREER & TECHNICAL CAPABILITIES"}
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-editorial-light-text dark:text-editorial-dark-text">
          {language === "id"
            ? "Pengalaman Kerja & Keahlian"
            : "Work Experience & Technical Stack"}
        </h2>
        <p className="text-xs sm:text-sm text-editorial-light-muted dark:text-editorial-dark-muted">
          {language === "id"
            ? "Rekam jejak software engineering, analitik data operasional, dan corporate mentoring sejak 2021."
            : "Software engineering, operational data analytics, and corporate technical mentoring since 2021."}
        </p>
      </div>

      {/* ── Section 1: Domain Focus Areas (What I Do) ── */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-editorial-light-accent dark:bg-editorial-dark-accent" />
          <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-editorial-light-text dark:text-editorial-dark-text">
            {language === "id" ? "Fokus & Bidang Keahlian" : "Core Focus Areas"}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {domains.map((d, i) => {
            const Icon = d.icon;
            return (
              <div
                key={i}
                className={`rounded-xl border ${d.cardBorder} ${d.cardBg} p-5 space-y-3 flex flex-col justify-between transition-all hover:-translate-y-0.5`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-9 h-9 rounded-lg ${d.iconBg} flex items-center justify-center shrink-0`}
                    >
                      <Icon className={`w-4 h-4 ${d.iconColor}`} />
                    </div>
                    <span className="text-[10px] font-mono text-editorial-light-muted dark:text-editorial-dark-muted">
                      0{i + 1}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-editorial-light-text dark:text-editorial-dark-text leading-snug">
                      {d.title[language]}
                    </h4>
                    <p className={`text-[11px] font-medium ${d.iconColor} mt-0.5`}>
                      {d.sub[language]}
                    </p>
                  </div>

                  <p className="text-xs text-editorial-light-muted dark:text-editorial-dark-muted leading-relaxed">
                    {d.desc[language]}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1 pt-1">
                  {d.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-0.5 rounded text-[10px] font-mono font-medium ${d.tagBg}`}
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

      {/* ── Section 2: Categorized Technical Stack ── */}
      <div className="space-y-4 pt-6 border-t border-editorial-light-border/60 dark:border-editorial-dark-border/60">
        <div className="flex items-center space-x-2">
          <Cpu className="w-4 h-4 text-editorial-light-accent dark:text-editorial-dark-accent" />
          <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-editorial-light-text dark:text-editorial-dark-text">
            {language === "id"
              ? "Perangkat & Stack Teknis"
              : "Technical Stack & Tools"}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillGroups.map((group, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface dark:bg-editorial-dark-surface p-4 space-y-3"
            >
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-editorial-light-accent dark:text-editorial-dark-accent border-b border-editorial-light-border/60 dark:border-editorial-dark-border/60 pb-2">
                {group.group[language]}
              </h4>
              <div className="space-y-1.5">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center space-x-2 py-0.5 text-xs text-editorial-light-text dark:text-editorial-dark-text font-medium"
                  >
                    <TechIcon name={skill.icon} size={15} />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Section 3: Formal In-House Roles ── */}
      <div className="space-y-4 pt-6 border-t border-editorial-light-border/60 dark:border-editorial-dark-border/60">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-blue-500" />
          <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-editorial-light-text dark:text-editorial-dark-text">
            {language === "id"
              ? "Peran Formal In-House & Korporat"
              : "Formal In-House Roles"}
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
                  <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded bg-editorial-light-bg dark:bg-editorial-dark-bg border border-editorial-light-border/70 dark:border-editorial-dark-border/70 text-xs font-mono text-editorial-light-muted dark:text-editorial-dark-muted">
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

              {/* Bullet points */}
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

      {/* ── Section 4: Independent Advisory & Corporate Training ── */}
      <div className="space-y-4 pt-6 border-t border-editorial-light-border/60 dark:border-editorial-dark-border/60">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
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
                  <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded bg-editorial-light-bg dark:bg-editorial-dark-bg border border-editorial-light-border/70 dark:border-editorial-dark-border/70 text-xs font-mono text-editorial-light-muted dark:text-editorial-dark-muted">
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

      {/* ── Section 5: Institutional Partners & Engagements ── */}
      <div className="space-y-4 pt-6 border-t border-editorial-light-border/60 dark:border-editorial-dark-border/60">
        <div className="flex items-center space-x-2">
          <Building className="w-4 h-4 text-editorial-light-accent dark:text-editorial-dark-accent" />
          <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-editorial-light-text dark:text-editorial-dark-text">
            {language === "id"
              ? "Mitra Institusional & Pelatihan"
              : "Institutional Partners & Engagements"}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {institutionalPartners.map((partner, idx) => (
            <div
              key={idx}
              className="flex items-start space-x-3 p-3.5 rounded-xl border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface dark:bg-editorial-dark-surface hover:border-editorial-light-accent dark:hover:border-editorial-dark-accent transition-colors"
            >
              <InstitutionalLogo
                src={partner.logo}
                alt={partner.name}
                className="w-8 h-8 p-1 shrink-0"
                size={32}
              />
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold text-editorial-light-text dark:text-editorial-dark-text leading-snug">
                  {partner.name}
                </p>
                <p className="text-[11px] font-mono text-editorial-light-muted dark:text-editorial-dark-muted mt-0.5">
                  {partner.scope[language]}
                </p>
              </div>
            </div>
          ))}

          {/* NDA footnote card */}
          <div className="flex items-start space-x-3 p-3.5 rounded-xl border border-dashed border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface/40 dark:bg-editorial-dark-surface/40">
            <div className="w-8 h-8 rounded-lg bg-editorial-light-border/40 dark:bg-editorial-dark-border/40 flex items-center justify-center shrink-0 text-editorial-light-accent dark:text-editorial-dark-accent">
              <PlusCircle className="w-4 h-4" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold text-editorial-light-text dark:text-editorial-dark-text leading-snug">
                {language === "id" ? "+ Institusi Lainnya" : "+ More Clients & Partners"}
              </p>
              <p className="text-[11px] font-mono text-editorial-light-muted dark:text-editorial-dark-muted mt-0.5">
                {language === "id" ? "Terikat NDA / Kerahasiaan" : "Protected under NDA"}
              </p>
            </div>
          </div>
        </div>

        {/* Subtle 'and more' divider line */}
        <div className="flex items-center gap-3 pt-3">
          <div className="h-px bg-editorial-light-border/60 dark:border-editorial-dark-border/60 flex-1" />
          <span className="text-[11px] font-mono text-editorial-light-muted dark:text-editorial-dark-muted shrink-0">
            {language === "id"
              ? "— dan berbagai institusi perbankan, BUMN & kampus lainnya (terikat NDA)"
              : "— and more institutional clients across enterprise, banking & higher education"}
          </span>
          <div className="h-px bg-editorial-light-border/60 dark:border-editorial-dark-border/60 flex-1" />
        </div>
      </div>
    </div>
  );
};
