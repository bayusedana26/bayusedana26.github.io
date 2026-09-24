"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { MapPin, Clock, Mail, Briefcase } from "lucide-react";
import { BrandIcon, InstitutionalLogo } from "@/components/ui";

interface ProfileSidebarProps {
  onOpenCv?: () => void;
}

function useWibClock() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const wib = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(now);
      setTime(wib);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}

const milestones = [
  { number: "5+", labelEn: "Years Exp", labelId: "Tahun Exp" },
  { number: "3", labelEn: "Formal Roles", labelId: "Peran In-House" },
  { number: "200+", labelEn: "Mentees", labelId: "Mentee" },
];

const careerItems = [
  {
    logo: "/assets/logos/glints.png",
    label: { en: "Software Engineer Trainee", id: "Software Engineer Trainee" },
    where: { en: "PT Glints Indonesia", id: "PT Glints Indonesia" },
    period: "2021",
  },
  {
    logo: "/assets/logos/indofun.png",
    label: { en: "Business Support & Analytics", id: "Business Support & Analytics" },
    where: { en: "PT Indofun Digital", id: "PT Indofun Digital" },
    period: "2021 - 2022",
  },
  {
    logo: "/assets/logos/asosiasi-ai-icon.png",
    label: { en: "Instructor & Assessor", id: "Instructor & Asesor" },
    where: { en: "Asosiasi AI Indonesia", id: "Asosiasi AI Indonesia" },
    period: "2026 - Present",
  },
  {
    logo: null,
    label: { en: "IT Consultant & Trainer", id: "Konsultan & Trainer IT" },
    where: { en: "Independent", id: "Independen" },
    period: "2023 - Present",
  },
];

const educationItems = [
  {
    logo: "/assets/logos/umy.png",
    label: { en: "Bachelor's Degree (S1)", id: "Sarjana (S1)" },
    where: { en: "Univ. Muhammadiyah Yogyakarta", id: "Univ. Muhammadiyah Yogyakarta" },
    period: "2020 · GPA 3.58",
  },
  {
    logo: "/assets/logos/usm.svg",
    label: { en: "Exchange Scholar Program", id: "Exchange Scholar Program" },
    where: { en: "Universiti Sains Malaysia (USM)", id: "Universiti Sains Malaysia (USM)" },
    period: "2016 - 2017",
  },
];

