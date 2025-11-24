// src/components/DocList.jsx
import React from "react";
import Card from "./Card";
import { ClockIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

export default function DocList({ docs = [] }) {
  const nav = useNavigate();

  if (!docs.length)
    return (
      <Card className="text-center">
        <p className="text-gray-400">No analyses yet. Upload your first contract.</p>
      </Card>
    );

  return (
    <div className="space-y-3">
      {docs.map((d) => (
        <div
          key={d.id}
          onClick={() => nav(`/document/${d.id}`)}
          className="bg-white border rounded-2xl p-4 shadow-sm hover:shadow-md cursor-pointer flex items-center justify-between"
        >
          <div>
            <div className="font-medium">{d.name}</div>
            <div className="text-xs text-gray-400">{d.date}</div>
          </div>

          <div className="flex items-center gap-3">
            {d.status === "Analyzed" ? (
              <span className="text-green-700 bg-green-50 px-3 py-1 rounded-full text-xs font-medium">
                <CheckBadgeIcon className="w-4 h-4 inline mr-1" />
                Analyzed
              </span>
            ) : (
              <span className="text-yellow-700 bg-yellow-50 px-3 py-1 rounded-full text-xs font-medium">
                <ClockIcon className="w-4 h-4 inline mr-1" />
                Pending
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
