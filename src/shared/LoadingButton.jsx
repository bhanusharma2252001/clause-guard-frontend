// src/shared/LoadingButton.jsx
import React from "react";

export default function LoadingButton({ loading, children, className = "", ...rest }) {
  return (
    <button
      {...rest}
      className={`px-4 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition ${className}`}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
