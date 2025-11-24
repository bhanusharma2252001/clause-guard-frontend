// src/utils/mockAnalyze.js
export default function mockAnalyze(fileName) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        fileName,
        summary: "This contract appears mostly balanced but lacks a refund clause.",
        missingClauses: ["Refund Policy", "Liability Cap"],
        riskyClauses: [
          "Termination clause allows vendor to cancel anytime",
          "Payment terms contradict in two sections",
        ],
        riskScore: 67,
      });
    }, 1500);
  });
}
