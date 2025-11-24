import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LoadingButton from "../shared/LoadingButton";
import BrandLogo from "../components/Logo";

export default function VerifyOtp() {
  const { verifyOtp, pendingEmail, loading } = useAuth();
  const nav = useNavigate();
  const loc = useLocation();

  const email = loc.state?.email || pendingEmail || "";
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef([]);

  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

  const updateOtp = (i, v) => {
    v = v.replace(/[^0-9]/g, "").slice(-1);
    const arr = [...otp];
    arr[i] = v;
    setOtp(arr);

    if (v && i < 5) inputsRef.current[i + 1]?.focus();
  };

  const submit = async (e) => {
    e.preventDefault();

    const code = otp.join("");
    if (code.length !== 6) return;

    const res = await verifyOtp(email, code);

    if (!res.success) return alert(res.message);

    if (res.isNewUser) nav("/complete-profile");
    else nav("/home");
  };

  const resend = () => {
    alert("Mock: resend OTP. Use login page again.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center
      bg-gray-50 dark:bg-[#0d0d0d] px-4">

      <div className="w-full max-w-md bg-white dark:bg-[#161616]
        p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-[#1f1f1f]">

 <div className="flex justify-center mb-6">
          <BrandLogo size={40} />
        </div>
        <h3 className="text-xl font-semibold text-center 
          text-gray-900 dark:text-[#e8e8e8]">
          Verify OTP
        </h3>

        <p className="text-sm text-center mt-2 mb-6
          text-gray-500 dark:text-[#a1a1a1]">
          Enter the 6-digit code sent to <span className="font-medium">{email}</span>
        </p>

        <form onSubmit={submit} className="space-y-6">
          <div className="flex justify-center gap-2">
            {otp.map((v, i) => (
              <input
                key={i}
                maxLength={1}
                ref={(el) => (inputsRef.current[i] = el)}
                value={v}
                onChange={(e) => updateOtp(i, e.target.value)}
                className="
                  w-12 h-12 text-center text-xl rounded-xl 
                  bg-gray-50 dark:bg-[#1a1a1a]
                  text-gray-900 dark:text-[#e8e8e8]
                  border border-gray-300 dark:border-[#262626]
                  focus:ring-2 focus:ring-black/10 dark:focus:ring-[#333]
                  outline-none
                "
              />
            ))}
          </div>

          <LoadingButton loading={loading} className="w-full" onClick={submit}>
            Verify
          </LoadingButton>

          <p className="text-center text-sm text-gray-500 dark:text-[#a1a1a1]">
            Didn’t receive it?{" "}
            <button type="button" className="text-blue-500 dark:text-blue-400" onClick={resend}>
              Resend
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
