"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { MapPin, Clock, Mail } from "lucide-react";
import { BrandIcon, InstitutionalLogo } from "@/components/ui";
import { formalExperiences, freelanceExperiences, educationList } from "@/data/experience";

interface ProfileSidebarProps {
  onOpenCv?: () => void;
}

function useGmt7Clock() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(now);
      setTime(formatted);
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

export const ProfileSidebar: React.FC<ProfileSidebarProps> = ({ onOpenCv }) => {
  const { language } = useLanguage();
  const gmtTime = useGmt7Clock();

  return (
    <aside className="w-full">
      <div className="rounded-2xl border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface dark:bg-editorial-dark-surface p-4 sm:p-5 shadow-xs space-y-4">

        {/* ── Row 1: Availability badge ── */}
        <div className="inline-flex items-center space-x-1.5 w-full px-2.5 py-1.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-[11px] font-mono font-semibold text-emerald-700 dark:text-emerald-400 truncate">
            {language === "id"
              ? "Tersedia — Full Time & NDA"
              : "Available — Full Time Roles & NDA"}
          </span>
        </div>

        {/* ── Row 2: Timezone clock ── */}
        {gmtTime && (
          <div className="flex items-center space-x-1.5 text-[11px] font-mono text-editorial-light-muted dark:text-editorial-dark-muted">
            <Clock className="w-3.5 h-3.5 text-editorial-light-accent dark:text-editorial-dark-accent shrink-0" />
            <span className="tabular-nums">GMT+7 · {gmtTime}</span>
          </div>
        )}

        {/* ── Row 3: Profile image + name lockup ── */}
        <div className="flex items-center space-x-3.5">
          {/* Clicking the photo opens the CV preview (request #1) */}
          <button
            type="button"
            onClick={onOpenCv}
            title={language === "id" ? "Klik untuk pratinjau CV" : "Click to preview CV"}
            className="relative w-[72px] h-[88px] sm:w-20 sm:h-24 rounded-2xl border border-editorial-light-border dark:border-editorial-dark-border overflow-hidden shrink-0 shadow-2xs bg-neutral-950 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-editorial-light-accent"
          >
            <Image
              src="/assets/images/Bayu_CV.png"
              alt="Bayu Sedana"
              fill
              className="object-cover object-[center_18%] transition-opacity group-hover:opacity-80"
              priority
            />
            {/* Subtle hover hint */}
            <div className="absolute inset-0 flex items-end justify-center pb-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-[9px] font-mono font-bold text-white bg-black/60 px-1.5 py-0.5 rounded backdrop-blur-xs">
                CV
              </span>
            </div>
          </button>

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

        {/* ── Executive Bio ── */}
        <p className="text-xs sm:text-[13px] text-editorial-light-muted dark:text-editorial-dark-muted leading-relaxed">
          {language === "id"
            ? "Praktisi IT dengan 5+ tahun pengalaman backend software engineering, machine learning terapan, dan pelatihan data korporat (200+ mentee)."
            : "IT professional with 5+ years across backend software engineering, applied machine learning, and corporate technical training (200+ mentees)."}
        </p>

        {/* ── Direct Contact Buttons ── */}
        <div className="flex gap-2">
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

        {/* ── Milestone Grid ── */}
        <div className="grid grid-cols-3 gap-2">
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

        {/* ── Section: Full-Time Career ── */}
        <div className="space-y-2 pt-3 border-t border-editorial-light-border/60 dark:border-editorial-dark-border/60">
          <span className="text-[11px] font-mono uppercase tracking-wider text-editorial-light-accent dark:text-editorial-dark-accent font-bold">
            {language === "id" ? "Karir Full-Time" : "Full-Time Career"}
          </span>

          <div className="space-y-2">
            {formalExperiences.map((exp, i) => (
              <div key={i} className="flex items-start space-x-2.5">
                {exp.logo ? (
                  <InstitutionalLogo
                    src={exp.logo}
                    alt={exp.company}
                    className="w-7 h-7 p-0.5 rounded-lg shrink-0 mt-0.5"
                    size={28}
                  />
                ) : (
                  <div className="w-7 h-7 rounded-lg bg-editorial-light-bg dark:bg-editorial-dark-bg border border-editorial-light-border dark:border-editorial-dark-border flex items-center justify-center shrink-0 mt-0.5" />
                )}
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-1">
                    <p className="text-xs font-semibold text-editorial-light-text dark:text-editorial-dark-text leading-snug">
                      {language === "id" ? exp.role.id : exp.role.en}
                    </p>
                    <span className="text-[10px] font-mono text-editorial-light-muted dark:text-editorial-dark-muted shrink-0 mt-px">
                      {exp.start.split(" ")[1]}
                      {exp.current ? "–" : `–${exp.end.split(" ")[1]}`}
                    </span>
                  </div>
                  <p className="text-[11px] font-mono text-editorial-light-muted dark:text-editorial-dark-muted mt-0.5">
                    {exp.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Section: Freelance & Consulting ── */}
        <div className="space-y-2 pt-3 border-t border-editorial-light-border/60 dark:border-editorial-dark-border/60">
          <span className="text-[11px] font-mono uppercase tracking-wider text-editorial-light-accent dark:text-editorial-dark-accent font-bold">
            {language === "id" ? "Freelance & Konsultasi" : "Freelance & Consulting"}
          </span>

          <div className="space-y-2">
            {freelanceExperiences.map((exp, i) => (
              <div key={i} className="flex items-start space-x-2.5">
                <div className="w-7 h-7 rounded-lg bg-editorial-light-bg dark:bg-editorial-dark-bg border border-editorial-light-border dark:border-editorial-dark-border flex items-center justify-center shrink-0 mt-0.5 text-[9px] font-mono font-bold text-editorial-light-accent dark:text-editorial-dark-accent">
                  IC
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-1">
                    <p className="text-xs font-semibold text-editorial-light-text dark:text-editorial-dark-text leading-snug">
                      {language === "id" ? exp.role.id : exp.role.en}
                    </p>
                    <span className="text-[10px] font-mono text-editorial-light-muted dark:text-editorial-dark-muted shrink-0 mt-px">
                      {exp.start.split(" ")[1]}–
                    </span>
                  </div>
                  <p className="text-[11px] font-mono text-editorial-light-muted dark:text-editorial-dark-muted mt-0.5">
                    {exp.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Section: Education ── */}
        <div className="space-y-2 pt-3 border-t border-editorial-light-border/60 dark:border-editorial-dark-border/60">
          <span className="text-[11px] font-mono uppercase tracking-wider text-editorial-light-accent dark:text-editorial-dark-accent font-bold">
            {language === "id" ? "Pendidikan" : "Education"}
          </span>

          <div className="space-y-2">
            {educationList.map((item, i) => (
              <div key={i} className="flex items-start space-x-2.5">
                <InstitutionalLogo
                  src={item.logo}
                  alt={item.institution}
                  className="w-7 h-7 p-0.5 rounded-lg shrink-0 mt-0.5"
                  size={28}
                />
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold text-editorial-light-text dark:text-editorial-dark-text leading-snug">
                    {(language === "id" ? item.degree.id : item.degree.en).split("•")[0].trim()}
                  </p>
                  <p className="text-[11px] font-mono text-editorial-light-muted dark:text-editorial-dark-muted mt-0.5">
                    {item.institution}
                  </p>
                  <p className="text-[10px] font-mono text-editorial-light-muted/70 dark:text-editorial-dark-muted/70 mt-0.5">
                    {typeof item.period === "string"
                      ? item.period
                      : language === "id"
                      ? item.period.id
                      : item.period.en}
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
