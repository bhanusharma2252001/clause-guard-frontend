import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import {
  CloudArrowUpIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const nav = useNavigate();

  const handleFile = (f) => {
    if (!f) return;
    setFile(f);

    if (f.type === "text/plain") {
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result.slice(0, 500));
      reader.readAsText(f);
    } else {
      setPreview("");
    }
  };

  const onDrop = (e) => {
    e.preventDefault();
    handleFile(e.dataTransfer.files[0]);
  };

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-[#e8e8e8] mb-2">
        Upload Document
      </h1>
      <p className="text-gray-500 dark:text-[#a1a1a1] mb-8">
        Upload PDF, DOCX or TXT to generate an AI-powered analysis.
      </p>

      {/* Upload box */}
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={onDrop}
        onClick={() => document.getElementById("fileInput").click()}
        className="
          bg-white dark:bg-[#161616]
          border border-gray-300 dark:border-[#1f1f1f]
          p-16 rounded-3xl shadow-sm
          text-center cursor-pointer
          hover:shadow-md transition
        "
      >
        <CloudArrowUpIcon className="w-16 h-16 text-gray-600 dark:text-[#e8e8e8] mx-auto mb-4" />
        <p className="text-xl text-gray-700 dark:text-[#e8e8e8]">
          Drag & drop your file
        </p>
        <p className="text-gray-500 dark:text-[#a1a1a1] text-sm mt-2">or click to browse</p>

        <input
          id="fileInput"
          type="file"
          className="hidden"
          accept=".pdf,.doc,.docx,.txt"
          onChange={(e) => handleFile(e.target.files[0])}
        />
      </div>

      {/* Preview */}
      {file && (
        <div className="mt-10 bg-white dark:bg-[#161616] p-8 rounded-3xl border border-gray-200 dark:border-[#1f1f1f] shadow-sm">
          <div className="flex items-center gap-4">
            <DocumentTextIcon className="w-10 h-10 text-gray-700 dark:text-[#e8e8e8]" />
            <div>
              <p className="font-medium text-gray-900 dark:text-[#e8e8e8]">{file.name}</p>
              <p className="text-gray-400 dark:text-[#a1a1a1] text-sm">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          </div>

          {preview && (
            <div className="mt-5 bg-gray-50 dark:bg-[#1a1a1a] p-4 rounded-xl text-sm text-gray-700 dark:text-[#e8e8e8] border border-gray-200 dark:border-[#262626] max-h-52 overflow-auto">
              {preview}
            </div>
          )}

          <button
            onClick={() => nav("/processing", { state: { fileName: file.name } })}
            className="
              w-full mt-6 py-3 rounded-xl
              bg-black dark:bg-[#e8e8e8]
              text-white dark:text-black
              hover:bg-gray-800 dark:hover:bg-[#d0d0d0]
              transition font-medium
            "
          >
            Analyze Document
          </button>
        </div>
      )}
    </DashboardLayout>
  );
}
