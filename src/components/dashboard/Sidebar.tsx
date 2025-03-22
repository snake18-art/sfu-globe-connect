
import { useState } from "react";
import { Home, BookOpen, Calendar, FileText, GraduationCap, Search, BookMarked, Award, BarChart2, GamepadIcon } from "lucide-react";
import { SidebarItem } from "./SidebarItem";
import { CollapsibleSection } from "./CollapsibleSection";
import { cn } from "@/lib/utils";

export const Sidebar = () => {
  const [open, setOpen] = useState(true);

  // Define courses for the My Courses section
  const courses = [
    { name: "Computer Networks", icon: <BookMarked className="w-5 h-5" /> },
    { name: "Computer Systems", icon: <BookMarked className="w-5 h-5" /> },
    { name: "Essentials of Management", icon: <BookMarked className="w-5 h-5" /> },
    { name: "Four Skills in English", icon: <BookMarked className="w-5 h-5" /> },
    { name: "Introduction to Business", icon: <BookMarked className="w-5 h-5" /> }
  ];

  // Define study tools
  const studyTools = [
    { name: "Study Buddy", icon: <BookOpen className="w-5 h-5" />, href: "/study-buddy" },
    { name: "Quiz", icon: <FileText className="w-5 h-5" />, href: "/quiz" },
    { name: "Attendance", icon: <BarChart2 className="w-5 h-5" />, href: "/attendance" }
  ];

  // Define social activities
  const socialActivities = [
    { name: "Club Activities", icon: <GraduationCap className="w-5 h-5" />, href: "/club-activities" },
    { name: "Ranking", icon: <Award className="w-5 h-5" />, href: "/ranking" },
    { name: "Games", icon: <GamepadIcon className="w-5 h-5" />, href: "/games" }
  ];

  return (
    <div className={cn(
      "h-screen overflow-y-auto sticky top-0 bg-black text-white transition-all duration-300",
      open ? "w-64" : "w-16"
    )}>
      <div className="p-4 flex items-center justify-center">
        <h2 className={`text-xl font-bold ${!open && "hidden"}`}>SFU Globe</h2>
        {!open && <span className="text-xl font-bold">SFU</span>}
      </div>
      
      <div className="mt-4 flex flex-col gap-2">
        <SidebarItem icon={<Home className="w-5 h-5" />} text="Site home" href="/" active />
        <SidebarItem icon={<Home className="w-5 h-5" />} text="Dashboard" href="/dashboard" />
        <SidebarItem icon={<Calendar className="w-5 h-5" />} text="Calendar" href="#" />
        <SidebarItem icon={<FileText className="w-5 h-5" />} text="Private files" href="#" />
        
        <CollapsibleSection 
          icon={<GraduationCap className="w-5 h-5" />} 
          title="My Courses" 
          badge="5"
          open={open}
          items={courses}
        />
        
        <div className={`px-4 ${!open && "hidden"}`}>
          <div className="relative">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-800 text-white w-full rounded-md pl-8 pr-2 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>
        
        <div className={`px-4 py-2 flex items-center ${!open && "hidden"}`}>
          <input type="checkbox" className="mr-2" id="inProgress" />
          <label htmlFor="inProgress" className="text-sm text-gray-300">Only courses in progress</label>
        </div>
        
        <CollapsibleSection 
          icon={<BookOpen className="w-5 h-5" />} 
          title="Study Tools" 
          badge="3"
          open={open}
          items={studyTools}
        />
        
        <CollapsibleSection 
          icon={<GraduationCap className="w-5 h-5" />} 
          title="Social Activities" 
          badge="3"
          open={open}
          items={socialActivities}
        />
      </div>
    </div>
  );
};
