// src/components/Card.jsx
import React from "react";

export default function Card({ children, className = "" }) {
  return (
   <div
  className={`
    bg-white dark:bg-[#161616]
    border border-gray-200 dark:border-[#1f1f1f]
    rounded-2xl p-6 shadow-sm ${className}
  `}
>

      {children}
    </div>
  );
}
