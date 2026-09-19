"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Mail, ShieldCheck, CheckCircle2, ArrowUpRight } from "lucide-react";
import { BrandIcon } from "@/components/ui";

export const CollaborationSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="collaboration" className="w-full section-spacing border-b border-editorial-light-border dark:border-editorial-dark-border">
      <div className="editorial-container">
        <div className="rounded-xl border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface dark:bg-editorial-dark-surface p-8 sm:p-10 md:p-14 space-y-10 shadow-sm">
          {/* Header */}
          <div className="max-w-3xl space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-editorial-light-accent dark:text-editorial-dark-accent font-semibold">
              {t.collaboration.sectionTag}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-editorial-light-text dark:text-editorial-dark-text leading-tight">
              {t.collaboration.headline}
            </h2>
            <p className="text-base text-editorial-light-muted dark:text-editorial-dark-muted leading-relaxed">
              {t.collaboration.sub}
            </p>
          </div>

          {/* Scope Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {t.collaboration.services.map((service) => (
              <div
                key={service}
                className="flex items-start space-x-2.5 p-3.5 rounded-md border border-editorial-light-border/70 dark:border-editorial-dark-border/70 bg-editorial-light-bg/50 dark:bg-editorial-dark-bg/50"
              >
                <CheckCircle2 className="w-4 h-4 text-editorial-light-accent dark:text-editorial-dark-accent shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-editorial-light-text dark:text-editorial-dark-text">
                  {service}
                </span>
              </div>
            ))}
          </div>

          {/* NDA Confidentiality Banner */}
          <div className="rounded-lg border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-bg dark:bg-editorial-dark-bg p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <div className="p-2.5 rounded-md bg-editorial-light-surface dark:bg-editorial-dark-surface border border-editorial-light-border dark:border-editorial-dark-border shrink-0">
              <ShieldCheck className="w-6 h-6 text-editorial-light-accent dark:text-editorial-dark-accent" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-editorial-light-text dark:text-editorial-dark-text">
                {t.collaboration.ndaHeading}
              </h3>
              <p className="text-xs sm:text-sm text-editorial-light-muted dark:text-editorial-dark-muted leading-relaxed">
                {t.collaboration.ndaDescription}
              </p>
            </div>
          </div>

          {/* Direct Contact CTAs: WhatsApp, Email, LinkedIn */}
          <div className="pt-2 flex flex-wrap items-center gap-3.5">
            <a
              href="https://wa.me/6281369075494"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2.5 rounded-md px-5 py-3 text-sm font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors shadow-sm"
            >
              <BrandIcon name="whatsapp" size={18} />
              <span>{t.collaboration.ctaWhatsApp}</span>
            </a>

            <a
              href="mailto:bayusedana26@gmail.com?subject=Project%20Collaboration%20or%20Job%20Inquiry%20-%20Bayu%20Sedana"
              className="inline-flex items-center space-x-2.5 rounded-md px-5 py-3 text-sm font-semibold bg-editorial-light-text dark:bg-editorial-dark-text text-editorial-light-bg dark:text-editorial-dark-bg hover:opacity-90 transition-opacity shadow-sm"
            >
              <Mail className="w-4 h-4" />
              <span>{t.collaboration.ctaEmail}</span>
            </a>

            <a
              href="https://www.linkedin.com/in/bayusedana/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2.5 rounded-md px-5 py-3 text-sm font-semibold border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface dark:bg-editorial-dark-surface text-editorial-light-text dark:text-editorial-dark-text hover:border-editorial-light-accent dark:hover:border-editorial-dark-accent hover:text-editorial-light-accent dark:hover:text-editorial-dark-accent transition-colors shadow-xs"
            >
              <BrandIcon name="linkedin" size={16} />
              <span>{t.collaboration.ctaLinkedIn}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
