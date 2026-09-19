import React from "react";

export interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = "w-5 h-5", size = 20 }) => {
  const normalized = name.toLowerCase().replace(/[\s\-_.]/g, "");

  switch (normalized) {
    case "python":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          xmlns="http://www.w3.org/2000/svg"
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
          className={className}
          xmlns="http://www.w3.org/2000/svg"
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
    case "postgres":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          xmlns="http://www.w3.org/2000/svg"
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

    case "canva":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="6" fill="url(#canva_grad)" />
          <path
            d="M15.5 8.2c-.8 0-1.5.4-1.9 1.1-.6-.7-1.4-1.1-2.3-1.1-1.9 0-3.3 1.6-3.3 3.8s1.4 3.8 3.3 3.8c.9 0 1.7-.4 2.3-1.1.4.7 1.1 1.1 1.9 1.1 1.3 0 2.2-.9 2.2-2.3 0-1.4-.9-2.3-2.2-2.3zm-4.2 5.5c-1 0-1.8-.8-1.8-2.1s.8-2.1 1.8-2.1c1 0 1.8.8 1.8 2.1s-.8 2.1-1.8 2.1z"
            fill="#FFFFFF"
          />
          <defs>
            <linearGradient id="canva_grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00C4CC" />
              <stop offset="0.5" stopColor="#7D2AE8" />
              <stop offset="1" stopColor="#9B51E0" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "tableau":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          xmlns="http://www.w3.org/2000/svg"
        >
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
          className={className}
          xmlns="http://www.w3.org/2000/svg"
        >
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
          className={className}
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path
            d="M4.5 9h6.5v1.8H8.8v7.2H6.7v-7.2H4.5V9zm12.3 3.6c-.6-.4-1.3-.7-2-.9-.7-.2-1.3-.3-1.8-.3-.6 0-1.1.1-1.4.3-.3.2-.5.5-.5.9 0 .3.1.6.4.8.3.2.7.4 1.3.6l1.2.4c1 .3 1.7.7 2.2 1.2.5.5.7 1.2.7 2.1 0 1.1-.4 2-1.2 2.6-.8.6-1.9.9-3.2.9-1 0-1.9-.2-2.7-.6-.8-.4-1.4-1-1.8-1.7l1.7-1.1c.3.5.7.9 1.2 1.1.5.3 1.1.4 1.7.4.7 0 1.2-.1 1.5-.4.3-.2.5-.6.5-1 0-.3-.1-.6-.4-.8-.3-.2-.7-.4-1.3-.6l-1.2-.4c-1-.3-1.7-.7-2.1-1.2-.4-.5-.7-1.1-.7-1.9 0-1 .4-1.8 1.1-2.4.7-.6 1.7-.9 2.9-.9.8 0 1.6.2 2.3.5.7.3 1.3.8 1.7 1.4l-1.5 1.1z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case "git":
    case "github":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.6 10.9L13.1 2.4a1.5 1.5 0 00-2.1 0L8.9 4.5l2.7 2.7a1.8 1.8 0 012.3 2.3l2.6 2.6a1.8 1.8 0 11-1.1 1.1l-2.4-2.4v5.3a1.8 1.8 0 11-1.5 0V10.6a1.8 1.8 0 01-1-2.4L7.8 5.6 2.4 11a1.5 1.5 0 000 2.1l8.5 8.5c.6.6 1.5.6 2.1 0l8.6-8.6a1.5 1.5 0 000-2.1z"
            fill="#F05032"
          />
        </svg>
      );

    case "pandas":
    case "numpy":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="3" y="3" width="8" height="8" rx="2" fill="#4DABCF" />
          <rect x="13" y="3" width="8" height="8" rx="2" fill="#130754" />
          <rect x="3" y="13" width="8" height="8" rx="2" fill="#E70488" />
          <rect x="13" y="13" width="8" height="8" rx="2" fill="#FFD43B" />
        </svg>
      );

    case "nextjs":
    case "react":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4"
            transform="rotate(60 12 12)"
            stroke="#61DAFB"
            strokeWidth="1.5"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4"
            transform="rotate(120 12 12)"
            stroke="#61DAFB"
            strokeWidth="1.5"
          />
          <circle cx="12" cy="12" r="2" fill="#61DAFB" />
        </svg>
      );

    default:
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
  }
};
