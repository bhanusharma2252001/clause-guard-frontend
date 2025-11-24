// src/components/BrandLogo.jsx
export default function BrandLogo({ size = 34 }) {
  return (
    <div className="flex items-center gap-3">
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        className="text-black dark:text-[#e8e8e8]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Shield shape */}
        <path d="M12 2l7 3v6c0 5-3.5 9-7 11-3.5-2-7-6-7-11V5l7-3z" />

        {/* Inner document */}
        <path d="M9 10h6M9 13h4" />
      </svg>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-[#e8e8e8] tracking-tight">
          ClauseGuard
        </h3>
        <p className="text-xs text-gray-500 dark:text-[#a1a1a1] -mt-1">
          Contract Analyzer
        </p>
      </div>
    </div>
  );
}