export const ProfileSidebar: React.FC<ProfileSidebarProps> = () => {
  const { language } = useLanguage();
  const wibTime = useWibClock();

  return (
    <aside className="w-full lg:max-h-[calc(100vh-5.5rem)] lg:overflow-y-auto custom-scrollbar">
      <div className="rounded-2xl border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface dark:bg-editorial-dark-surface p-4 sm:p-5 shadow-xs space-y-3.5">
        {/* Availability Status & Real-time WIB Clock */}
        <div className="flex items-center justify-between gap-2 text-xs">
          <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-[11px] font-mono font-medium shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="truncate">
              {language === "id"
                ? "Tersedia: Full Time & NDA"
                : "Available: Full Time Roles & NDA"}
            </span>
          </div>

          {wibTime && (
            <div className="inline-flex items-center space-x-1 text-[11px] font-mono text-editorial-light-muted dark:text-editorial-dark-muted shrink-0">
              <Clock className="w-3.5 h-3.5 text-editorial-light-accent dark:text-editorial-dark-accent" />
              <span className="tabular-nums">WIB {wibTime}</span>
            </div>
          )}
        </div>

        {/* Profile Image & Name Lockup */}
        <div className="flex items-center space-x-3.5 pt-0.5">
          <div className="relative w-18 h-22 sm:w-20 sm:h-24 rounded-2xl border border-editorial-light-border dark:border-editorial-dark-border overflow-hidden shrink-0 shadow-2xs bg-neutral-950">
            <Image
              src="/assets/images/Bayu_CV.png"
              alt="Bayu Sedana"
              fill
              className="object-cover object-[center_18%]"
              priority
            />
          </div>

          <div className="min-w-0 flex-1 space-y-1">
            <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-editorial-light-text dark:text-editorial-dark-text leading-tight truncate">
              Bayu Sedana
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-editorial-light-accent dark:text-editorial-dark-accent truncate">
              Software &amp; Data Specialist
            </p>
            <div className="flex items-center space-x-1.5 text-xs font-mono text-editorial-light-muted dark:text-editorial-dark-muted">
              <MapPin className="w-3.5 h-3.5 text-editorial-light-accent dark:text-editorial-dark-accent shrink-0" />
              <span className="truncate">Indonesia (GMT+7)</span>
            </div>
          </div>
        </div>

        {/* Executive Bio: Uncut and natural typography */}
        <p className="text-xs sm:text-[13px] text-editorial-light-muted dark:text-editorial-dark-muted leading-relaxed">
          {language === "id"
            ? "Praktisi IT dengan 5+ tahun pengalaman backend software engineering, machine learning terapan, dan pelatihan data korporat (200+ mentee)."
            : "IT professional with 5+ years across backend software engineering, applied machine learning, and corporate technical training (200+ mentees)."}
        </p>

        {/* Direct Contact Buttons (44px min touch target on mobile) */}
        <div className="flex gap-2 pt-0.5">
          <a
            href="https://wa.me/6281369075494"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center space-x-1.5 px-2.5 py-2 min-h-[44px] sm:min-h-[38px] rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            <BrandIcon name="whatsapp" size={15} />
            <span>WhatsApp</span>
          </a>
          <a
            href="mailto:bayusedana26@gmail.com"
            className="flex-1 flex items-center justify-center space-x-1.5 px-2.5 py-2 min-h-[44px] sm:min-h-[38px] rounded-xl border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-bg dark:bg-editorial-dark-bg hover:border-editorial-light-accent dark:hover:border-editorial-dark-accent text-editorial-light-text dark:text-editorial-dark-text text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-editorial-light-accent"
          >
            <Mail className="w-3.5 h-3.5 text-editorial-light-accent dark:text-editorial-dark-accent" />
            <span>Email</span>
          </a>
          <a
            href="https://www.linkedin.com/in/bayusedana/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center space-x-1.5 px-2.5 py-2 min-h-[44px] sm:min-h-[38px] rounded-xl border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-bg dark:bg-editorial-dark-bg hover:border-blue-500 dark:hover:border-blue-500 text-editorial-light-text dark:text-editorial-dark-text text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <BrandIcon name="linkedin" size={15} />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Milestone Grid */}
        <div className="grid grid-cols-3 gap-2 py-0.5">
          {milestones.map((m) => (
            <div
              key={m.number}
              className="flex flex-col items-center justify-center py-2 px-1.5 rounded-xl border border-editorial-light-border/60 dark:border-editorial-dark-border/60 bg-editorial-light-bg/70 dark:bg-editorial-dark-bg/70"
            >
              <span className="text-base sm:text-lg font-bold font-mono text-editorial-light-accent dark:text-editorial-dark-accent leading-none">
                {m.number}
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium text-editorial-light-muted dark:text-editorial-dark-muted mt-1 leading-none text-center">
                {language === "id" ? m.labelId : m.labelEn}
              </span>
            </div>
          ))}
        </div>

        {/* Career Track (Timeline with genuine logos) */}
        <div className="space-y-2 pt-2.5 border-t border-editorial-light-border/60 dark:border-editorial-dark-border/60">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-wider text-editorial-light-accent dark:text-editorial-dark-accent font-semibold">
              {language === "id" ? "Rekam Jejak Karir" : "Career Track"}
            </span>
            <span className="text-[10px] font-mono text-editorial-light-muted dark:text-editorial-dark-muted">
              2021 - Present
            </span>
          </div>

          <div className="space-y-1.5">
            {careerItems.map((item, i) => (
              <div key={i} className="flex items-center space-x-2.5 py-0.5">
                {item.logo ? (
                  <InstitutionalLogo
                    src={item.logo}
                    alt={item.where[language]}
                    className="w-7 h-7 p-0.5 rounded-lg shrink-0"
                    size={28}
                  />
                ) : (
                  <div className="w-7 h-7 rounded-lg bg-editorial-light-bg dark:bg-editorial-dark-bg border border-editorial-light-border dark:border-editorial-dark-border flex items-center justify-center text-editorial-light-accent dark:text-editorial-dark-accent shrink-0 shadow-2xs">
                    <Briefcase className="w-3.5 h-3.5" />
                  </div>
                )}
                <div className="min-w-0 flex-1 leading-none">
                  <div className="flex items-center justify-between gap-1.5">
                    <p className="text-xs font-semibold text-editorial-light-text dark:text-editorial-dark-text truncate">
                      {item.label[language]}
                    </p>
                    <span className="text-[10px] font-mono text-editorial-light-muted dark:text-editorial-dark-muted shrink-0">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-[11px] font-mono text-editorial-light-muted dark:text-editorial-dark-muted truncate mt-1">
                    {item.where[language]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Formal Education & Scholar Programs */}
        <div className="space-y-2 pt-2.5 border-t border-editorial-light-border/60 dark:border-editorial-dark-border/60">
          <span className="text-xs font-mono uppercase tracking-wider text-editorial-light-accent dark:text-editorial-dark-accent font-semibold">
            {language === "id" ? "Pendidikan Formal & Beasiswa" : "Formal Education & Scholar"}
          </span>

          <div className="space-y-1.5">
            {educationItems.map((item, i) => (
              <div key={i} className="flex items-center space-x-2.5 py-0.5">
                <InstitutionalLogo
                  src={item.logo}
                  alt={item.where[language]}
                  className="w-7 h-7 p-0.5 rounded-lg shrink-0"
                  size={28}
                />
                <div className="min-w-0 flex-1 leading-none">
                  <div className="flex items-center justify-between gap-1.5">
                    <p className="text-xs font-semibold text-editorial-light-text dark:text-editorial-dark-text truncate">
                      {item.label[language]}
                    </p>
                    <span className="text-[10px] font-mono text-editorial-light-muted dark:text-editorial-dark-muted shrink-0">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-[11px] font-mono text-editorial-light-muted dark:text-editorial-dark-muted truncate mt-1">
                    {item.where[language]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};
