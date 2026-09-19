"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { certifications } from "@/data/certifications";
import { Certification } from "@/types";
import { ShieldCheck, ExternalLink, Maximize2, X } from "lucide-react";

export const CertificationList: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeCert, setActiveCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="w-full section-spacing border-b border-editorial-light-border dark:border-editorial-dark-border">
      <div className="editorial-container space-y-10">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-editorial-light-accent dark:text-editorial-dark-accent font-semibold">
            {t.certifications.sectionTag}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-editorial-light-text dark:text-editorial-dark-text leading-tight">
            {t.certifications.pageTitle}
          </h2>
          <p className="text-base text-editorial-light-muted dark:text-editorial-dark-muted">
            {t.certifications.pageDesc}
          </p>
        </div>

        {/* Visual Certificate Gallery Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <article
              key={cert.id}
              className="group flex flex-col justify-between rounded-lg border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface dark:bg-editorial-dark-surface overflow-hidden hover:border-editorial-light-accent dark:hover:border-editorial-dark-accent transition-all duration-200"
            >
              <div>
                {/* Certificate Thumbnail Preview */}
                <div
                  className="relative w-full h-48 sm:h-52 bg-neutral-950 overflow-hidden cursor-pointer"
                  onClick={() => setActiveCert(cert)}
                >
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-black/75 backdrop-blur px-2.5 py-0.5 rounded text-[10px] font-mono text-white">
                    {cert.badge}
                  </div>
                  <div className="absolute top-2.5 right-2.5 bg-black/75 backdrop-blur px-2 py-0.5 rounded text-[10px] font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center space-x-1">
                    <Maximize2 className="w-3 h-3" />
                    <span>Preview ↗</span>
                  </div>
                </div>

                {/* Body Meta */}
                <div className="p-5 space-y-2">
                  <h3
                    onClick={() => setActiveCert(cert)}
                    className="text-base font-bold tracking-tight text-editorial-light-text dark:text-editorial-dark-text hover:text-editorial-light-accent dark:hover:text-editorial-dark-accent transition-colors cursor-pointer line-clamp-2"
                  >
                    {cert.title}
                  </h3>

                  <div className="text-xs text-editorial-light-muted dark:text-editorial-dark-muted flex items-center space-x-1.5 font-mono">
                    <ShieldCheck className="w-3.5 h-3.5 text-editorial-light-accent dark:text-editorial-dark-accent shrink-0" />
                    <span>{cert.issuer}</span>
                    <span>&bull;</span>
                    <span>{cert.date}</span>
                  </div>

                  {cert.description && (
                    <p className="text-xs text-editorial-light-muted dark:text-editorial-dark-muted leading-relaxed line-clamp-2 pt-1">
                      {cert.description[language]}
                    </p>
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="px-5 py-3 border-t border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-bg/50 dark:bg-editorial-dark-bg/50 flex items-center justify-between">
                <span className="text-[11px] font-mono text-editorial-light-muted dark:text-editorial-dark-muted">
                  ID: {cert.credentialId}
                </span>

                {cert.verifyUrl ? (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-xs font-semibold text-editorial-light-accent dark:text-editorial-dark-accent hover:underline"
                  >
                    <span>{t.certifications.verifyOnline}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => setActiveCert(cert)}
                    className="inline-flex items-center space-x-1 text-xs font-semibold text-editorial-light-text dark:text-editorial-dark-text hover:text-editorial-light-accent dark:hover:text-editorial-dark-accent"
                  >
                    <span>{t.certifications.viewFull}</span>
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Certificate Lightbox Modal */}
      {activeCert && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Certificate Preview"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveCert(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[92vh] flex flex-col rounded-lg border border-neutral-800 bg-neutral-900 text-white overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800">
              <span className="font-mono text-xs text-blue-400 font-semibold uppercase">
                {activeCert.issuer} &bull; {activeCert.date}
              </span>
              <button
                onClick={() => setActiveCert(null)}
                type="button"
                className="p-1 rounded text-neutral-400 hover:text-white"
                aria-label={t.certifications.closeModal}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Media Frame */}
            <div className="relative w-full h-[360px] sm:h-[480px] bg-black flex items-center justify-center p-2">
              <Image
                src={activeCert.image}
                alt={activeCert.title}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-neutral-900 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-0.5 max-w-xl">
                <h4 className="text-base font-bold text-white">
                  {activeCert.title}
                </h4>
                <div className="text-xs text-neutral-400 font-mono">
                  Credential ID: {activeCert.credentialId}
                </div>
              </div>

              {activeCert.verifyUrl ? (
                <a
                  href={activeCert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-md bg-white text-black text-xs font-semibold hover:bg-neutral-200 transition-colors shrink-0"
                >
                  <span>{t.certifications.verifyOnline}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <a
                  href={activeCert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-md bg-neutral-800 text-white text-xs font-semibold hover:bg-neutral-700 transition-colors shrink-0"
                >
                  <span>{t.certifications.viewFull}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
