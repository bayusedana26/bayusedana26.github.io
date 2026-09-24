"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { certifications } from "@/data/certifications";
import { educationList } from "@/data/experience";
import { InstitutionalLogo } from "@/components/ui";
import { Award, GraduationCap, ExternalLink, X, ShieldCheck } from "lucide-react";

export const CredentialsTab: React.FC = () => {
  const { language } = useLanguage();
  const [selectedCert, setSelectedCert] = useState<(typeof certifications)[0] | null>(null);

  return (
    <div
      role="tabpanel"
      id="panel-credentials"
      aria-labelledby="tab-credentials"
      className="space-y-8 animate-fadeIn"
    >
      {/* Header Banner */}
      <div className="space-y-1.5 pb-4 border-b border-editorial-light-border dark:border-editorial-dark-border">
        <div className="flex items-center space-x-2 text-xs font-mono font-semibold uppercase tracking-wider text-editorial-light-accent dark:text-editorial-dark-accent">
          <Award className="w-3.5 h-3.5" />
          <span>{language === "id" ? "KREDENSIAL RESMI & EDUKASI" : "CREDENTIALS & EDUCATION"}</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-editorial-light-text dark:text-editorial-dark-text">
          {language === "id" ? "Sertifikasi Profesi & Pendidikan" : "Certifications & Education"}
        </h2>
        <p className="text-xs sm:text-sm text-editorial-light-muted dark:text-editorial-dark-muted">
          {language === "id"
            ? "Verifikasi kredensial teknis internasional di bidang cybersecurity, database SQL, dan machine learning."
            : "Verified industry credentials across cybersecurity, advanced SQL database engineering, and applied machine learning."}
        </p>
      </div>

      {/* Certifications with Visual Image Previews (Revision 6) */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <ShieldCheck className="w-4 h-4 text-editorial-light-accent dark:text-editorial-dark-accent" />
          <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-editorial-light-text dark:text-editorial-dark-text">
            {language === "id" ? "Sertifikasi Kompetensi Terverifikasi" : "Verified Industry Certifications"}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="flex flex-col justify-between rounded-xl border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface dark:bg-editorial-dark-surface overflow-hidden shadow-xs hover:border-editorial-light-accent dark:hover:border-editorial-dark-accent transition-colors"
            >
              {/* Visual Certificate Preview: Click links directly to official website or modal */}
              {cert.verifyUrl ? (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-full aspect-[16/11] bg-neutral-100 dark:bg-neutral-900/60 p-2.5 overflow-hidden block border-b border-editorial-light-border/60 dark:border-editorial-dark-border/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-editorial-light-accent"
                  title={
                    language === "id"
                      ? "Klik untuk buka verifikasi resmi"
                      : "Click to open official verification"
                  }
                >
                  <div className="relative w-full h-full rounded-lg overflow-hidden border border-editorial-light-border/40 dark:border-editorial-dark-border/40 bg-white dark:bg-neutral-950 flex items-center justify-center">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-contain p-1 group-hover:scale-[1.03] transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-mono font-semibold bg-white text-neutral-900 shadow-md">
                      <span>{language === "id" ? "Buka Verifikasi Resmi" : "Verify Credential"}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-black/75 text-white backdrop-blur-xs">
                    {cert.badge}
                  </div>
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => setSelectedCert(cert)}
                  className="group relative w-full aspect-[16/11] bg-neutral-100 dark:bg-neutral-900/60 p-2.5 overflow-hidden block border-b border-editorial-light-border/60 dark:border-editorial-dark-border/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-editorial-light-accent text-left"
                  title={language === "id" ? "Klik untuk memperbesar" : "Click to enlarge"}
                >
                  <div className="relative w-full h-full rounded-lg overflow-hidden border border-editorial-light-border/40 dark:border-editorial-dark-border/40 bg-white dark:bg-neutral-950 flex items-center justify-center">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-contain p-1 group-hover:scale-[1.03] transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-white text-neutral-900 shadow-md">
                      <span>{language === "id" ? "Perbesar Sertifikat" : "Enlarge Certificate"}</span>
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-black/75 text-white backdrop-blur-xs">
                    {cert.badge}
                  </div>
                </button>
              )}

              {/* Certificate Details */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-editorial-light-accent dark:text-editorial-dark-accent">
                      {cert.issuer}
                    </span>
                    <span className="text-[11px] font-mono text-editorial-light-muted dark:text-editorial-dark-muted">
                      {cert.date}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-editorial-light-text dark:text-editorial-dark-text leading-snug">
                    {cert.title}
                  </h4>

                  {cert.description && (
                    <p className="text-xs text-editorial-light-muted dark:text-editorial-dark-muted leading-relaxed">
                      {cert.description[language]}
                    </p>
                  )}
                </div>

                <div className="pt-3 border-t border-editorial-light-border/60 dark:border-editorial-dark-border/60 flex items-center justify-between text-xs font-mono">
                  {cert.credentialId ? (
                    <span className="text-[10px] text-editorial-light-muted dark:text-editorial-dark-muted truncate max-w-[150px]">
                      ID: {cert.credentialId}
                    </span>
                  ) : (
                    <span></span>
                  )}

                  {cert.verifyUrl ? (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 font-semibold text-editorial-light-accent dark:text-editorial-dark-accent hover:underline"
                    >
                      <span>{language === "id" ? "Buka Situs Resmi" : "Verify Website"}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setSelectedCert(cert)}
                      className="text-xs font-medium text-editorial-light-muted hover:text-editorial-light-text dark:text-editorial-dark-muted dark:hover:text-editorial-dark-text underline"
                    >
                      {language === "id" ? "Pratinjau" : "Preview"}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Formal Education Section */}
      <div className="space-y-4 pt-4 border-t border-editorial-light-border/60 dark:border-editorial-dark-border/60">
        <div className="flex items-center space-x-2">
          <GraduationCap className="w-4 h-4 text-emerald-500" />
          <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-editorial-light-text dark:text-editorial-dark-text">
            {language === "id" ? "Pendidikan Formal & Program Internasional" : "Formal Education & Scholar Programs"}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className="flex items-start space-x-3.5 p-4 sm:p-5 rounded-xl border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface dark:bg-editorial-dark-surface shadow-xs"
            >
              <InstitutionalLogo
                src={edu.logo}
                alt={edu.institution}
                className="w-10 h-10 p-1.5 shrink-0"
                size={40}
              />
              <div className="space-y-1 min-w-0">
                <h4 className="text-sm font-bold text-editorial-light-text dark:text-editorial-dark-text leading-snug">
                  {edu.institution}
                </h4>
                <p className="text-xs text-editorial-light-accent dark:text-editorial-dark-accent font-medium">
                  {edu.degree[language]}
                </p>
                <div className="flex items-center space-x-2 text-[11px] font-mono text-editorial-light-muted dark:text-editorial-dark-muted">
                  <span>
                    {typeof edu.period === "string" ? edu.period : edu.period[language]}
                  </span>
                  {edu.gpa && (
                    <>
                      <span>•</span>
                      <span>IPK {edu.gpa}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Lightbox Modal */}
      {selectedCert && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedCert.title}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-fadeIn"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[85vh] flex flex-col rounded-xl border border-neutral-800 bg-neutral-900 text-white overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-neutral-800">
              <span className="font-mono text-xs text-blue-400 font-semibold truncate max-w-md">
                {selectedCert.title}
              </span>
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="p-1 rounded text-neutral-400 hover:text-white"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative w-full h-[60vh] bg-black p-2 flex items-center justify-center">
              {selectedCert.image && (
                <div className="relative w-full h-full">
                  <Image
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
