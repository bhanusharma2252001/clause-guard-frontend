// src/pages/Processing.jsx
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";

export default function Processing() {
  const nav = useNavigate();
  const loc = useLocation();
  const fileName = loc.state?.fileName || "Document";

  useEffect(() => {
    // simulate server processing -> navigate to result
    const timer = setTimeout(() => {
      // Pass mock result or fileName to result page
      nav("/result", {
        state: {
          fileName,
          // mock payload (replace when connecting backend)
          result: {
            summary:
              "This contract defines a 12 month service agreement. Billing monthly, termination with 30 days notice. No explicit refund clause found.",
            missingClauses: ["Refund Policy", "Liability Cap"],
            riskyClauses: [
              "Vendor may increase price without prior notice.",
              "Termination favors vendor.",
            ],
            keyTerms: {
              duration: "12 months",
              billing: "Monthly",
              uptime: "98%",
              termination: "30 days notice",
            },
            riskScore: 64,
          },
        },
      });
    }, 1800);

    return () => clearTimeout(timer);
  }, [nav, fileName]);

  return (
    <DashboardLayout>
      <div className="flex flex-col items-center justify-center h-[70vh] text-center">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-3 h-3 bg-white dark:bg-[#e8e8e8] rounded-full animate-bounce" />
          <div
            className="w-3 h-3 bg-gray-300 dark:bg-[#a1a1a1] rounded-full animate-bounce"
            style={{ animationDelay: "0.12s" }}
          />
          <div
            className="w-3 h-3 bg-gray-500 dark:bg-[#7a7a7a] rounded-full animate-bounce"
            style={{ animationDelay: "0.24s" }}
          />
        </div>

        <h2 className="text-xl font-semibold text-gray-900 dark:text-[#e8e8e8]">
          Analyzing "{fileName}"
        </h2>
        <p className="text-sm text-gray-500 dark:text-[#a1a1a1] mt-3 max-w-xl">
          We are extracting clauses, checking contradictions, and scoring risk. This
          usually takes a few seconds.
        </p>
      </div>
    </DashboardLayout>
  );
}
