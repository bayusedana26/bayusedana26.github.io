import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="editorial-container min-h-[60vh] flex flex-col items-center justify-center text-center py-20 space-y-4">
      <span className="font-mono text-xs uppercase tracking-widest text-editorial-light-accent dark:text-editorial-dark-accent font-semibold">
        404 / NOT FOUND
      </span>
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-editorial-light-text dark:text-editorial-dark-text">
        Page Not Found
      </h1>
      <p className="text-sm text-editorial-light-muted dark:text-editorial-dark-muted max-w-md">
        The requested resource or page does not exist. Please return to the main profile overview.
      </p>
      <div className="pt-4">
        <Link
          href="/"
          className="inline-flex items-center space-x-2 rounded-md px-4 py-2 text-xs font-semibold bg-editorial-light-text dark:bg-editorial-dark-text text-editorial-light-bg dark:text-editorial-dark-bg hover:opacity-90 transition-opacity"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
}
