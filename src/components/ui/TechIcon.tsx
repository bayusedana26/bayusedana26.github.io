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

    case "express":
    case "expressjs":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="5" fill="#181818" />
          <path
            d="M5 8h4.5v1.6H7v2.2h2.2v1.6H7v2H9.5V17H5V8zm7.8 0l1.7 3.6L16.2 8H18l-2.6 4.5L18 17h-1.8l-1.7-3.6-1.7 3.6H11l2.6-4.5L11 8h1.8z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case "passport":
    case "passportjs":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="5" fill="#34E27A" />
          <path
            d="M12 4.5A4.5 4.5 0 007.5 9c0 2.2 1.6 4 3.7 4.4v6.1h1.6v-6.1c2.1-.4 3.7-2.2 3.7-4.4a4.5 4.5 0 00-4.5-4.5zm0 1.6a2.9 2.9 0 110 5.8 2.9 2.9 0 010-5.8z"
            fill="#0F2818"
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

    case "fastapi":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="11" fill="#009688" />
          <path
            d="M13.2 4L6.5 13.5h4.8L10.8 20l6.7-9.5h-4.8L13.2 4z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case "flask":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="5" fill="#1C1C1C" />
          <path
            d="M10 5v3.2l-4.5 7.8c-.8 1.4.2 3 1.8 3h9.4c1.6 0 2.6-1.6 1.8-3L14 8.2V5h-4zm1.5 1.5h1v2.5h-1V6.5zm-3.2 9.5l3.2-5.5v2.8c0 .4.3.7.7.7s.7-.3.7-.7V10.5l3.2 5.5H8.3z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case "pandas":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="4" fill="#150458" />
          <rect x="5" y="5" width="3" height="14" fill="#FFD43B" rx="1" />
          <rect x="10.5" y="8" width="3" height="11" fill="#E70488" rx="1" />
          <rect x="16" y="5" width="3" height="8" fill="#58C4DC" rx="1" />
        </svg>
      );

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
          <rect width="24" height="24" rx="4" fill="#013243" />
          <path
            d="M6 7.5v9h2.2v-5.2l4.4 5.2h2.2v-9h-2.2v5.2L8.2 7.5H6zm11 0v9h2.2v-9H17z"
            fill="#4DABCF"
          />
        </svg>
      );

    case "matplotlib":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="4" fill="#11557C" />
          <circle cx="12" cy="12" r="7" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="3 2" />
          <path d="M12 5v7l5 3" stroke="#FFD43B" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="12" cy="12" r="2.5" fill="#FF6B6B" />
        </svg>
      );

    case "streamlit":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="4" fill="#FFF1F0" />
          <path
            d="M6.5 17.5l5.5-11 5.5 11h-3l-2.5-5-2.5 5h-3zm3.5-3h4l-2-4-2 4z"
            fill="#FF4B4B"
          />
        </svg>
      );

    case "tensorflow":
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
            d="M12 2l9 5.2v10.4L12 22l-9-4.4V7.2L12 2z"
            fill="#FF6F00"
          />
          <path
            d="M12 5.5l6 3.5v7l-6 3.5-6-3.5v-7l6-3.5zm0 2.2L8.2 9.8v4.4L12 16.4l3.8-2.2V9.8L12 7.7z"
            fill="#FFA000"
          />
          <path
            d="M10.5 9h3v6h-3V9zm-2-1.5h7V9h-7V7.5z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case "opencv":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="7" r="4" fill="#E2231A" />
          <circle cx="7" cy="16" r="4" fill="#008FD5" />
          <circle cx="17" cy="16" r="4" fill="#1E972D" />
          <circle cx="12" cy="7" r="2" fill="#FFFFFF" />
          <circle cx="7" cy="16" r="2" fill="#FFFFFF" />
          <circle cx="17" cy="16" r="2" fill="#FFFFFF" />
        </svg>
      );

    case "mysql":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="4" fill="#00758F" />
          <path
            d="M5 16.5c1.2-2.5 3-4.5 5.5-5.5 2-1 4.5-.8 6.5.2-1.5.5-2.8 1.5-3.8 2.8-1.5 2-1.2 4-1.2 4s-1-2.5-3.5-2.5c-1.5 0-2.5.5-3.5 1z"
            fill="#F29111"
          />
          <circle cx="15.5" cy="10.5" r="1" fill="#FFFFFF" />
        </svg>
      );

    case "postgresql":
    case "postgre":
    case "sql":
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

    case "restapi":
    case "rest":
    case "api":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="4" fill="#2457D6" />
          <path
            d="M7 12h10M7 8h5M7 16h7"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="17" cy="8" r="1.5" fill="#4ADE80" />
          <circle cx="17" cy="16" r="1.5" fill="#FACC15" />
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
