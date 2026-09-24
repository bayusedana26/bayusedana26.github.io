"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { projects } from "@/data/projects";
import { FolderGit2, ExternalLink, ShieldAlert } from "lucide-react";

export const ProjectsTab: React.FC = () => {
  const { language } = useLanguage();
  const [filter, setFilter] = useState<string>("all");

  // Removed Pitch Decks per user request
  const categories = [
    { id: "all", label: { en: "All Public Work", id: "Semua Proyek Publik" } },
    { id: "apps", label: { en: "Web Apps", id: "Aplikasi Web" } },
    { id: "colab", label: { en: "ML & Colab", id: "Machine Learning" } },
    { id: "tableau", label: { en: "Tableau & BI", id: "Tableau & BI" } },
  ];

  // Exclude deck category completely
  const publicProjects = projects.filter((p) => p.category !== ("decks" as any));

  const filteredProjects =
    filter === "all" ? publicProjects : publicProjects.filter((p) => p.category === filter);

  return (
    <div
      role="tabpanel"
      id="panel-projects"
      aria-labelledby="tab-projects"
      className="space-y-6 animate-fadeIn"
    >
      {/* Header Banner */}
      <div className="space-y-1.5 pb-4 border-b border-editorial-light-border dark:border-editorial-dark-border">
        <div className="flex items-center space-x-2 text-xs font-mono font-semibold uppercase tracking-wider text-editorial-light-accent dark:text-editorial-dark-accent">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>{language === "id" ? "BUKTI IMPLEMENTASI TEKNIS" : "TECHNICAL IMPLEMENTATIONS"}</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-editorial-light-text dark:text-editorial-dark-text">
          {language === "id" ? "Proyek Publik Terpilih" : "Selected Public Projects"}
        </h2>
        <p className="text-xs sm:text-sm text-editorial-light-muted dark:text-editorial-dark-muted">
          {language === "id"
            ? "Implementasi aplikasi web, pemodelan data di Google Colab, dan visualisasi analitik interaktif."
            : "Production web applications, machine learning pipelines in Google Colab, and interactive Tableau dashboards."}
        </p>
      </div>

      {/* NDA Confidentiality Disclaimer Banner */}
      <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 dark:bg-amber-500/10 p-4 sm:p-4.5 text-xs text-amber-900 dark:text-amber-200 space-y-1.5 shadow-2xs">
        <div className="flex items-center space-x-2 font-mono font-semibold text-amber-800 dark:text-amber-300">
          <ShieldAlert className="w-4 h-4 shrink-0 text-amber-600 dark:text-amber-400" />
          <span>
            {language === "id"
              ? "Catatan Kerahasiaan (Non-Disclosure Agreement / NDA)"
              : "Confidentiality Notice (Non-Disclosure Agreement / NDA)"}
          </span>
        </div>
        <p className="leading-relaxed text-editorial-light-text/90 dark:text-editorial-dark-text/90">
          {language === "id"
            ? "Koleksi proyek di bawah ini adalah sebagian karya yang dapat dipublikasikan secara terbuka. Sebagian besar arsitektur backend, sistem internal korporat, dan integrasi database klien dilindungi oleh perjanjian kerahasiaan (NDA)."
            : "The projects displayed below represent authorized public work. Proprietary enterprise backend architectures, production databases, and internal analytics systems remain strictly protected under Non-Disclosure Agreements (NDA)."}
        </p>
      </div>

      {/* Category Filter Chips */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            type="button"
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
              filter === cat.id
                ? "bg-editorial-light-text text-editorial-light-bg dark:bg-editorial-dark-text dark:text-editorial-dark-bg font-semibold shadow-2xs"
                : "border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface dark:bg-editorial-dark-surface text-editorial-light-muted dark:text-editorial-dark-muted hover:text-editorial-light-text dark:hover:text-editorial-dark-text hover:border-editorial-light-accent dark:hover:border-editorial-dark-accent"
            }`}
          >
            {cat.label[language]}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col justify-between rounded-xl border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface dark:bg-editorial-dark-surface overflow-hidden shadow-xs hover:border-editorial-light-accent dark:hover:border-editorial-dark-accent transition-colors"
          >
            {/* Project Image Frame */}
            {project.image && (
              <div className="relative w-full h-44 bg-neutral-900 border-b border-editorial-light-border/60 dark:border-editorial-dark-border/60 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-black/70 text-white backdrop-blur-xs">
                  {project.categoryBadge[language]}
                </div>
              </div>
            )}

            {/* Project Details */}
            <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="text-base font-bold text-editorial-light-text dark:text-editorial-dark-text leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-editorial-light-muted dark:text-editorial-dark-muted leading-relaxed">
                  {project.description[language]}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {/* Tags */}
                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] font-mono border border-editorial-light-border/70 dark:border-editorial-dark-border/70 bg-editorial-light-bg dark:bg-editorial-dark-bg text-editorial-light-muted dark:text-editorial-dark-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Direct Action Link */}
                <div className="pt-2 border-t border-editorial-light-border/60 dark:border-editorial-dark-border/60 flex items-center justify-between">
                  {project.link && project.linkText ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 text-xs font-mono font-semibold text-editorial-light-accent dark:text-editorial-dark-accent hover:underline"
                    >
                      <span>{project.linkText[language]}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span></span>
                  )}

                  <span className="text-[10px] font-mono text-editorial-light-muted dark:text-editorial-dark-muted">
                    {project.ndaNote ? project.ndaNote[language] : ""}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
