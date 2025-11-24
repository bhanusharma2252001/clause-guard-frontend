import DashboardLayout from "../layouts/DashboardLayout";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import {
  ArrowUpTrayIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  const nav = useNavigate();

  const recentDocs = [
    { id: 1, name: "Service_Agreement.pdf", status: "Analyzed", date: "Jan 18, 2025" },
    { id: 2, name: "Freelancer_NDA.docx", status: "Pending", date: "Jan 15, 2025" },
  ];

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-[#e8e8e8] mb-1">
        Dashboard
      </h1>
      <p className="text-gray-500 dark:text-[#a1a1a1] mb-8">Welcome back!</p>

      {/* Upload Card */}
      <Card className="p-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-[#e8e8e8]">
              Upload & Analyze
            </h2>
            <p className="text-gray-500 dark:text-[#a1a1a1] text-sm mt-1">
              Upload your contract to get instant AI analysis.
            </p>
          </div>

          <button
            onClick={() => nav("/upload")}
            className="
              bg-black dark:bg-[#e8e8e8]
              text-white dark:text-black
              px-4 py-2 rounded-xl transition
              hover:bg-gray-800 dark:hover:bg-[#d0d0d0]
            "
          >
            <div className="flex items-center gap-2">
              <ArrowUpTrayIcon className="w-5 h-5" />
              Upload
            </div>
          </button>
        </div>

        <p className="text-sm text-gray-400 dark:text-[#7a7a7a] mt-4">
          Supported: PDF, DOCX, TXT • Max 10MB
        </p>
      </Card>

      {/* Recent Analyses */}
      <h3 className="font-semibold mt-10 mb-3 text-gray-900 dark:text-[#e8e8e8]">
        Recent Analyses
      </h3>

      <div className="space-y-4">
        {recentDocs.map((d) => (
          <div
            key={d.id}
            onClick={() => nav(`/document/${d.id}`)}
            className="
              bg-white dark:bg-[#161616]
              border border-gray-200 dark:border-[#1f1f1f]
              p-6 rounded-2xl shadow-sm
              hover:shadow-md transition cursor-pointer
              flex items-center justify-between
            "
          >
            <div className="flex items-center gap-4">
              <DocumentTextIcon className="w-10 h-10 text-gray-700 dark:text-[#e8e8e8]" />
              <div>
                <p className="font-medium text-gray-900 dark:text-[#e8e8e8]">{d.name}</p>
                <p className="text-gray-400 dark:text-[#a1a1a1] text-sm">{d.date}</p>
              </div>
            </div>

            <span
              className={`
                px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1
                ${
                  d.status === "Analyzed"
                    ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300"
                    : "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300"
                }
              `}
            >
              {d.status === "Analyzed" ? (
                <CheckCircleIcon className="w-4 h-4" />
              ) : (
                <ClockIcon className="w-4 h-4" />
              )}
              {d.status}
            </span>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
