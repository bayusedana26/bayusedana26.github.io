"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Building2 } from "lucide-react";

interface InstitutionalLogoProps {
  src?: string;
  alt: string;
  className?: string;
  size?: number;
}

export const InstitutionalLogo: React.FC<InstitutionalLogoProps> = ({
  src,
  alt,
  className = "w-10 h-10 p-1.5",
  size = 40,
}) => {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div
        className={`flex items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800 text-editorial-light-muted dark:text-editorial-dark-muted border border-editorial-light-border/60 dark:border-neutral-700/60 shrink-0 ${className}`}
      >
        <Building2 className="w-4 h-4 opacity-75" />
      </div>
    );
  }

  return (
    <div
      className={`relative flex items-center justify-center rounded-lg bg-white border border-neutral-200/80 dark:border-neutral-700/80 shadow-xs dark:shadow-md dark:shadow-black/40 ring-1 ring-black/5 dark:ring-white/10 shrink-0 overflow-hidden transition-all duration-200 hover:scale-105 ${className}`}
      title={alt}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="w-full h-full object-contain"
        onError={() => setHasError(true)}
      />
    </div>
  );
};
