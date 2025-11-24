// src/pages/DocumentResultPage.jsx
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import {
  DocumentTextIcon,
  XCircleIcon,
  CheckCircleIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";

export default function DocumentResultPage() {
  const loc = useLocation();
  const nav = useNavigate();
  // receive either result or use mock
  const fileName = loc.state?.fileName || loc.state?.result?.fileName || "Uploaded Document";
  const result = loc.state?.result || {
    summary:
      "This agreement establishes a 12-month service contract between the parties. Billing monthly. Termination requires 30 days notice.",
    missingClauses: ["Refund Policy", "Liability Cap"],
    riskyClauses: [
      "Vendor can increase price without prior approval.",
      "Termination is one-sided and favors vendor.",
    ],
    keyTerms: {
      duration: "12 months",
      billing: "Monthly",
      uptime: "98%",
      termination: "30 days notice",
    },
    recommendations: [
      "Request capped pricing clause or notification window for price changes.",
      "Ask for mutual termination terms or extend notice period.",
    ],
    riskScore: 64,
  };

  const [tab, setTab] = useState("summary");

  const downloadReport = () => {
    // placeholder: implement server PDF generation or client-side html2pdf later
    alert("Download report (mock). Implement server PDF export in backend.");
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-[#e8e8e8]">Analysis Report</h1>
        <p className="text-sm text-gray-500 dark:text-[#a1a1a1]">AI-powered breakdown of your document</p>
      </div>

      {/* Document info + actions */}
      <div className="bg-white dark:bg-[#161616] border border-gray-200 dark:border-[#1f1f1f] rounded-3xl p-6 flex items-center justify-between shadow-sm mb-8">
        <div className="flex items-center gap-4">
          <DocumentTextIcon className="w-12 h-12 text-gray-700 dark:text-[#e8e8e8]" />
          <div>
            <div className="text-lg font-semibold text-gray-900 dark:text-[#e8e8e8]">{fileName}</div>
            <div className="text-xs text-gray-400 dark:text-[#a1a1a1]">Analyzed just now</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-center mr-4">
            <div className="text-xs text-gray-500 dark:text-[#a1a1a1]">Risk score</div>
            <div className="text-lg font-semibold text-gray-900 dark:text-[#e8e8e8]">{result.riskScore}/100</div>
          </div>

          <button
            onClick={downloadReport}
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#262626] hover:bg-gray-50 dark:hover:bg-[#222222] transition text-sm text-gray-700 dark:text-[#e8e8e8]"
            title="Download report as PDF"
          >
            <ArrowDownTrayIcon className="w-4 h-4" />
            Download
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 border-b border-gray-200 dark:border-[#262626] mb-6">
        {[
          { key: "summary", label: "Summary" },
          { key: "redflags", label: "Red Flags" },
          { key: "terms", label: "Key Terms" },
          { key: "recommend", label: "Recommendations" },
        ].map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`pb-3 text-sm font-medium transition ${
              tab === t.key ? "border-b-2 border-black dark:border-[#e8e8e8] text-gray-900 dark:text-[#e8e8e8]" : "text-gray-500 dark:text-[#a1a1a1] hover:text-gray-900 dark:hover:text-[#e8e8e8]"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Content card */}
      <div className="bg-white dark:bg-[#161616] border border-gray-200 dark:border-[#1f1f1f] rounded-3xl p-6 shadow-sm">
        {tab === "summary" && (
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-[#e8e8e8]">High-level summary</h3>
            <p className="text-gray-700 dark:text-[#e8e8e8] leading-relaxed">{result.summary}</p>
          </div>
        )}

        {tab === "redflags" && (
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-[#e8e8e8]">Potential issues</h3>
            <div className="space-y-3">
              {result.riskyClauses.map((r, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-red-50 dark:bg-[#2a1a1a] border border-red-100 dark:border-[#3a1a1a] rounded-xl">
                  <XCircleIcon className="w-6 h-6 text-red-600" />
                  <p className="text-sm text-gray-700 dark:text-[#e8e8e8]">{r}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "terms" && (
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-[#e8e8e8]">Key terms</h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-[#e8e8e8]">
              <li><strong>Duration:</strong> {result.keyTerms.duration}</li>
              <li><strong>Billing:</strong> {result.keyTerms.billing}</li>
              <li><strong>Uptime:</strong> {result.keyTerms.uptime}</li>
              <li><strong>Termination:</strong> {result.keyTerms.termination}</li>
            </ul>
          </div>
        )}

        {tab === "recommend" && (
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-[#e8e8e8]">Recommendations</h3>
            <div className="space-y-3">
              {result.recommendations.map((rec, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-green-50 dark:bg-[#10321a] border border-green-100 dark:border-[#153a22] rounded-xl">
                  <CheckCircleIcon className="w-6 h-6 text-green-600" />
                  <p className="text-sm text-gray-700 dark:text-[#e8e8e8]">{rec}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer actions */}
      <div className="mt-6 flex gap-3">
        <button
          onClick={() => nav("/analyses")}
          className="px-4 py-2 rounded-xl bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#262626] text-sm text-gray-700 dark:text-[#e8e8e8] hover:bg-gray-50 dark:hover:bg-[#222222] transition"
        >
          Back to Analyses
        </button>

        <button
          onClick={() => alert("Flagging to lawyer (mock)")}
          className="px-4 py-2 rounded-xl bg-black dark:bg-[#e8e8e8] text-white dark:text-black text-sm hover:bg-gray-800 dark:hover:bg-[#d0d0d0] transition"
        >
          Share with lawyer
        </button>
      </div>
    </DashboardLayout>
  );
}
