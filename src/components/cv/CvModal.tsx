"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ExternalLink, Download } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Curriculum Vitae Preview"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-xl border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface dark:bg-editorial-dark-surface text-editorial-light-text dark:text-editorial-dark-text shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-bg/80 dark:bg-editorial-dark-bg/80">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span className="font-mono text-xs sm:text-sm font-semibold text-editorial-light-text dark:text-editorial-dark-text">
              Bayu Sedana: Curriculum Vitae
            </span>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3">
            <a
              href="/assets/images/Bayu_CV.png"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-mono font-medium border border-editorial-light-border dark:border-editorial-dark-border hover:border-editorial-light-accent dark:hover:border-editorial-dark-accent text-editorial-light-text dark:text-editorial-dark-text hover:text-editorial-light-accent dark:hover:text-editorial-dark-accent transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">
                {language === "id" ? "Buka File Penuh" : "Open Full Image"}
              </span>
            </a>

            <a
              href="/assets/images/Bayu_CV.png"
              download="Bayu_Sedana_CV.png"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-mono font-semibold bg-editorial-light-accent dark:bg-editorial-dark-accent text-white hover:opacity-90 transition-opacity"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{language === "id" ? "Unduh" : "Download"}</span>
            </a>

            <button
              onClick={onClose}
              type="button"
              className="p-1.5 rounded-md text-editorial-light-muted hover:text-editorial-light-text dark:text-editorial-dark-muted dark:hover:text-editorial-dark-text hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body / Image Viewer */}
        <div className="relative w-full h-[75vh] bg-neutral-950 flex items-center justify-center overflow-auto p-2">
          <div className="relative w-full h-full min-h-[500px]">
            <Image
              src="/assets/images/Bayu_CV.png"
              alt="Bayu Sedana Curriculum Vitae"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};
