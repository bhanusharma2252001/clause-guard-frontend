// src/pages/Analyses.jsx
import DashboardLayout from "../layouts/DashboardLayout";
import { DocumentTextIcon, CheckCircleIcon, ClockIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

export default function Analyses() {
  const nav = useNavigate();

  const docs = [
    {
      id: 1,
      name: "Service_Agreement.pdf",
      status: "Analyzed",
      date: "Nov 10, 2025",
      result: null,
    },
    {
      id: 2,
      name: "NDA_Draft.docx",
      status: "Pending",
      date: "Nov 05, 2025",
      result: null,
    },
  ];

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-[#e8e8e8]">Analyses</h1>
          <p className="text-sm text-gray-500 dark:text-[#a1a1a1] mt-1">All documents you've uploaded and analyzed.</p>
        </div>

        <div>
          <button
            onClick={() => nav("/upload")}
            className="px-4 py-2 rounded-xl bg-black dark:bg-[#e8e8e8] text-white dark:text-black hover:bg-gray-800 dark:hover:bg-[#d0d0d0] transition"
          >
            + Upload New
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {docs.map((d) => (
          <div
            key={d.id}
            onClick={() =>
              nav("/result", {
                state: {
                  fileName: d.name,
                  // optionally pass result if available
                },
              })
            }
            className="bg-white dark:bg-[#161616] border border-gray-200 dark:border-[#1f1f1f] rounded-2xl p-4 shadow-sm hover:shadow-md transition flex items-center justify-between cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <DocumentTextIcon className="w-10 h-10 text-gray-700 dark:text-[#e8e8e8]" />
              <div>
                <div className="font-medium text-gray-900 dark:text-[#e8e8e8]">{d.name}</div>
                <div className="text-xs text-gray-400 dark:text-[#a1a1a1]">{d.date}</div>
              </div>
            </div>

            <div>
              {d.status === "Analyzed" ? (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-medium">
                  <CheckCircleIcon className="w-4 h-4" />
                  {d.status}
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 text-xs font-medium">
                  <ClockIcon className="w-4 h-4" />
                  {d.status}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
