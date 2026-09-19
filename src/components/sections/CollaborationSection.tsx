"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  Mail,
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight,
  Clock,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { BrandIcon } from "@/components/ui";

export const CollaborationSection: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section
      id="collaboration"
      className="w-full section-spacing border-b border-editorial-light-border dark:border-editorial-dark-border"
    >
      <div className="editorial-container">
        <div className="relative rounded-2xl border border-editorial-light-border dark:border-editorial-dark-border bg-gradient-to-b from-editorial-light-surface via-editorial-light-surface to-editorial-light-bg dark:from-editorial-dark-surface dark:via-editorial-dark-surface dark:to-editorial-dark-bg p-7 sm:p-10 md:p-14 overflow-hidden shadow-sm">
          {/* Subtle Ambient Radial Glows */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-10">
            {/* Header & Status Bar */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-editorial-light-border/80 dark:border-editorial-dark-border/80">
              <div className="max-w-2xl space-y-3">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-emerald-500/25 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-medium">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>
                    {language === "id"
                      ? "STATUS: TERSEDIA UNTUK FULL-TIME & ADVISORY"
                      : "STATUS: AVAILABLE FOR FULL-TIME & ADVISORY"}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-editorial-light-text dark:text-editorial-dark-text leading-tight">
                  {t.collaboration.headline}
                </h2>
                <p className="text-base text-editorial-light-muted dark:text-editorial-dark-muted leading-relaxed max-w-xl">
                  {t.collaboration.sub}
                </p>
              </div>

              {/* Fast Response SLA & Discovery Card */}
              <div className="shrink-0 p-4 rounded-xl border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-bg/80 dark:bg-editorial-dark-bg/80 backdrop-blur-xs space-y-1.5 font-mono text-xs shadow-2xs">
                <div className="flex items-center space-x-2 text-editorial-light-text dark:text-editorial-dark-text font-semibold">
                  <Clock className="w-3.5 h-3.5 text-editorial-light-accent dark:text-editorial-dark-accent" />
                  <span>
                    {language === "id"
                      ? "Waktu Respon Cepat"
                      : "Fast Response SLA"}
                  </span>
                </div>
                <div className="text-[11px] text-editorial-light-muted dark:text-editorial-dark-muted">
                  {language === "id"
                    ? "< 24 Jam via WhatsApp & Email"
                    : "< 24 Hours via WhatsApp & Email"}
                </div>
                <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
                  ● {language === "id"
                    ? "Siap Interview & Diskusi Teknis"
                    : "Ready for Interviews & Discovery"}
                </div>
              </div>
            </div>

            {/* 2 Focused Engagement Tracks (Show-Off without Slop) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Track 1: Full-Time Positions */}
              <div className="p-6 rounded-xl border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface/70 dark:bg-editorial-dark-surface/70 backdrop-blur-xs space-y-4 hover:border-editorial-light-accent dark:hover:border-editorial-dark-accent transition-all duration-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 flex items-center justify-center">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-base sm:text-lg text-editorial-light-text dark:text-editorial-dark-text">
                      {language === "id"
                        ? "Posisi Full-Time In-House"
                        : "Full-Time In-House Roles"}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-bg dark:bg-editorial-dark-bg text-editorial-light-muted dark:text-editorial-dark-muted">
                    {language === "id" ? "Prioritas Utama" : "Primary Focus"}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-editorial-light-muted dark:text-editorial-dark-muted leading-relaxed">
                  {language === "id"
                    ? "Siap bergabung untuk posisi Software Engineer, Data Analyst, atau Technical Project Manager dengan fondasi 5+ tahun pengalaman korporat."
                    : "Ready to step in as a Software Engineer, Data Analyst, or Technical Project Manager with 5+ years of verified corporate and systems track record."}
                </p>
                <div className="space-y-2 pt-1 border-t border-editorial-light-border/60 dark:border-editorial-dark-border/60">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-editorial-light-accent dark:text-editorial-dark-accent font-semibold">
                    {language === "id"
                      ? "Keahlian Inti Yang Dibawa:"
                      : "Core Value Brought:"}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "Backend & REST APIs",
                      "SQL & Data Pipelines",
                      "TypeScript & Python",
                      "Project Delivery",
                      "Team Collaboration",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 text-[11px] font-mono rounded bg-editorial-light-bg dark:bg-editorial-dark-bg border border-editorial-light-border dark:border-editorial-dark-border text-editorial-light-text dark:text-editorial-dark-text"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Track 2: Strategic Advisory & Workshops */}
              <div className="p-6 rounded-xl border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface/70 dark:bg-editorial-dark-surface/70 backdrop-blur-xs space-y-4 hover:border-editorial-light-accent dark:hover:border-editorial-dark-accent transition-all duration-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center justify-center">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-base sm:text-lg text-editorial-light-text dark:text-editorial-dark-text">
                      {language === "id"
                        ? "Konsultasi & In-House Training"
                        : "Advisory & Corporate Training"}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-bg dark:bg-editorial-dark-bg text-editorial-light-muted dark:text-editorial-dark-muted">
                    {language === "id" ? "Terbukti di BI & TNI" : "Trusted by BI & TNI"}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-editorial-light-muted dark:text-editorial-dark-muted leading-relaxed">
                  {language === "id"
                    ? "Pelatihan teknis intensif AI & analitik data, penyusunan pitch deck eksekutif untuk investor, dan automasi proses bisnis bagi korporasi."
                    : "Executive AI & data analytics masterclasses, investor-grade pitch deck formulation, and enterprise workflow automations."}
                </p>
                <div className="space-y-2 pt-1 border-t border-editorial-light-border/60 dark:border-editorial-dark-border/60">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold">
                    {language === "id"
                      ? "Bentuk Kerjasama Terpilih:"
                      : "Selected Engagement Models:"}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "In-House Training (AI/Data)",
                      "Executive Custom Decks",
                      "Fintech API Integrations",
                      "Academic Workshops",
                      "Strict NDA Protected",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 text-[11px] font-mono rounded bg-editorial-light-bg dark:bg-editorial-dark-bg border border-editorial-light-border dark:border-editorial-dark-border text-editorial-light-text dark:text-editorial-dark-text"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Deliverables / Scope Grid */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-editorial-light-muted dark:text-editorial-dark-muted font-semibold">
                {language === "id"
                  ? "Ruang Lingkup Pekerjaan & Layanan:"
                  : "Key Delivery Scopes & Services:"}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {t.collaboration.services.map((service) => (
                  <div
                    key={service}
                    className="flex items-center space-x-2.5 p-3 rounded-lg border border-editorial-light-border/70 dark:border-editorial-dark-border/70 bg-editorial-light-bg/60 dark:bg-editorial-dark-bg/60 shadow-2xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-editorial-light-text dark:text-editorial-dark-text">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* NDA & Commercial Safety Banner */}
            <div className="rounded-xl border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-bg/70 dark:bg-editorial-dark-bg/70 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="p-3 rounded-lg bg-editorial-light-surface dark:bg-editorial-dark-surface border border-editorial-light-border dark:border-editorial-dark-border shrink-0 shadow-2xs">
                <ShieldCheck className="w-6 h-6 text-editorial-light-accent dark:text-editorial-dark-accent" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <h3 className="text-sm font-bold text-editorial-light-text dark:text-editorial-dark-text">
                    {t.collaboration.ndaHeading}
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-editorial-light-surface dark:bg-editorial-dark-surface border border-editorial-light-border dark:border-editorial-dark-border text-editorial-light-muted dark:text-editorial-dark-muted">
                    Enterprise-Grade
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-editorial-light-muted dark:text-editorial-dark-muted leading-relaxed">
                  {t.collaboration.ndaDescription}
                </p>
              </div>
            </div>

            {/* Action Buttons: Big & Punchy CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/6281369075494"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2.5 rounded-lg px-6 py-3.5 text-sm font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <BrandIcon name="whatsapp" size={19} />
                <span>{t.collaboration.ctaWhatsApp}</span>
                <ArrowUpRight className="w-4 h-4 opacity-80" />
              </a>

              <a
                href="mailto:bayusedana26@gmail.com?subject=Project%20Collaboration%20or%20Job%20Inquiry%20-%20Bayu%20Sedana"
                className="inline-flex items-center space-x-2.5 rounded-lg px-6 py-3.5 text-sm font-semibold bg-editorial-light-text dark:bg-editorial-dark-text text-editorial-light-bg dark:text-editorial-dark-bg hover:opacity-90 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                <span>{t.collaboration.ctaEmail}</span>
                <ArrowUpRight className="w-4 h-4 opacity-80" />
              </a>

              <a
                href="https://www.linkedin.com/in/bayusedana/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2.5 rounded-lg px-6 py-3.5 text-sm font-semibold border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface dark:bg-editorial-dark-surface text-editorial-light-text dark:text-editorial-dark-text hover:border-editorial-light-accent dark:hover:border-editorial-dark-accent hover:text-editorial-light-accent dark:hover:text-editorial-dark-accent transition-all shadow-xs hover:-translate-y-0.5"
              >
                <BrandIcon name="linkedin" size={17} />
                <span>{t.collaboration.ctaLinkedIn}</span>
                <ArrowUpRight className="w-4 h-4 text-editorial-light-muted dark:text-editorial-dark-muted" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
