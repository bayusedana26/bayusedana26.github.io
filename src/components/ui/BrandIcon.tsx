import React from "react";

export interface BrandIconProps {
  name:
    | "whatsapp"
    | "github"
    | "linkedin"
    | "medium"
    | "tableau"
    | "colab"
    | "googlecolab"
    | "typescript"
    | "ts"
    | "canva"
    | "python"
    | "nodejs"
    | "sql"
    | "nextjs"
    | "next"
    | "pandas"
    | string;
  className?: string;
  size?: number;
}

export const BrandIcon: React.FC<BrandIconProps> = ({
  name,
  className = "w-4 h-4",
  size = 18,
}) => {
  const normalized = name.toLowerCase().replace(/[\s\-_.]/g, "");

  switch (normalized) {
    case "whatsapp":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
        >
          {/* Official WhatsApp circle background with gradient */}
          <circle cx="16" cy="16" r="16" fill="#25D366" />
          <path
            d="M16.03 5C10.5 5 6.01 9.48 6.01 15c0 1.95.56 3.77 1.54 5.31L6 26l5.85-1.53A9.95 9.95 0 0016.03 25c5.52 0 10.01-4.48 10.01-10s-4.49-10-10.01-10zm0 18.29c-1.63 0-3.15-.45-4.46-1.23l-.32-.19-3.3.86.88-3.21-.21-.33a8.21 8.21 0 01-1.28-4.48c0-4.57 3.73-8.29 8.31-8.29 4.58 0 8.31 3.72 8.31 8.29 0 4.58-3.73 8.28-8.23 8.28zm4.56-6.22c-.25-.13-1.48-.73-1.71-.81-.23-.08-.4-.13-.57.13-.17.25-.65.81-.8 1-.15.17-.3.19-.55.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.25-1.49-1.4-1.74-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.57-1.37-.78-1.88-.2-.49-.41-.42-.57-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.42 1.44.53.61.19 1.16.16 1.59.1.48-.07 1.48-.61 1.69-1.19.21-.59.21-1.09.15-1.19-.06-.1-.23-.17-.48-.29z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case "github":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
        >
          {/* Official GitHub Invertocat silhouette */}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      );

    case "linkedin":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
        >
          {/* Official LinkedIn brand rounded tile */}
          <rect width="24" height="24" rx="4" fill="#0A66C2" />
          <path
            d="M7.05 19H4.15V9.45h2.9V19zM5.6 8.16a1.68 1.68 0 110-3.36 1.68 1.68 0 010 3.36zm14.35 10.84h-2.9v-4.73c0-1.13-.02-2.58-1.57-2.58-1.58 0-1.82 1.23-1.82 2.5v4.81h-2.9V9.45h2.78v1.3h.04c.39-.73 1.34-1.51 2.75-1.51 2.94 0 3.49 1.94 3.49 4.46V19h.03z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case "medium":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
        >
          {/* Official Medium three ellipses mark */}
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
        </svg>
      );

    case "tableau":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
        >
          {/* Official Tableau signature mark */}
          <rect x="11.2" y="1" width="1.6" height="4.5" fill="#E8762D" rx="0.5" />
          <rect x="9.8" y="2.4" width="4.4" height="1.6" fill="#E8762D" rx="0.5" />
          <rect x="11.2" y="18.5" width="1.6" height="4.5" fill="#E8762D" rx="0.5" />
          <rect x="9.8" y="20" width="4.4" height="1.6" fill="#E8762D" rx="0.5" />
          <rect x="1.5" y="11.2" width="4.5" height="1.6" fill="#E8762D" rx="0.5" />
          <rect x="3" y="9.8" width="1.6" height="4.4" fill="#E8762D" rx="0.5" />
          <rect x="18" y="11.2" width="4.5" height="1.6" fill="#E8762D" rx="0.5" />
          <rect x="19.5" y="9.8" width="1.6" height="4.4" fill="#E8762D" rx="0.5" />
          <rect x="11" y="6" width="2" height="12" fill="#E8492A" rx="0.6" />
          <rect x="6" y="11" width="12" height="2" fill="#E8492A" rx="0.6" />
          <rect x="5.8" y="5.8" width="1.2" height="3" fill="#5C8792" rx="0.4" />
          <rect x="4.9" y="6.7" width="3" height="1.2" fill="#5C8792" rx="0.4" />
          <rect x="17" y="5.8" width="1.2" height="3" fill="#1F4570" rx="0.4" />
          <rect x="16.1" y="6.7" width="3" height="1.2" fill="#1F4570" rx="0.4" />
          <rect x="5.8" y="15.2" width="1.2" height="3" fill="#2B5B84" rx="0.4" />
          <rect x="4.9" y="16.1" width="3" height="1.2" fill="#2B5B84" rx="0.4" />
          <rect x="17" y="15.2" width="1.2" height="3" fill="#7D98A1" rx="0.4" />
          <rect x="16.1" y="16.1" width="3" height="1.2" fill="#7D98A1" rx="0.4" />
        </svg>
      );

    case "colab":
    case "googlecolab":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
        >
          {/* Official Google Colaboratory infinity mark */}
          <path
            d="M7.4 8.5a4.5 4.5 0 000 7 4.5 4.5 0 005.1-1.2l-1.8-1.5a2.2 2.2 0 01-2.6.4 2.3 2.3 0 010-3.5 2.2 2.2 0 012.6.4l1.8-1.5A4.5 4.5 0 007.4 8.5z"
            fill="#F9AB00"
          />
          <path
            d="M16.6 8.5a4.5 4.5 0 00-5.1 1.2l1.8 1.5a2.2 2.2 0 012.6-.4 2.3 2.3 0 010 3.5 2.2 2.2 0 01-2.6-.4l-1.8 1.5a4.5 4.5 0 005.1-6.9z"
            fill="#E37400"
          />
        </svg>
      );

    case "typescript":
    case "ts":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
        >
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path
            d="M4.5 9h6.5v1.8H8.8v7.2H6.7v-7.2H4.5V9zm12.3 3.6c-.6-.4-1.3-.7-2-.9-.7-.2-1.3-.3-1.8-.3-.6 0-1.1.1-1.4.3-.3.2-.5.5-.5.9 0 .3.1.6.4.8.3.2.7.4 1.3.6l1.2.4c1 .3 1.7.7 2.2 1.2.5.5.7 1.2.7 2.1 0 1.1-.4 2-1.2 2.6-.8.6-1.9.9-3.2.9-1 0-1.9-.2-2.7-.6-.8-.4-1.4-1-1.8-1.7l1.7-1.1c.3.5.7.9 1.2 1.1.5.3 1.1.4 1.7.4.7 0 1.2-.1 1.5-.4.3-.2.5-.6.5-1 0-.3-.1-.6-.4-.8-.3-.2-.7-.4-1.3-.6l-1.2-.4c-1-.3-1.7-.7-2.1-1.2-.4-.5-.7-1.1-.7-1.9 0-1 .4-1.8 1.1-2.4.7-.6 1.7-.9 2.9-.9.8 0 1.6.2 2.3.5.7.3 1.3.8 1.7 1.4l-1.5 1.1z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case "canva":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
        >
          <rect width="24" height="24" rx="5" fill="url(#brand_canva_grad)" />
          <path
            d="M15.5 8.2c-.8 0-1.5.4-1.9 1.1-.6-.7-1.4-1.1-2.3-1.1-1.9 0-3.3 1.6-3.3 3.8s1.4 3.8 3.3 3.8c.9 0 1.7-.4 2.3-1.1.4.7 1.1 1.1 1.9 1.1 1.3 0 2.2-.9 2.2-2.3 0-1.4-.9-2.3-2.2-2.3zm-4.2 5.5c-1 0-1.8-.8-1.8-2.1s.8-2.1 1.8-2.1c1 0 1.8.8 1.8 2.1s-.8 2.1-1.8 2.1z"
            fill="#FFFFFF"
          />
          <defs>
            <linearGradient
              id="brand_canva_grad"
              x1="0"
              y1="0"
              x2="24"
              y2="24"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00C4CC" />
              <stop offset="0.5" stopColor="#7D2AE8" />
              <stop offset="1" stopColor="#9B51E0" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "python":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
        >
          <path
            d="M11.91 2c-5.37 0-5.04 2.33-5.04 2.33l.01 2.41h5.12v.72H4.22S2 7.2 2 12.56c0 5.37 1.94 5.28 1.94 5.28h1.16v-2.34s-.06-2.78 2.72-2.78h4.69v-.79H6.98s-.17-2.6 2.65-2.6h7.32s2.51.05 2.51-2.46c0-2.52-.01-4.87-.01-4.87S19.86 2 11.91 2zm-1.42 1.47a.78.78 0 11.01 1.56.78.78 0 01-.01-1.56z"
            fill="#3776AB"
          />
          <path
            d="M12.09 22c5.37 0 5.04-2.33 5.04-2.33l-.01-2.41h-5.12v-.72h7.78S22 16.8 22 11.44c0-5.37-1.94-5.28-1.94-5.28h-1.16v2.34s.06 2.78-2.72 2.78h-4.69v.79h5.53s.17 2.6-2.65 2.6H7.04s-2.51-.05-2.51 2.46c0 2.52.01 4.87.01 4.87S4.14 22 12.09 22zm1.42-1.47a.78.78 0 11-.01-1.56.78.78 0 01.01 1.56z"
            fill="#FFD43B"
          />
        </svg>
      );

    case "nodejs":
    case "node":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
        >
          <path
            d="M12 2l9.19 5.31v10.62L12 23.24 2.81 17.93V7.31L12 2z"
            fill="#5FA04E"
          />
          <path
            d="M12 4.1L4.85 8.23v8.27L12 20.63l7.15-4.13V8.23L12 4.1zm.07 3.3c2.72 0 4.29 1.41 4.29 3.52 0 2.25-1.56 3.09-3.32 3.42l-.99.19c-.93.18-1.53.48-1.53 1.05 0 .58.55.97 1.55.97 1.11 0 1.94-.38 2.67-.84l.84 1.46c-.95.66-2.09 1.03-3.56 1.03-2.6 0-4.32-1.39-4.32-3.6 0-2.04 1.46-3.05 3.32-3.4l.99-.19c.84-.16 1.48-.44 1.48-1.03 0-.52-.46-.88-1.41-.88-.95 0-1.78.33-2.5.76l-.83-1.46c.92-.61 2.08-1 3.42-1z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case "sql":
    case "postgresql":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
        >
          <path
            d="M12 3c-4.42 0-8 1.34-8 3v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6c0-1.66-3.58-3-8-3z"
            fill="#336791"
          />
          <path
            d="M20 10c0 1.66-3.58 3-8 3s-8-1.34-8-3M20 14c0 1.66-3.58 3-8 3s-8-1.34-8-3"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M12 3c4.42 0 8 1.34 8 3s-3.58 3-8 3-8-1.34-8-3 3.58-3 8-3z"
            fill="#4169E1"
          />
        </svg>
      );

    case "nextjs":
    case "next":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="12" fill="#000000" />
          <path
            d="M14.99 17.5L8.73 8.35v7.3H7V6.5h1.74l6.25 9.15V6.5h1.73V17.5h-1.73z"
            fill="#FFFFFF"
          />
          <path
            d="M13.5 13.5l3.2 4.65c.34-.23.66-.49.95-.77L14.7 12.8l-1.2.7z"
            fill="url(#brand_next_grad)"
          />
          <defs>
            <linearGradient id="brand_next_grad" x1="13.5" y1="13.5" x2="17.5" y2="18" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFFFFF" />
              <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "pandas":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
        >
          <rect width="24" height="24" rx="4" fill="#150458" />
          <rect x="4.5" y="8" width="2.5" height="8" rx="0.5" fill="#FFD43B" />
          <rect x="8.5" y="5" width="2.5" height="11" rx="0.5" fill="#FFFFFF" />
          <rect x="12.5" y="8" width="2.5" height="11" rx="0.5" fill="#E70488" />
          <rect x="16.5" y="11" width="2.5" height="5" rx="0.5" fill="#00C4CC" />
        </svg>
      );

    default:
      return null;
  }
};
