"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Mail, MapPin, FileText } from "lucide-react";
import { BrandIcon } from "@/components/ui";

interface ProfileSidebarProps {
  onOpenCv?: () => void;
}

export const ProfileSidebar: React.FC<ProfileSidebarProps> = ({ onOpenCv }) => {
  const { language } = useLanguage();

  return (
    <aside className="w-full space-y-4">
      {/* Identity Card */}
      <div className="rounded-2xl border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface dark:bg-editorial-dark-surface p-5 sm:p-6 shadow-xs space-y-5">
        {/* Availability Badge & Location */}
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
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
          {/* Portrait Photo with natural aspect ratio and proper face framing */}
          <div className="relative w-28 h-36 sm:w-32 sm:h-40 rounded-2xl border-2 border-editorial-light-border dark:border-editorial-dark-border overflow-hidden shrink-0 shadow-xs bg-neutral-950">
            <Image
              src="/assets/images/Bayu_CV.png"
              alt="Bayu Sedana"
              fill
              className="object-cover object-[center_18%]"
              priority
            />
          </div>

          <div className="space-y-1.5 min-w-0 pt-1">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-editorial-light-text dark:text-editorial-dark-text leading-tight">
              Bayu Sedana
            </h1>
            <p className="text-sm font-semibold text-editorial-light-accent dark:text-editorial-dark-accent">
              Software & Data Specialist
            </p>
            <p className="text-xs font-mono text-editorial-light-muted dark:text-editorial-dark-muted leading-relaxed">
              Software Engineering · Applied Data Analytics · AI Training
            </p>
          </div>
        </div>

        {/* Executive Bio */}
        <p className="text-xs sm:text-sm text-editorial-light-muted dark:text-editorial-dark-muted leading-relaxed text-justify [text-justify:inter-word]">
          {language === "id"
            ? "Praktisi IT dengan rekam jejak 5+ tahun dalam pengembangan software backend, machine learning terapan, serta pelatihan data korporat. Fokus membangun REST API tangguh, automasi data pipeline, dan sistem komputasi berkinerja tinggi."
            : "IT professional with 5+ years of experience across backend software engineering, applied machine learning, and corporate technical training. Focused on building reliable REST APIs, automated data pipelines, and scalable computing systems."}
        </p>

        {/* Official CV Document Trigger */}
        {onOpenCv && (
          <button
            type="button"
            onClick={onOpenCv}
            className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl border border-editorial-light-accent/40 dark:border-editorial-dark-accent/40 bg-editorial-light-accent/10 hover:bg-editorial-light-accent/15 text-editorial-light-accent dark:text-editorial-dark-accent font-mono text-xs font-semibold transition-colors shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-editorial-light-accent"
          >
            <FileText className="w-4 h-4 shrink-0" />
            <span>{language === "id" ? "Buka Dokumen CV Lengkap" : "View Full CV Document"}</span>
          </button>
        )}

        {/* Quick Contacts: ONLY WhatsApp, Email, and LinkedIn */}
        <div className="space-y-2 pt-2 border-t border-editorial-light-border/60 dark:border-editorial-dark-border/60">
          <span className="block text-[11px] font-mono uppercase tracking-wider text-editorial-light-muted dark:text-editorial-dark-muted font-semibold">
            {language === "id" ? "Kontak Langsung" : "Direct Contact"}
          </span>
          <div className="flex flex-col gap-2">
            <a
              href="https://wa.me/6281369075494"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-3.5 py-2.5 rounded-xl border border-editorial-light-border dark:border-editorial-dark-border bg-emerald-500/5 hover:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-medium transition-colors"
            >
              <div className="flex items-center space-x-2.5">
                <BrandIcon name="whatsapp" size={16} />
                <span className="font-semibold">WhatsApp</span>
              </div>
              <span className="font-mono text-[11px] text-editorial-light-muted dark:text-editorial-dark-muted">
                +62 813-6907-5494
              </span>
            </a>

            <a
              href="mailto:bayusedana26@gmail.com"
              className="flex items-center justify-between px-3.5 py-2.5 rounded-xl border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-bg dark:bg-editorial-dark-bg hover:border-editorial-light-accent dark:hover:border-editorial-dark-accent text-editorial-light-text dark:text-editorial-dark-text text-xs font-medium transition-colors"
            >
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-editorial-light-accent dark:text-editorial-dark-accent" />
                <span className="font-semibold">Email</span>
              </div>
              <span className="font-mono text-[11px] text-editorial-light-muted dark:text-editorial-dark-muted">
                bayusedana26@gmail.com
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/bayusedana/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-3.5 py-2.5 rounded-xl border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-bg dark:bg-editorial-dark-bg hover:border-editorial-light-accent dark:hover:border-editorial-dark-accent text-editorial-light-text dark:text-editorial-dark-text text-xs font-medium transition-colors"
            >
              <div className="flex items-center space-x-2.5">
                <BrandIcon name="linkedin" size={16} />
                <span className="font-semibold">LinkedIn</span>
              </div>
              <span className="font-mono text-[11px] text-editorial-light-muted dark:text-editorial-dark-muted">
                /in/bayusedana
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Career Milestones Card */}
      <div className="rounded-2xl border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface dark:bg-editorial-dark-surface p-4 sm:p-5 shadow-xs space-y-3">
        <span className="block text-[11px] font-mono uppercase tracking-wider text-editorial-light-accent dark:text-editorial-dark-accent font-semibold">
          {language === "id" ? "Ringkasan Rekam Jejak" : "Career Track Summary"}
        </span>

        <div className="grid grid-cols-3 gap-2">
          <div className="p-2.5 rounded-xl border border-editorial-light-border/60 dark:border-editorial-dark-border/60 bg-editorial-light-bg dark:bg-editorial-dark-bg text-center">
            <span className="block text-lg sm:text-xl font-bold font-mono text-editorial-light-accent dark:text-editorial-dark-accent">
              5+
            </span>
            <span className="block text-[10px] font-medium text-editorial-light-muted dark:text-editorial-dark-muted leading-tight mt-0.5">
              {language === "id" ? "Tahun Pengalaman" : "Years Exp"}
            </span>
          </div>

          <div className="p-2.5 rounded-xl border border-editorial-light-border/60 dark:border-editorial-dark-border/60 bg-editorial-light-bg dark:bg-editorial-dark-bg text-center">
            <span className="block text-lg sm:text-xl font-bold font-mono text-editorial-light-accent dark:text-editorial-dark-accent">
              3
            </span>
            <span className="block text-[10px] font-medium text-editorial-light-muted dark:text-editorial-dark-muted leading-tight mt-0.5">
              {language === "id" ? "Peran In-House" : "Formal Roles"}
            </span>
          </div>

          <div className="p-2.5 rounded-xl border border-editorial-light-border/60 dark:border-editorial-dark-border/60 bg-editorial-light-bg dark:bg-editorial-dark-bg text-center">
            <span className="block text-lg sm:text-xl font-bold font-mono text-editorial-light-accent dark:text-editorial-dark-accent">
              100+
            </span>
            <span className="block text-[10px] font-medium text-editorial-light-muted dark:text-editorial-dark-muted leading-tight mt-0.5">
              {language === "id" ? "Mentee & Peserta" : "Mentees"}
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};
