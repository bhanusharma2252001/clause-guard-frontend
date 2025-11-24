import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GuestGuard from "./GuestGuard";
import AuthGuard from "./AuthGuard";
import RootRedirect from "./RootRedirect";

import Login from "../pages/Login";
import VerifyOtp from "../pages/VerifyOtp";
import CompleteProfile from "../pages/CompleteProfile";
import Home from "../pages/Home";
import Upload from "../pages/UploadPage";
import Analyses from "../pages/Analyses";
import Processing from "../pages/Processing";
import DocumentResultPage from "../pages/DocumentResult";

export default function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootRedirect />} />

        {/* Guest only */}
        <Route element={<GuestGuard />}>
          <Route path="/login" element={<Login />} />
          <Route path="/verify-otp" element={<VerifyOtp />} />
          <Route path="/complete-profile" element={<CompleteProfile />} />
        </Route>

        {/* Private */}
        <Route element={<AuthGuard />}>
          <Route path="/home" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/processing" element={<Processing />} />
          <Route path="/result" element={<DocumentResultPage />} />
          <Route path="/analyses" element={<Analyses />} />
        </Route>
      </Routes>
    </Router>
  );
}
