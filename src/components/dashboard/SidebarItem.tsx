
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
  icon: ReactNode;
  text: string;
  href: string;
  active?: boolean;
}

export const SidebarItem = ({ icon, text, href, active = false }: SidebarItemProps) => {
  return (
    <Link 
      to={href}
      className={cn(
        "flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-800 transition-colors",
        active && "bg-red-800 text-white hover:bg-red-700"
      )}
    >
      <div>{icon}</div>
      <span className="text-sm font-medium">{text}</span>
    </Link>
  );
};
