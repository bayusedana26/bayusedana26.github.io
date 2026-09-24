"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import {
  FileText,
  Mail,
  MapPin,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { BrandIcon } from "@/components/ui";

interface ProfileSidebarProps {
  onOpenCv: () => void;
}

export const ProfileSidebar: React.FC<ProfileSidebarProps> = ({ onOpenCv }) => {
  const { language, t } = useLanguage();

  const coreSkills = [
    { category: "Languages", items: ["Python", "TypeScript", "SQL", "JavaScript"] },
    { category: "Web & Backend", items: ["Next.js", "React", "Node.js", "REST APIs"] },
    { category: "Data & BI", items: ["Tableau", "Pandas", "Scikit-Learn", "Colab"] },
    { category: "Infrastructure", items: ["PostgreSQL", "Git", "Docker", "Linux"] },
  ];

  return (
    <aside className="w-full space-y-6">
      {/* Identity & Avatar Card */}
      <div className="rounded-xl border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface dark:bg-editorial-dark-surface p-5 sm:p-6 shadow-xs space-y-5">
        {/* Availability Badge */}
        <div className="flex items-center justify-between gap-2">
          <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>
              {language === "id" ? "Tersedia untuk Posisi & Advisory" : "Available for Roles & Advisory"}
            </span>
          </div>

          <div className="hidden sm:inline-flex items-center space-x-1 text-xs font-mono text-editorial-light-muted dark:text-editorial-dark-muted">
            <MapPin className="w-3.5 h-3.5 text-editorial-light-accent dark:text-editorial-dark-accent" />
            <span>Indonesia (WIB)</span>
          </div>
        </div>

        {/* Profile Image & Name Lockup */}
        <div className="flex items-start space-x-4">
          <button
            type="button"
            onClick={onOpenCv}
            className="group relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl border-2 border-editorial-light-border dark:border-editorial-dark-border overflow-hidden shrink-0 shadow-sm hover:border-editorial-light-accent dark:hover:border-editorial-dark-accent transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-editorial-light-accent"
            title={language === "id" ? "Klik untuk pratinjau CV" : "Click to preview CV"}
            aria-label="Preview Curriculum Vitae"
          >
            <Image
              src="/assets/images/Bayu_CV.png"
              alt="Bayu Sedana"
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
              <span className="text-white text-[10px] font-mono font-semibold bg-black/70 px-1.5 py-0.5 rounded">
                CV
              </span>
            </div>
          </button>

          <div className="space-y-1 min-w-0">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-editorial-light-text dark:text-editorial-dark-text leading-tight">
              Bayu Sedana
            </h1>
            <p className="text-sm font-semibold text-editorial-light-accent dark:text-editorial-dark-accent">
              Software & Data Specialist
            </p>
            <p className="text-xs font-mono text-editorial-light-muted dark:text-editorial-dark-muted leading-relaxed">
              Software Engineering · Data Analytics · Technical Advisory
            </p>
          </div>
        </div>

        {/* Executive Bio / Sharp Value Proposition */}
        <p className="text-xs sm:text-sm text-editorial-light-muted dark:text-editorial-dark-muted leading-relaxed">
          {language === "id"
            ? "Praktisi IT dengan 5+ tahun pengalaman dalam rekayasa software, analitik data, dan project management. Berfokus pada perancangan backend andal, pipeline data terstruktur, dan analitika bisnis terapan."
            : "IT professional with 5+ years of experience across software engineering, data analytics, project management, and corporate technical training. Focused on building reliable backend systems, structured data pipelines, and applied business analytics."}
        </p>

        {/* Primary Action Button: View / Download CV */}
        <div className="pt-1">
          <button
            type="button"
            onClick={onOpenCv}
            className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 rounded-lg bg-editorial-light-text text-editorial-light-bg dark:bg-editorial-dark-text dark:text-editorial-dark-bg font-semibold text-xs sm:text-sm shadow-sm hover:opacity-90 active:scale-[0.99] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-editorial-light-accent"
          >
            <FileText className="w-4 h-4" />
            <span>{language === "id" ? "Lihat & Unduh CV (PDF/Gambar)" : "View & Download CV (PDF/Image)"}</span>
          </button>
        </div>

        {/* Quick Connect Icon Buttons */}
        <div className="space-y-2">
          <span className="block text-[11px] font-mono uppercase tracking-wider text-editorial-light-muted dark:text-editorial-dark-muted font-semibold">
            {language === "id" ? "Kontak Cepat & Profil" : "Quick Contact & Profiles"}
          </span>
          <div className="grid grid-cols-2 gap-2">
            <a
              href="https://wa.me/6281369075494"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-3 py-2 rounded-md border border-editorial-light-border dark:border-editorial-dark-border bg-emerald-500/5 hover:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-medium transition-colors"
            >
              <BrandIcon name="whatsapp" size={15} />
              <span>WhatsApp</span>
            </a>

            <a
              href="https://www.linkedin.com/in/bayusedana/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-3 py-2 rounded-md border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-bg dark:bg-editorial-dark-bg hover:border-editorial-light-accent dark:hover:border-editorial-dark-accent text-editorial-light-text dark:text-editorial-dark-text text-xs font-medium transition-colors"
            >
              <BrandIcon name="linkedin" size={15} />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/bayusedana26"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-3 py-2 rounded-md border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-bg dark:bg-editorial-dark-bg hover:border-editorial-light-accent dark:hover:border-editorial-dark-accent text-editorial-light-text dark:text-editorial-dark-text text-xs font-medium transition-colors"
            >
              <BrandIcon name="github" size={15} />
              <span>GitHub</span>
            </a>

            <a
              href="mailto:bayusedana26@gmail.com"
              className="flex items-center space-x-2 px-3 py-2 rounded-md border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-bg dark:bg-editorial-dark-bg hover:border-editorial-light-accent dark:hover:border-editorial-dark-accent text-editorial-light-text dark:text-editorial-dark-text text-xs font-medium transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-editorial-light-accent dark:text-editorial-dark-accent" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>

      {/* Career Impact Milestones */}
      <div className="rounded-xl border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface dark:bg-editorial-dark-surface p-4 sm:p-5 shadow-xs space-y-3">
        <span className="block text-[11px] font-mono uppercase tracking-wider text-editorial-light-accent dark:text-editorial-dark-accent font-semibold">
          {language === "id" ? "Ringkasan Rekam Jejak" : "Career Track Summary"}
        </span>

        <div className="grid grid-cols-3 gap-2">
          <div className="p-2.5 rounded-lg border border-editorial-light-border/60 dark:border-editorial-dark-border/60 bg-editorial-light-bg dark:bg-editorial-dark-bg text-center">
            <span className="block text-lg sm:text-xl font-bold font-mono text-editorial-light-accent dark:text-editorial-dark-accent">
              5+
            </span>
            <span className="block text-[10px] font-medium text-editorial-light-muted dark:text-editorial-dark-muted leading-tight mt-0.5">
              {language === "id" ? "Tahun Pengalaman" : "Years Exp"}
            </span>
          </div>

          <div className="p-2.5 rounded-lg border border-editorial-light-border/60 dark:border-editorial-dark-border/60 bg-editorial-light-bg dark:bg-editorial-dark-bg text-center">
            <span className="block text-lg sm:text-xl font-bold font-mono text-editorial-light-accent dark:text-editorial-dark-accent">
              3
            </span>
            <span className="block text-[10px] font-medium text-editorial-light-muted dark:text-editorial-dark-muted leading-tight mt-0.5">
              {language === "id" ? "Peran In-House" : "Formal Roles"}
            </span>
          </div>

          <div className="p-2.5 rounded-lg border border-editorial-light-border/60 dark:border-editorial-dark-border/60 bg-editorial-light-bg dark:bg-editorial-dark-bg text-center">
            <span className="block text-lg sm:text-xl font-bold font-mono text-editorial-light-accent dark:text-editorial-dark-accent">
              100+
            </span>
            <span className="block text-[10px] font-medium text-editorial-light-muted dark:text-editorial-dark-muted leading-tight mt-0.5">
              {language === "id" ? "Mentee & Peserta" : "Mentees"}
            </span>
          </div>
        </div>
      </div>

      {/* Core Technical Capabilities Matrix */}
      <div className="rounded-xl border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface dark:bg-editorial-dark-surface p-4 sm:p-5 shadow-xs space-y-4">
        <div className="flex items-center space-x-1.5 text-[11px] font-mono uppercase tracking-wider text-editorial-light-accent dark:text-editorial-dark-accent font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{language === "id" ? "Stack Teknologi Utama" : "Core Tech Stack"}</span>
        </div>

        <div className="space-y-3">
          {coreSkills.map((group) => (
            <div key={group.category} className="space-y-1.5">
              <span className="text-[11px] font-mono text-editorial-light-muted dark:text-editorial-dark-muted">
                {group.category}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded text-[11px] font-mono font-medium border border-editorial-light-border/70 dark:border-editorial-dark-border/70 bg-editorial-light-bg dark:bg-editorial-dark-bg text-editorial-light-text dark:text-editorial-dark-text"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};
