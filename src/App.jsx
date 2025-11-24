// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import GuestGuard from "./routes/GuestGuard";
import AuthGuard from "./routes/AuthGuard";
import RootRedirect from "./routes/RootRedirect";

import Login from "./pages/Login";
import VerifyOtp from "./pages/VerifyOtp";
import CompleteProfile from "./pages/CompleteProfile";
import Home from "./pages/Home";
import AnalyzePage from "./pages/Processing";
import ReportPage from "./pages/DocumentResult";
import Upload from "./pages/UploadPage";
import Analyses from "./pages/Analyses";
import Processing from "./pages/Processing";
import DocumentResultPage from "./pages/DocumentResult";
import Routing from "./routes/Routing";

function App() {
  if (
    localStorage.getItem("theme") === "dark" ||
    (!localStorage.getItem("theme") &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return (
    <AuthProvider>
     <Routing/>
    </AuthProvider>
  );
}

export default App;
