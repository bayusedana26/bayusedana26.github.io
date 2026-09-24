"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { institutionalPartners } from "@/data/experience";
import { InstitutionalLogo, TechIcon } from "@/components/ui";
import { Cpu, Code2, Database, BookOpen, Building, PlusCircle } from "lucide-react";

interface TechItem {
  name: string;
  icon: string;
  role: { en: string; id: string };
}

const techItems: TechItem[] = [
  { name: "Node.js", icon: "nodejs", role: { en: "Backend Runtimes", id: "Runtime Backend" } },
  { name: "Express.js", icon: "express", role: { en: "REST Framework", id: "Framework REST" } },
  { name: "Passport.js", icon: "passport", role: { en: "Auth & Security", id: "Autentikasi & Keamanan" } },
  { name: "TypeScript", icon: "typescript", role: { en: "Type-Safe Systems", id: "Sistem Tipe Aman" } },
  { name: "Python", icon: "python", role: { en: "Data & Automation", id: "Data & Otomasi" } },
  { name: "FastAPI", icon: "fastapi", role: { en: "Async APIs", id: "API Kinerja Tinggi" } },
  { name: "Flask", icon: "flask", role: { en: "Microservices", id: "Layanan Mikro" } },
  { name: "Pandas", icon: "pandas", role: { en: "Data Wrangling", id: "Manipulasi Data" } },
  { name: "NumPy", icon: "numpy", role: { en: "Numerical Ops", id: "Komputasi Matriks" } },
  { name: "Matplotlib", icon: "matplotlib", role: { en: "Data Viz", id: "Visualisasi Data" } },
  { name: "Streamlit", icon: "streamlit", role: { en: "Data Web Apps", id: "Prototipe Web Data" } },
  { name: "TensorFlow", icon: "tensorflow", role: { en: "Deep Learning", id: "Pemodelan AI" } },
  { name: "OpenCV", icon: "opencv", role: { en: "Computer Vision", id: "Pengolahan Citra" } },
  { name: "MySQL", icon: "mysql", role: { en: "Relational DB", id: "Database Relasional" } },
  { name: "PostgreSQL", icon: "postgresql", role: { en: "Advanced SQL", id: "Database Relasional Lanjut" } },
  { name: "Git", icon: "git", role: { en: "Version Control", id: "Kontrol Versi" } },
  { name: "REST API", icon: "restapi", role: { en: "API Architecture", id: "Arsitektur Integrasi API" } },
];

export const CapabilitiesTab: React.FC = () => {
  const { language } = useLanguage();

  const pillars = [
    {
      icon: <Code2 className="w-5 h-5 text-blue-500" />,
      tag: "01 / BUILD",
      title: language === "id" ? "Bangun" : "Build",
      subtitle: language === "id" ? "Software, Backend, dan REST API" : "Software, Backend, and REST APIs",
      desc:
        language === "id"
          ? "Pengembangan layanan backend dengan Node.js, Express, dan FastAPI. Penerapan autentikasi aman dengan Passport.js, perancangan skema database PostgreSQL dan MySQL, serta integrasi API yang andal."
          : "Backend services engineering with Node.js, Express, and FastAPI. Secure authentication with Passport.js, resilient PostgreSQL and MySQL schema designs, and reliable API endpoints.",
    },
    {
      icon: <Database className="w-5 h-5 text-indigo-500" />,
      tag: "02 / ANALYZE",
      title: language === "id" ? "Analisis" : "Analyze",
      subtitle: language === "id" ? "Machine Learning dan Pipeline Data" : "Machine Learning and Data Pipelines",
      desc:
        language === "id"
          ? "Pengolahan dataset kompleks menggunakan Pandas dan NumPy, visualisasi data ilmiah dengan Matplotlib, perancangan prototipe web interaktif via Streamlit, serta implementasi computer vision dengan OpenCV dan TensorFlow."
          : "Complex data transformation using Pandas and NumPy, scientific visualizations with Matplotlib, interactive data prototyping via Streamlit, and computer vision modeling with OpenCV and TensorFlow.",
    },
    {
      icon: <BookOpen className="w-5 h-5 text-emerald-500" />,
      tag: "03 / GUIDE",
      title: language === "id" ? "Pandu" : "Guide",
      subtitle: language === "id" ? "Training Korporat dan Konsultasi" : "Corporate Training and Advisory",
      desc:
        language === "id"
          ? "Penyusunan silabus teknis terapan, instruktur pelatihan in-house untuk institusi pemerintah dan perbankan, pembimbingan sertifikasi kompetensi BNSP, serta pendampingan adopsi teknologi data modern."
          : "Applied curriculum authoring, in-house technical workshops for central banking and public institutions, national BNSP competency coaching, and strategic technical consulting.",
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
          {language === "id" ? "Keahlian Teknis & Mitra Klien" : "Technical Capabilities & Partners"}
        </h2>
        <p className="text-xs sm:text-sm text-editorial-light-muted dark:text-editorial-dark-muted">
          {language === "id"
            ? "Backend engineering, data analytics terapan, dan pengalaman advisory lintas institusi."
            : "Backend engineering, applied data analytics, and advisory across institutions."}
        </p>
      </div>

      {/* 3 Core Pillars */}
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

      {/* Full 17 Tech Stack Inventory with Authentic Icons */}
      <div className="space-y-4">
        <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-editorial-light-text dark:text-editorial-dark-text">
          {language === "id" ? "Daftar Stack Teknologi & Spesialisasi" : "Technology Stack & Specializations"}
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {techItems.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center text-center p-3 rounded-xl border border-editorial-light-border/70 dark:border-editorial-dark-border/70 bg-editorial-light-surface dark:bg-editorial-dark-surface space-y-2 hover:border-editorial-light-accent dark:hover:border-editorial-dark-accent transition-colors shadow-2xs"
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

      {/* Institutional Partners & Clients + "And More" Card */}
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
              className="flex items-center space-x-3 p-3 rounded-lg border border-editorial-light-border/70 dark:border-editorial-dark-border/70 bg-editorial-light-surface dark:bg-editorial-dark-surface hover:border-editorial-light-accent dark:hover:border-editorial-dark-accent transition-colors shadow-2xs"
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

        {/* "+ And More...": full-width row at the bottom */}
        <div className="flex items-center justify-between px-4 py-3 rounded-xl border border-dashed border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-bg/50 dark:bg-editorial-dark-bg/50 hover:border-editorial-light-accent dark:hover:border-editorial-dark-accent transition-colors">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-editorial-light-border/60 dark:bg-editorial-dark-border/60 flex items-center justify-center shrink-0 text-editorial-light-accent dark:text-editorial-dark-accent">
              <PlusCircle className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-editorial-light-text dark:text-editorial-dark-text">
                {language === "id" ? "+ Dan institusi lainnya" : "+ And more institutions"}
              </p>
              <p className="text-[10px] font-mono text-editorial-light-muted dark:text-editorial-dark-muted">
                {language === "id"
                  ? "Klien korporat & privat tidak ditampilkan karena NDA"
                  : "Additional corporate & private clients not listed due to NDA"}
              </p>
            </div>
          </div>
          <span className="text-[10px] font-mono text-editorial-light-muted dark:text-editorial-dark-muted shrink-0">
            NDA
          </span>
        </div>
      </div>
    </div>
  );
};
