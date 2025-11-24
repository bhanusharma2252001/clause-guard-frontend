import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import BrandLogo from "../components/Logo";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0d0d0d] flex">
      {/* Sidebar */}
      <aside
        className="
        hidden md:flex md:flex-col w-72 p-6 
        border-r border-gray-200 dark:border-[#1f1f1f] 
        bg-white dark:bg-[#141414]
      "
      >
        <div className="mb-8">
          <div className="mb-8 pl-1">
            <BrandLogo size={32} />
          </div>
        </div>

        <Sidebar />

        <div className="mt-auto text-sm text-gray-400 dark:text-[#7a7a7a]">
          v0.1 • MVP
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 min-w-0">
        <Topbar/>
        <main className="p-6 md:p-10">{children}</main>
      </div>
    </div>
  );
}
