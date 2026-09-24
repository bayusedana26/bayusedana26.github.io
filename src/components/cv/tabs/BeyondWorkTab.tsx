"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { featuredBIPhotos, otherGallerySessions } from "@/data/gallery";
import { Camera, Mail, ArrowUpRight, X, Building2, CheckCircle2, ChevronRight } from "lucide-react";
import { BrandIcon } from "@/components/ui";

interface LightboxPhoto {
  title: string;
  image: string;
  org: string;
  desc?: string;
}

export const BeyondWorkTab: React.FC = () => {
  const { language } = useLanguage();
  const [selectedPhoto, setSelectedPhoto] = useState<LightboxPhoto | null>(null);
  const [activeSessionFilter, setActiveSessionFilter] = useState<string>("all");

  const filterCategories = [
    { id: "all", label: { en: "All Engagements", id: "Semua Sesi" } },
    { id: "bi", label: { en: "Bank Indonesia", id: "Bank Indonesia" } },
    { id: "campus", label: { en: "Universities", id: "Kampus & Akademik" } },
    { id: "pension", label: { en: "Enterprise & Pension", id: "Dana Pensiun & Korporat" } },
  ];

  const filteredSessions = otherGallerySessions.filter((item) => {
    if (activeSessionFilter === "all") return true;
    if (activeSessionFilter === "bi") return item.client === "bi";
    if (activeSessionFilter === "campus")
      return item.client === "binus" || item.client === "ut" || item.client === "untag";
    if (activeSessionFilter === "pension") return item.client === "dana-pensiun";
    return true;
  });

  return (
    <div
      role="tabpanel"
      id="panel-beyond"
      aria-labelledby="tab-beyond"
      className="space-y-10 animate-fadeIn"
    >
      {/* Header Banner */}
      <div className="space-y-1.5 pb-4 border-b border-editorial-light-border dark:border-editorial-dark-border">
        <div className="flex items-center space-x-2 text-xs font-mono font-semibold uppercase tracking-wider text-editorial-light-accent dark:text-editorial-dark-accent">
          <Camera className="w-3.5 h-3.5" />
          <span>{language === "id" ? "DOKUMENTASI TRAINING & JEJAK ADVISORY" : "TRAINING & ENGAGEMENTS"}</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-editorial-light-text dark:text-editorial-dark-text">
          {language === "id"
            ? "Dokumentasi Lapangan & Corporate Training"
            : "In-House Training & Field Engagements"}
        </h2>
        <p className="text-xs sm:text-sm text-editorial-light-muted dark:text-editorial-dark-muted">
          {language === "id"
            ? "Bukti rekam jejak sebagai instruktur teknis dan konsultan data di bank sentral, universitas, dan korporat."
            : "Direct documentation as lead instructor and technical mentor across central banking, universities, and enterprise funds."}
        </p>
      </div>

      {/* FEATURED SPOTLIGHT: BANK INDONESIA KPW JATIM (Revision 7) */}
      <div className="rounded-2xl border-2 border-editorial-light-accent/30 dark:border-editorial-dark-accent/40 bg-editorial-light-surface dark:bg-editorial-dark-surface p-5 sm:p-7 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-editorial-light-border/70 dark:border-editorial-dark-border/70">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div className="space-y-0.5">
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-600 text-white uppercase tracking-wider">
                  Featured Case Study
                </span>
                <span className="text-xs font-mono text-editorial-light-muted dark:text-editorial-dark-muted">
                  Surabaya, Jawa Timur
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-editorial-light-text dark:text-editorial-dark-text">
                Bank Indonesia KPw Jawa Timur
              </h3>
            </div>
          </div>

          <div className="text-left sm:text-right">
            <span className="inline-block px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 text-xs font-mono font-medium">
              Lead Technical Instructor
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm sm:text-base font-semibold text-editorial-light-text dark:text-editorial-dark-text">
            {language === "id"
              ? "Pelatihan In-House Eksekutif: Implementasi AI Terapan & Analitika Data untuk Tim Analis Kebijakan"
              : "Executive In-House Training: Applied AI & Advanced Data Analytics for Policy Analysts"}
          </h4>
          <p className="text-xs sm:text-sm text-editorial-light-muted dark:text-editorial-dark-muted leading-relaxed">
            {language === "id"
              ? "Menyelenggarakan lokakarya pemrograman terapan untuk jajaran analis Bank Indonesia KPw Jatim. Materi mencakup pemodelan machine learning dengan Python, automasi alur pemrosesan data ekonomi, bedah algoritma prediksi, serta review kode langsung untuk efisiensi perumusan kebijakan daerah."
              : "Delivered comprehensive hands-on training for economic policy analysts at Bank Indonesia KPw Jatim. Topics focused on Python machine learning workflows, automated economic reporting pipelines, algorithmic modeling, and live code clinics."}
          </p>
        </div>

        {/* Bank Indonesia Jatim Photo Grid */}
        <div className="space-y-2">
          <span className="block text-xs font-mono font-semibold uppercase tracking-wider text-editorial-light-muted dark:text-editorial-dark-muted">
            {language === "id" ? "Galeri Sesi Pelatihan Bank Indonesia Jatim:" : "Training Session Gallery:"}
          </span>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {featuredBIPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() =>
                  setSelectedPhoto({
                    title: photo.title[language],
                    image: photo.image,
                    org: "Bank Indonesia KPw Jatim",
                    desc:
                      language === "id"
                        ? "Sesi lokakarya AI terapan dan pemodelan data ekonomi bersama tim analis Bank Indonesia KPw Jatim."
                        : "Applied AI and economic data modeling workshop with analysts at Bank Indonesia KPw Jatim.",
                  })
                }
                className="group relative aspect-[4/3] rounded-xl border border-editorial-light-border dark:border-editorial-dark-border overflow-hidden bg-neutral-950 cursor-pointer shadow-2xs hover:border-editorial-light-accent dark:hover:border-editorial-dark-accent transition-all"
              >
                <Image
                  src={photo.image}
                  alt={photo.title[language]}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-2.5">
                  <span className="text-white text-[11px] font-medium leading-tight line-clamp-1 group-hover:text-blue-200 transition-colors">
                    {photo.title[language]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Direct Collaboration CTA Card */}
      <div className="rounded-xl border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface dark:bg-editorial-dark-surface p-5 sm:p-6 shadow-xs space-y-4">
        <div className="space-y-1">
          <span className="text-xs font-mono font-semibold text-editorial-light-accent dark:text-editorial-dark-accent uppercase tracking-wider">
            {language === "id" ? "KOLABORASI & KONSULTASI" : "ENGAGEMENT & CONSULTATION"}
          </span>
          <h3 className="text-base sm:text-lg font-bold text-editorial-light-text dark:text-editorial-dark-text">
            {language === "id"
              ? "Siap Berkolaborasi untuk Peran Full-Time, Advisory, atau In-House Training"
              : "Available for Full-Time Roles, Technical Advisory, and Corporate Workshops"}
          </h3>
          <p className="text-xs sm:text-sm text-editorial-light-muted dark:text-editorial-dark-muted leading-relaxed">
            {language === "id"
              ? "Sedang mencari Software Engineer / Data Specialist untuk tim Anda, atau membutuhkan pelatihan teknis backend & AI untuk korporat? Hubungi langsung via WhatsApp atau Email."
              : "Recruiting a Software & Data Specialist for your engineering team, or planning custom technical training for your organization? Get in touch directly via WhatsApp or Email."}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <a
            href="https://wa.me/6281369075494"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs"
          >
            <BrandIcon name="whatsapp" size={16} />
            <span>{language === "id" ? "Diskusi via WhatsApp" : "Chat on WhatsApp"}</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
          </a>

          <a
            href="mailto:bayusedana26@gmail.com"
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-bg dark:bg-editorial-dark-bg hover:border-editorial-light-accent dark:hover:border-editorial-dark-accent text-editorial-light-text dark:text-editorial-dark-text text-xs sm:text-sm font-medium transition-colors"
          >
            <Mail className="w-4 h-4 text-editorial-light-accent dark:text-editorial-dark-accent" />
            <span>bayusedana26@gmail.com</span>
          </a>
        </div>
      </div>

      {/* Engagements Across Other Institutions */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-editorial-light-text dark:text-editorial-dark-text">
            {language === "id" ? "Dokumentasi Mitra Institusi Lainnya" : "Other Institutional Engagements"}
          </h3>

          {/* Filter Chips */}
          <div className="flex flex-wrap gap-1.5">
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveSessionFilter(cat.id)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors ${
                  activeSessionFilter === cat.id
                    ? "bg-editorial-light-text text-editorial-light-bg dark:bg-editorial-dark-text dark:text-editorial-dark-bg font-semibold"
                    : "border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface dark:bg-editorial-dark-surface text-editorial-light-muted dark:text-editorial-dark-muted hover:text-editorial-light-text dark:hover:text-editorial-dark-text"
                }`}
              >
                {cat.label[language]}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filteredSessions.map((item) => (
            <div
              key={item.id}
              onClick={() =>
                setSelectedPhoto({
                  title: item.title[language],
                  image: item.image,
                  org: item.org || item.clientLabel[language],
                  desc: item.description ? item.description[language] : undefined,
                })
              }
              className="group cursor-pointer rounded-xl border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface dark:bg-editorial-dark-surface overflow-hidden shadow-xs hover:border-editorial-light-accent dark:hover:border-editorial-dark-accent transition-colors flex flex-col justify-between"
            >
              <div className="relative w-full aspect-[16/10] bg-neutral-950 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title[language]}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-black/75 text-white backdrop-blur-xs">
                  {item.clientLabel[language]}
                </div>
              </div>

              <div className="p-4 space-y-1.5">
                <h4 className="text-sm font-bold text-editorial-light-text dark:text-editorial-dark-text leading-snug">
                  {item.title[language]}
                </h4>
                <p className="text-xs text-editorial-light-accent dark:text-editorial-dark-accent font-semibold">
                  {item.org}
                </p>
                {item.description && (
                  <p className="text-xs text-editorial-light-muted dark:text-editorial-dark-muted leading-relaxed line-clamp-2">
                    {item.description[language]}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedPhoto.title}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xs animate-fadeIn"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-xl border border-neutral-800 bg-neutral-900 text-white overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-neutral-800">
              <span className="font-mono text-xs text-blue-400 font-semibold truncate max-w-md">
                {selectedPhoto.title} • {selectedPhoto.org}
              </span>
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="p-1 rounded text-neutral-400 hover:text-white"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative w-full h-[65vh] bg-black p-2 flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            {selectedPhoto.desc && (
              <div className="p-4 bg-neutral-900 text-xs text-neutral-300 leading-relaxed border-t border-neutral-800">
                {selectedPhoto.desc}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
