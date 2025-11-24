// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LoadingButton from "../shared/LoadingButton";
import SocialButtons from "../shared/SocialButtons";
import BrandLogo from "../components/Logo";

export default function Login() {
  const { loginWithEmail, loading, loginWithProvider } = useAuth();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Please enter a valid email");
      return;
    }

    const res = await loginWithEmail(email);
    if (res.success) {
      nav("/verify-otp", { state: { email } });
    } else {
      setError("Unable to send OTP. Try again later.");
    }
  };

  const handleSocial = async (provider) => {
    const res = await loginWithProvider(provider);
    if (res.success) {
      if (res.needsProfile) nav("/complete-profile");
      else nav("/home");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center 
      bg-gray-50 dark:bg-[#0d0d0d] px-4"
    >
      <div
        className="w-full max-w-md 
        bg-white dark:bg-[#161616]
        p-8 rounded-3xl shadow-sm 
        border border-gray-200 dark:border-[#1f1f1f]"
      >
        <div className="flex justify-center mb-6">
          <BrandLogo size={40} />
        </div>
        <h2
          className="text-2xl font-semibold text-center 
          text-gray-900 dark:text-[#e8e8e8] mb-2"
        >
          Welcome
        </h2>

        <p
          className="text-center text-sm 
          text-gray-600 dark:text-[#a1a1a1] mb-6"
        >
          Enter your email to continue
        </p>

        <form onSubmit={submit} className="space-y-4">
          <input
            type="email"
            placeholder="you@example.com"
            className="
              w-full px-4 py-3 rounded-xl
              bg-gray-50 dark:bg-[#1a1a1a]
              border border-gray-300 dark:border-[#262626]
              text-gray-900 dark:text-[#e8e8e8]
              placeholder:text-gray-400 dark:placeholder:text-[#888]
              focus:ring-2 focus:ring-black/10 dark:focus:ring-[#333]
              outline-none
            "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {error && (
            <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
          )}

          <LoadingButton loading={loading} className="w-full" onClick={submit}>
            Continue
          </LoadingButton>
        </form>

        <div className="my-6 flex items-center">
          <div className="flex-1 h-px bg-gray-200 dark:bg-[#1f1f1f]" />
          <span className="mx-3 text-gray-400 dark:text-[#7a7a7a] text-sm">
            or continue with
          </span>
          <div className="flex-1 h-px bg-gray-200 dark:bg-[#1f1f1f]" />
        </div>

        <SocialButtons onLogin={handleSocial} />
      </div>
    </div>
  );
}
