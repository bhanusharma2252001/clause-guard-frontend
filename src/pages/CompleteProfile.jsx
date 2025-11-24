import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LoadingButton from "../shared/LoadingButton";
import BrandLogo from "../components/Logo";

export default function CompleteProfile() {
  const { completeProfile, loading } = useAuth();
  const [data, setData] = useState({ firstName: "", lastName: "", phone: "" });
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    if (!data.firstName || !data.lastName) {
      alert("Please fill required fields");
      return;
    }

    const res = await completeProfile(data);
    if (res.success) nav("/home");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center 
      bg-gray-50 dark:bg-[#0d0d0d] px-4"
    >
      <div
        className="w-full max-w-md bg-white dark:bg-[#161616]
        p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-[#1f1f1f]"
      >
        <div className="flex justify-center mb-6">
          <BrandLogo size={40} />
        </div>
        <h3 className="text-xl font-semibold text-center text-gray-900 dark:text-[#e8e8e8]">
          Complete Your Profile
        </h3>

        <p className="text-sm text-center mt-2 mb-6 text-gray-500 dark:text-[#a1a1a1]">
          Tell us a little more about you
        </p>

        <form onSubmit={submit} className="space-y-4">
          {/* First name */}
          <div>
            <label className="text-sm text-gray-600 dark:text-[#a1a1a1]">
              First name
            </label>
            <input
              value={data.firstName}
              onChange={(e) => setData({ ...data, firstName: e.target.value })}
              className="
                w-full px-3 py-2 mt-1 rounded-xl
                bg-gray-50 dark:bg-[#1a1a1a]
                border border-gray-300 dark:border-[#262626]
                text-gray-900 dark:text-[#e8e8e8]
                placeholder:text-gray-400 dark:placeholder:text-[#7a7a7a]
                focus:ring-2 focus:ring-black/10 dark:focus:ring-[#333]
                outline-none
              "
            />
          </div>

          {/* Last name */}
          <div>
            <label className="text-sm text-gray-600 dark:text-[#a1a1a1]">
              Last name
            </label>
            <input
              value={data.lastName}
              onChange={(e) => setData({ ...data, lastName: e.target.value })}
              className="
                w-full px-3 py-2 mt-1 rounded-xl
                bg-gray-50 dark:bg-[#1a1a1a]
                border border-gray-300 dark:border-[#262626]
                text-gray-900 dark:text-[#e8e8e8]
                placeholder:text-gray-400 dark:placeholder:text-[#7a7a7a]
                focus:ring-2 focus:ring-black/10 dark:focus:ring-[#333]
                outline-none
              "
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm text-gray-600 dark:text-[#a1a1a1]">
              Phone (Optional)
            </label>
            <input
              value={data.phone}
              onChange={(e) => setData({ ...data, phone: e.target.value })}
              className="
                w-full px-3 py-2 mt-1 rounded-xl
                bg-gray-50 dark:bg-[#1a1a1a]
                border border-gray-300 dark:border-[#262626]
                text-gray-900 dark:text-[#e8e8e8]
                placeholder:text-gray-400 dark:placeholder:text-[#7a7a7a]
                focus:ring-2 focus:ring-black/10 dark:focus:ring-[#333]
                outline-none
              "
            />
          </div>

          <LoadingButton loading={loading} className="w-full" type="submit">
            Continue
          </LoadingButton>
        </form>
      </div>
    </div>
  );
}
