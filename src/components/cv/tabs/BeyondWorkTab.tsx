"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { featuredBIPhotos, otherGallerySessions } from "@/data/gallery";
import { Camera, Mail, ArrowUpRight, X, Building2 } from "lucide-react";
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
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Fix #7: Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedPhoto) {
      document.body.style.overflow = "hidden";
      closeButtonRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selectedPhoto]);

  // Close lightbox on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedPhoto(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Fix #8: Focus trap for lightbox modal
  const handleModalKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "Tab" || !modalRef.current) return;
    const focusable = Array.from(
      modalRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, [tabindex]:not([tabindex="-1"])'
      )
    ).filter((el) => !el.hasAttribute("disabled"));
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      last.focus();
      e.preventDefault();
    } else if (!e.shiftKey && document.activeElement === last) {
      first.focus();
      e.preventDefault();
    }
  };

  const filterCategories = [
    { id: "all", label: { en: "All Engagements", id: "Semua Sesi" } },
    { id: "bi", label: { en: "Bank Indonesia", id: "Bank Indonesia" } },
    { id: "campus", label: { en: "Universities", id: "Kampus" } },
    { id: "pension", label: { en: "Enterprise", id: "Korporat" } },
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
      {/* Header */}
      <div className="space-y-1.5 pb-4 border-b border-editorial-light-border dark:border-editorial-dark-border">
        <div className="flex items-center space-x-2 text-xs font-mono font-semibold uppercase tracking-wider text-editorial-light-accent dark:text-editorial-dark-accent">
          <Camera className="w-3.5 h-3.5" />
          <span>{language === "id" ? "DOKUMENTASI TRAINING & ADVISORY" : "TRAINING & FIELD ENGAGEMENTS"}</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-editorial-light-text dark:text-editorial-dark-text">
          {language === "id"
            ? "Dokumentasi Lapangan & Corporate Training"
            : "In-House Training & Field Documentation"}
        </h2>
        <p className="text-xs sm:text-sm text-editorial-light-muted dark:text-editorial-dark-muted">
          {language === "id"
            ? "Bukti rekam jejak sebagai instruktur teknis dan konsultan data di bank sentral, universitas, dan korporat."
            : "Direct documentation as technical instructor and data consultant across central banking, universities, and enterprise."}
        </p>
      </div>

      {/* FEATURED: Bank Indonesia KPw Jatim */}
      <div className="rounded-2xl border-2 border-editorial-light-accent/30 dark:border-editorial-dark-accent/40 bg-editorial-light-surface dark:bg-editorial-dark-surface p-5 sm:p-7 shadow-sm space-y-5">
        {/* Card header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-editorial-light-border/70 dark:border-editorial-dark-border/70">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div className="space-y-0.5">
              <p className="text-[10px] font-mono font-semibold uppercase tracking-wider text-editorial-light-muted dark:text-editorial-dark-muted">
                Surabaya, Jawa Timur
              </p>
              <h3 className="text-base sm:text-lg font-bold text-editorial-light-text dark:text-editorial-dark-text">
                Bank Indonesia KPw Jawa Timur
              </h3>
            </div>
          </div>

          <span className="self-start sm:self-center inline-block px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 text-xs font-mono font-medium whitespace-nowrap">
            {language === "id" ? "Technical Instructor" : "Technical Instructor"}
          </span>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <h4 className="text-sm sm:text-base font-semibold text-editorial-light-text dark:text-editorial-dark-text">
            {language === "id"
              ? "Pelatihan In-House: AI Terapan & Data Analytics untuk Tim Analis Kebijakan"
              : "In-House Training: Applied AI & Data Analytics for Policy Analysts"}
          </h4>
          <p className="text-xs sm:text-sm text-editorial-light-muted dark:text-editorial-dark-muted leading-relaxed">
            {language === "id"
              ? "Menyelenggarakan lokakarya pemrograman terapan untuk jajaran analis Bank Indonesia KPw Jatim. Materi mencakup Python machine learning, automasi alur data ekonomi, algoritma prediksi, serta review kode langsung."
              : "Delivered hands-on programming workshops for economic policy analysts at Bank Indonesia KPw Jatim. Topics: Python machine learning workflows, automated economic reporting, predictive modeling, and live code clinics."}
          </p>
        </div>

        {/* Photo grid: NO text overlays on images */}
        <div className="space-y-2">
          <span className="block text-xs font-mono font-semibold uppercase tracking-wider text-editorial-light-muted dark:text-editorial-dark-muted">
            {language === "id" ? "Galeri Sesi:" : "Session Gallery:"}
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {featuredBIPhotos.map((photo) => (
              <button
                key={photo.id}
                type="button"
                onClick={() =>
                  setSelectedPhoto({
                    title: photo.title[language],
                    image: photo.image,
                    org: "Bank Indonesia KPw Jatim",
                    desc:
                      language === "id"
                        ? "Sesi workshop AI terapan dan pemodelan data ekonomi bersama tim analis Bank Indonesia KPw Jatim."
                        : "Applied AI and economic data modeling workshop with analysts at Bank Indonesia KPw Jatim.",
                  })
                }
                className="group relative aspect-[4/3] rounded-xl border border-editorial-light-border dark:border-editorial-dark-border overflow-hidden bg-neutral-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-editorial-light-accent shadow-2xs"
                aria-label={photo.title[language]}
              >
                <Image
                  src={photo.image}
                  alt={photo.title[language]}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Subtle hover overlay only: no persistent text on image */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-200 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-[11px] font-mono font-semibold px-2 py-1 rounded bg-black/60 backdrop-blur-xs">
                    {language === "id" ? "Lihat foto" : "View photo"}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="rounded-xl border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface dark:bg-editorial-dark-surface p-5 sm:p-6 shadow-xs space-y-4">
        <div className="space-y-1">
          <span className="text-xs font-mono font-semibold text-editorial-light-accent dark:text-editorial-dark-accent uppercase tracking-wider">
            {language === "id" ? "KOLABORASI & KONSULTASI" : "HIRE & COLLABORATE"}
          </span>
          <h3 className="text-base sm:text-lg font-bold text-editorial-light-text dark:text-editorial-dark-text">
            {language === "id"
              ? "Tersedia untuk Full-Time, Advisory, dan In-House Training"
              : "Available for Full-Time Roles, Advisory, and Corporate Workshops"}
          </h3>
          <p className="text-xs sm:text-sm text-editorial-light-muted dark:text-editorial-dark-muted leading-relaxed">
            {language === "id"
              ? "Butuh Software & Data Specialist untuk tim Anda, atau ingin mengadakan pelatihan teknis AI untuk korporat? Hubungi via WhatsApp atau Email."
              : "Recruiting a Software & Data Specialist, or planning custom technical training for your organization? Reach out via WhatsApp or Email."}
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
            <span>{language === "id" ? "Chat WhatsApp" : "Chat on WhatsApp"}</span>
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

      {/* Other Institutional Engagements */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-editorial-light-text dark:text-editorial-dark-text">
            {language === "id" ? "Kegiatan Institusi Lainnya" : "Other Institutional Engagements"}
          </h3>

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

        {/* Improved cards: larger image, bolder details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {filteredSessions.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() =>
                setSelectedPhoto({
                  title: item.title[language],
                  image: item.image,
                  org: item.org || item.clientLabel[language],
                  desc: item.description ? item.description[language] : undefined,
                })
              }
              className="group text-left rounded-2xl border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface dark:bg-editorial-dark-surface overflow-hidden shadow-xs hover:border-editorial-light-accent dark:hover:border-editorial-dark-accent hover:shadow-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-editorial-light-accent flex flex-col"
            >
              {/* Image: taller ratio, clean */}
              <div className="relative w-full aspect-[16/9] bg-neutral-950 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title[language]}
                  fill
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
                />
                {/* Client badge: top-left corner, semi-transparent */}
                <div className="absolute top-0 left-0 right-0 p-3 flex items-start justify-between bg-gradient-to-b from-black/50 to-transparent">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-black/60 text-white backdrop-blur-xs">
                    {item.clientLabel[language]}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* Details */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-editorial-light-text dark:text-editorial-dark-text leading-snug">
                    {item.title[language]}
                  </h4>
                  <p className="text-xs font-semibold text-editorial-light-accent dark:text-editorial-dark-accent">
                    {item.org}
                  </p>
                </div>
                {item.description && (
                  <p className="text-xs text-editorial-light-muted dark:text-editorial-dark-muted leading-relaxed line-clamp-2">
                    {item.description[language]}
                  </p>
                )}
              </div>
            </button>
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
          onKeyDown={handleModalKeyDown}
        >
          <div
            ref={modalRef}
            className="relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-xl border border-neutral-800 bg-neutral-900 text-white overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-neutral-800">
              <span className="font-mono text-xs text-blue-400 font-semibold truncate max-w-md">
                {selectedPhoto.title} · {selectedPhoto.org}
              </span>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="p-1 rounded text-neutral-400 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
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
