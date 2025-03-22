
import { useState, ReactNode } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface CollapsibleItem {
  name: string;
  icon: ReactNode;
  href?: string;
}

interface CollapsibleSectionProps {
  icon: ReactNode;
  title: string;
  badge?: string;
  items: CollapsibleItem[];
  open: boolean;
}

export const CollapsibleSection = ({ 
  icon, 
  title, 
  badge, 
  items,
  open: sidebarOpen
}: CollapsibleSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(title === "My Courses");
  
  return (
    <div className="flex flex-col">
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className={cn(
          "flex items-center gap-3 px-4 py-3 w-full text-left text-white bg-red-800 hover:bg-red-700 transition-colors",
          !isExpanded && "bg-red-900"
        )}
      >
        <div>{icon}</div>
        {sidebarOpen && (
          <>
            <span className="text-sm font-medium flex-1">{title}</span>
            {badge && (
              <span className="bg-red-900 text-white text-xs font-medium px-2 py-0.5 rounded">
                {badge}
              </span>
            )}
            {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </>
        )}
      </button>

      {isExpanded && (
        <div className="flex flex-col">
          {items.map((item, index) => (
            <Link 
              key={index}
              to={item.href || "#"}
              className="flex items-center gap-3 px-4 py-3 pl-6 text-gray-300 hover:bg-gray-800 transition-colors"
            >
              <div>{item.icon}</div>
              {sidebarOpen && <span className="text-sm">{item.name}</span>}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
