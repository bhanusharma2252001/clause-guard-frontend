import {
  HomeIcon,
  DocumentTextIcon,
  ArrowUpTrayIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const NavItem = ({ to, icon: Icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `
      flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition
      ${
        isActive
          ? "bg-gray-100 dark:bg-[#1f1f1f] text-black dark:text-[#e8e8e8] border border-gray-200 dark:border-[#262626]"
          : "text-gray-700 dark:text-[#a1a1a1] hover:bg-gray-50 dark:hover:bg-[#1c1c1c]"
      }
    `
    }
  >
    <Icon className="w-5 h-5" />
    {label}
  </NavLink>
);

export default function Sidebar() {
  return (
    <nav className="flex flex-col gap-2">
      <NavItem to="/home" icon={HomeIcon} label="Home" />
      <NavItem to="/upload" icon={ArrowUpTrayIcon} label="Upload" />
      <NavItem to="/analyses" icon={DocumentTextIcon} label="Analyses" />
    </nav>
  );
}
