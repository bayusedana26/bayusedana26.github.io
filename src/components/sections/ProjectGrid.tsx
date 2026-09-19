"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { projects } from "@/data/projects";
import { Project, ProjectCategory } from "@/types";
import {
  ExternalLink,
  ShieldAlert,
  X,
  Maximize2,
  Code2,
  Globe,
  BarChart3,
  Flame,
  BookOpen,
  ChevronDown,
} from "lucide-react";

export const ProjectGrid: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [lightboxProject, setLightboxProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  const handleCategoryChange = (cat: ProjectCategory) => {
    setActiveCategory(cat);
    setShowAll(false);
  };

  const categories: { key: ProjectCategory; label: string; icon?: React.ElementType; count: number }[] = [
    { key: "all", label: t.projects.filterAll, count: projects.length },
    {
      key: "colab",
      label: t.projects.filterColab,
      icon: Code2,
      count: projects.filter((p) => p.category === "colab").length,
    },
    {
      key: "apps",
      label: t.projects.filterApps,
      icon: Globe,
      count: projects.filter((p) => p.category === "apps").length,
    },
    {
      key: "tableau",
      label: t.projects.filterTableau,
      icon: BarChart3,
      count: projects.filter((p) => p.category === "tableau").length,
    },
    {
      key: "indofun",
      label: t.projects.filterIndofun,
      icon: Flame,
      count: projects.filter((p) => p.category === "indofun").length,
    },
    {
      key: "workshop",
      label: t.projects.filterWorkshop,
      icon: BookOpen,
      count: projects.filter((p) => p.category === "workshop").length,
    },
  ];

  const filteredProjects = projects.filter((item) => {
    if (activeCategory === "all") return true;
    return item.category === activeCategory;
  });

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);

  return (
    <section id="projects" className="w-full section-spacing border-b border-editorial-light-border dark:border-editorial-dark-border">
      <div className="editorial-container space-y-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-editorial-light-accent dark:text-editorial-dark-accent font-semibold">
            {t.projects.sectionTag}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-editorial-light-text dark:text-editorial-dark-text leading-tight">
            {t.projects.pageTitle}
          </h2>
          <p className="text-base text-editorial-light-muted dark:text-editorial-dark-muted">
            {t.projects.pageDesc}
          </p>
        </div>

        {/* NDA & Confidentiality Disclaimer Box */}
        <div className="rounded-lg border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface dark:bg-editorial-dark-surface p-4 sm:p-5 flex items-start space-x-3.5 shadow-sm">
          <ShieldAlert className="w-5 h-5 text-editorial-light-accent dark:text-editorial-dark-accent shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-editorial-light-muted dark:text-editorial-dark-muted leading-relaxed">
            {t.projects.ndaDisclaimer}
          </p>
        </div>

        {/* Filter Buttons Row with Counts */}
        <div className="flex flex-wrap gap-2 pt-2">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => handleCategoryChange(cat.key)}
                className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-mono transition-colors border ${
                  isActive
                    ? "bg-editorial-light-text dark:bg-editorial-dark-text text-editorial-light-bg dark:text-editorial-dark-bg border-transparent font-semibold shadow-sm"
                    : "border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface dark:bg-editorial-dark-surface text-editorial-light-muted dark:text-editorial-dark-muted hover:text-editorial-light-text dark:hover:text-editorial-dark-text"
                }`}
              >
                {Icon && <Icon className="w-3.5 h-3.5" />}
                <span>{cat.label}</span>
                <span className="opacity-70 text-[10px]">({cat.count})</span>
              </button>
            );
          })}
        </div>

        {/* Projects Gallery Grid (2-Column Editorial Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visibleProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col justify-between rounded-lg border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface dark:bg-editorial-dark-surface overflow-hidden hover:border-editorial-light-accent dark:hover:border-editorial-dark-accent transition-all duration-200"
            >
              <div>
                {/* Visual Thumbnail */}
                <div
                  className="relative w-full h-56 sm:h-64 bg-neutral-900 overflow-hidden cursor-pointer"
                  onClick={() => setLightboxProject(project)}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Category Tag Overlay */}
                  <div className="absolute top-3 left-3 bg-black/75 backdrop-blur px-2.5 py-1 rounded text-[11px] font-mono text-white">
                    {project.categoryBadge[language]}
                  </div>
                  {/* Zoom Hint */}
                  <div className="absolute top-3 right-3 bg-black/75 backdrop-blur px-2 py-1 rounded text-[11px] font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center space-x-1">
                    <Maximize2 className="w-3 h-3" />
                    <span>{t.projects.previewHint}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="rounded bg-editorial-light-bg dark:bg-editorial-dark-bg border border-editorial-light-border dark:border-editorial-dark-border px-2 py-0.5 text-[11px] font-mono text-editorial-light-accent dark:text-editorial-dark-accent font-medium">
                      {project.typePill[language]}
                    </span>
                    {project.tags && project.tags.length > 0 && (
                      <span className="text-[11px] font-mono text-editorial-light-muted dark:text-editorial-dark-muted truncate max-w-[160px]">
                        {project.tags[0]}
                      </span>
                    )}
                  </div>

                  <h3
                    onClick={() => setLightboxProject(project)}
                    className="text-lg sm:text-xl font-bold tracking-tight text-editorial-light-text dark:text-editorial-dark-text hover:text-editorial-light-accent dark:hover:text-editorial-dark-accent transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-editorial-light-muted dark:text-editorial-dark-muted leading-relaxed line-clamp-3">
                    {project.description[language]}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-3.5 border-t border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-bg/50 dark:bg-editorial-dark-bg/50 flex items-center justify-between">
                <span className="text-xs font-mono text-editorial-light-muted dark:text-editorial-dark-muted">
                  {project.ndaNote ? project.ndaNote[language] : "Project Details"}
                </span>

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-xs font-semibold text-editorial-light-text dark:text-editorial-dark-text hover:text-editorial-light-accent dark:hover:text-editorial-dark-accent transition-colors"
                  >
                    <span>{project.linkText ? project.linkText[language] : t.projects.visitProject}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => setLightboxProject(project)}
                    className="inline-flex items-center space-x-1 text-xs font-semibold text-editorial-light-text dark:text-editorial-dark-text hover:text-editorial-light-accent dark:hover:text-editorial-dark-accent transition-colors"
                  >
                    <span>{project.linkText ? project.linkText[language] : t.projects.previewHint}</span>
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Show More / Show Less Pagination Toggle */}
        {filteredProjects.length > 4 && (
          <div className="flex flex-col items-center justify-center pt-2 space-y-2">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg border border-editorial-light-border dark:border-editorial-dark-border bg-editorial-light-surface dark:bg-editorial-dark-surface text-xs font-mono font-semibold text-editorial-light-text dark:text-editorial-dark-text hover:border-editorial-light-accent dark:hover:border-editorial-dark-accent hover:text-editorial-light-accent dark:hover:text-editorial-dark-accent transition-all shadow-xs"
            >
              <span>
                {showAll
                  ? language === "id"
                    ? "Tampilkan Lebih Sedikit (4 Teratas)"
                    : "Show Less (Top 4)"
                  : language === "id"
                    ? `Lihat Semua Proyek (+${filteredProjects.length - 4} Proyek Lainnya)`
                    : `Show More Projects (+${filteredProjects.length - 4} More)`}
              </span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  showAll ? "rotate-180" : ""
                }`}
              />
            </button>
            <span className="text-[11px] font-mono text-editorial-light-muted dark:text-editorial-dark-muted">
              {showAll
                ? `${filteredProjects.length} / ${filteredProjects.length} ${
                    language === "id" ? "proyek ditampilkan" : "projects shown"
                  }`
                : `4 / ${filteredProjects.length} ${
                    language === "id"
                      ? "proyek teratas ditampilkan"
                      : "top projects shown"
                  }`}
            </span>
          </div>
        )}
      </div>

      {/* Project Image Lightbox Modal */}
      {lightboxProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Project Preview"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setLightboxProject(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[92vh] flex flex-col rounded-lg border border-neutral-800 bg-neutral-900 text-white overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800">
              <span className="font-mono text-xs text-blue-400 font-semibold uppercase">
                {lightboxProject.categoryBadge[language]}
              </span>
              <button
                onClick={() => setLightboxProject(null)}
                type="button"
                className="p-1 rounded text-neutral-400 hover:text-white"
                aria-label={t.projects.closeModal}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Media Frame */}
            <div className="relative w-full h-[360px] sm:h-[480px] bg-black flex items-center justify-center">
              <Image
                src={lightboxProject.image}
                alt={lightboxProject.title}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Modal Footer Meta */}
            <div className="px-6 py-4 bg-neutral-900 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1 max-w-xl">
                <h4 className="text-base font-bold text-white">
                  {lightboxProject.title}
                </h4>
                <p className="text-xs text-neutral-300 leading-relaxed line-clamp-2">
                  {lightboxProject.description[language]}
                </p>
              </div>

              {lightboxProject.link && (
                <a
                  href={lightboxProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-md bg-white text-black text-xs font-semibold hover:bg-neutral-200 transition-colors shrink-0"
                >
                  <span>{lightboxProject.linkText ? lightboxProject.linkText[language] : t.projects.visitProject}</span>
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
