"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { otherGallerySessions } from "@/data/gallery";
import { Camera, Mail, ArrowUpRight, X } from "lucide-react";
import { BrandIcon } from "@/components/ui";

export const BeyondWorkTab: React.FC = () => {
  const { language } = useLanguage();
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof otherGallerySessions)[0] | null>(null);

  return (
    <div
      role="tabpanel"
      id="panel-beyond"
      aria-labelledby="tab-beyond"
      className="space-y-8 animate-fadeIn"
    >
      {/* Header Banner */}
      <div className="space-y-1.5 pb-4 border-b border-editorial-light-border dark:border-editorial-dark-border">
        <div className="flex items-center space-x-2 text-xs font-mono font-semibold uppercase tracking-wider text-editorial-light-accent dark:text-editorial-dark-accent">
          <Camera className="w-3.5 h-3.5" />
          <span>{language === "id" ? "DOKUMENTASI & INTERAKSI" : "DOCUMENTATION & ENGAGEMENT"}</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-editorial-light-text dark:text-editorial-dark-text">
          {language === "id" ? "Dokumentasi Training & Hubungi Saya" : "Training Engagements & Contact"}
        </h2>
        <p className="text-xs sm:text-sm text-editorial-light-muted dark:text-editorial-dark-muted">
          {language === "id"
            ? "Dokumentasi sesi training in-house, kuliah tamu, dan kolaborasi teknis dengan instansi terkemuka."
            : "Photo documentation from corporate in-house trainings, guest lectures, and technical mentoring sessions."}
        </p>
      </div>

      {/* Collaboration / Direct Contact Card */}
      <div className="rounded-xl border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface dark:bg-editorial-dark-surface p-5 sm:p-6 shadow-xs space-y-4">
        <div className="space-y-1">
          <span className="text-xs font-mono font-semibold text-editorial-light-accent dark:text-editorial-dark-accent uppercase tracking-wider">
            {language === "id" ? "TERBUKA UNTUK DISKUSI" : "OPEN FOR OPPORTUNITIES"}
          </span>
          <h3 className="text-base sm:text-lg font-bold text-editorial-light-text dark:text-editorial-dark-text">
            {language === "id"
              ? "Siap Berkolaborasi untuk Peran Full-Time, Konsultasi, atau Corporate Training"
              : "Ready to Collaborate on Full-Time Roles, Technical Advisory, or In-House Training"}
          </h3>
          <p className="text-xs sm:text-sm text-editorial-light-muted dark:text-editorial-dark-muted leading-relaxed">
            {language === "id"
              ? "Tertarik mendiskusikan peluang kerja, proyek pengembangan sistem, atau membutuhkan instruktur data analytics untuk tim Anda? Hubungi langsung melalui WhatsApp atau Email."
              : "Interested in discussing full-time opportunities, software development projects, or need technical training for your organization? Reach out directly via WhatsApp or Email."}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="https://wa.me/6281369075494"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs"
          >
            <BrandIcon name="whatsapp" size={16} />
            <span>{language === "id" ? "Chat via WhatsApp" : "Chat on WhatsApp"}</span>
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

      {/* Gallery Cards Grid */}
      <div className="space-y-4">
        <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-editorial-light-text dark:text-editorial-dark-text">
          {language === "id" ? "Dokumentasi Sesi & Kemitraan" : "Session Documentation & Engagements"}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {otherGallerySessions.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group cursor-pointer rounded-xl border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface dark:bg-editorial-dark-surface overflow-hidden shadow-xs hover:border-editorial-light-accent dark:hover:border-editorial-dark-accent transition-colors flex flex-col justify-between"
            >
              <div className="relative w-full h-48 bg-neutral-900 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title[language]}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-black/70 text-white backdrop-blur-xs">
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

      {/* Gallery Lightbox Modal */}
      {selectedPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedPhoto.title[language]}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xs animate-fadeIn"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-xl border border-neutral-800 bg-neutral-900 text-white overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-neutral-800">
              <span className="font-mono text-xs text-blue-400 font-semibold truncate max-w-md">
                {selectedPhoto.title[language]} • {selectedPhoto.org}
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
                  alt={selectedPhoto.title[language]}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            {selectedPhoto.description && (
              <div className="p-4 bg-neutral-900 text-xs text-neutral-300 leading-relaxed border-t border-neutral-800">
                {selectedPhoto.description[language]}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
