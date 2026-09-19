"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { featuredBIPhotos, otherGallerySessions } from "@/data/gallery";
import {
  Maximize2,
  X,
  Building2,
} from "lucide-react";

export const GallerySection: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedClient, setSelectedClient] = useState<string>("all");
  const [lightboxData, setLightboxData] = useState<{
    image: string;
    title: string;
    subtitle?: string;
  } | null>(null);

  const clientFilters = [
    { key: "all", label: t.gallery.filterClientAll },
    { key: "bi", label: t.gallery.filterClientBI },
    { key: "dana-pensiun", label: t.gallery.filterClientDanaPensiun },
    { key: "binus", label: t.gallery.filterClientBinus },
    { key: "ut", label: t.gallery.filterClientUT },
    { key: "untag", label: t.gallery.filterClientUntag },
    { key: "kuliah-umum", label: t.gallery.filterClientWebinar },
  ];

  const showFeaturedAlbum = selectedClient === "all" || selectedClient === "bi";

  const filteredOtherSessions = otherGallerySessions.filter((item) => {
    if (selectedClient === "all") return true;
    return item.client === selectedClient;
  });

  return (
    <section id="gallery" className="w-full section-spacing border-b border-editorial-light-border dark:border-editorial-dark-border">
      <div className="editorial-container space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-editorial-light-accent dark:text-editorial-dark-accent font-semibold">
            {t.gallery.sectionTag}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-editorial-light-text dark:text-editorial-dark-text leading-tight">
            {t.gallery.pageTitle}
          </h2>
          <p className="text-base text-editorial-light-muted dark:text-editorial-dark-muted">
            {t.gallery.pageDesc}
          </p>
        </div>

        {/* Filter Controls: Klien / Institusi */}
        <div className="flex flex-wrap gap-2">
          {clientFilters.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setSelectedClient(f.key)}
              className={`px-3.5 py-1.5 rounded-md text-xs font-mono transition-colors border ${
                selectedClient === f.key
                  ? "bg-editorial-light-text dark:bg-editorial-dark-text text-editorial-light-bg dark:text-editorial-dark-bg border-transparent font-semibold shadow-sm"
                  : "border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface dark:bg-editorial-dark-surface text-editorial-light-muted dark:text-editorial-dark-muted hover:text-editorial-light-text dark:hover:text-editorial-dark-text"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* FEATURED ALBUM: Bank Indonesia KPw Jawa Timur */}
        {showFeaturedAlbum && (
          <div className="rounded-xl border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface dark:bg-editorial-dark-surface p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="space-y-2 border-b border-editorial-light-border/70 dark:border-editorial-dark-border/70 pb-4">
              <span className="inline-flex items-center space-x-1.5 rounded bg-editorial-light-accent/10 dark:bg-editorial-dark-accent/20 text-editorial-light-accent dark:text-editorial-dark-accent px-2.5 py-0.5 text-xs font-mono font-medium">
                <Building2 className="w-3.5 h-3.5" />
                <span>{t.gallery.featuredAlbumBadge}</span>
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-editorial-light-text dark:text-editorial-dark-text">
                {t.gallery.featuredAlbumTitle}
              </h3>
              <div className="text-xs font-mono text-editorial-light-accent dark:text-editorial-dark-accent font-semibold">
                {t.gallery.featuredAlbumInst}
              </div>
              <p className="text-xs sm:text-sm text-editorial-light-muted dark:text-editorial-dark-muted max-w-2xl leading-relaxed">
                {t.gallery.featuredAlbumDesc}
              </p>
            </div>

            {/* Photos Album Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4">
              {featuredBIPhotos.map((photo) => (
                <div
                  key={photo.id}
                  onClick={() =>
                    setLightboxData({
                      image: photo.image,
                      title: photo.title[language],
                      subtitle: t.gallery.featuredAlbumInst,
                    })
                  }
                  className="group relative h-40 sm:h-52 rounded-lg overflow-hidden bg-neutral-950 cursor-pointer border border-editorial-light-border dark:border-editorial-dark-border"
                >
                  <Image
                    src={photo.image}
                    alt={photo.title[language]}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-2 rounded-full bg-black/75 text-white">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* OTHER SESSIONS SECTION */}
        {filteredOtherSessions.length > 0 && (
          <div className="space-y-6">
            <h3 className="text-lg font-bold tracking-tight text-editorial-light-text dark:text-editorial-dark-text border-b border-editorial-light-border dark:border-editorial-dark-border pb-3">
              {t.gallery.otherHeading}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredOtherSessions.map((session) => (
                <article
                  key={session.id}
                  onClick={() =>
                    setLightboxData({
                      image: session.image,
                      title: session.title[language],
                      subtitle: session.org,
                    })
                  }
                  className="group rounded-lg border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface dark:bg-editorial-dark-surface overflow-hidden cursor-pointer hover:border-editorial-light-accent dark:hover:border-editorial-dark-accent transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="relative w-full h-52 bg-neutral-950 overflow-hidden">
                      <Image
                        src={session.image}
                        alt={session.title[language]}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute top-2.5 left-2.5 bg-black/75 backdrop-blur px-2.5 py-0.5 rounded text-[10px] font-mono text-white">
                        {session.clientLabel[language]}
                      </div>
                    </div>

                    <div className="p-4 space-y-1.5">
                      <h4 className="font-bold text-sm sm:text-base text-editorial-light-text dark:text-editorial-dark-text group-hover:text-editorial-light-accent dark:group-hover:text-editorial-dark-accent transition-colors">
                        {session.title[language]}
                      </h4>
                      {session.org && (
                        <div className="text-xs font-mono text-editorial-light-accent dark:text-editorial-dark-accent">
                          {session.org}
                        </div>
                      )}
                      {session.description && (
                        <p className="text-xs text-editorial-light-muted dark:text-editorial-dark-muted leading-relaxed line-clamp-2 pt-1">
                          {session.description[language]}
                        </p>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxData && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Training Gallery Lightbox"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setLightboxData(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-lg border border-neutral-800 bg-neutral-900 text-white overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox Header */}
            <div className="flex items-center justify-between px-6 py-3.5 border-b border-neutral-800">
              <span className="font-mono text-xs text-blue-400 font-semibold uppercase truncate">
                {lightboxData.subtitle || "Dokumentasi Kegiatan"}
              </span>
              <button
                onClick={() => setLightboxData(null)}
                type="button"
                className="p-1 rounded text-neutral-400 hover:text-white"
                aria-label={t.gallery.closeLightbox}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Media Frame */}
            <div className="relative w-full h-[380px] sm:h-[500px] bg-black flex items-center justify-center">
              <Image
                src={lightboxData.image}
                alt={lightboxData.title}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Lightbox Caption Footer */}
            <div className="px-6 py-4 bg-neutral-900 border-t border-neutral-800 space-y-1">
              <h4 className="text-base font-bold text-white">
                {lightboxData.title}
              </h4>
              {lightboxData.subtitle && (
                <p className="text-xs text-neutral-400 font-mono">
                  {lightboxData.subtitle}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
