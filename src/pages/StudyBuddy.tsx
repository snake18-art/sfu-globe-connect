
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Search, Users, Filter, UserPlus, MessageSquare, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Chat } from "@/components/messaging/Chat";

const StudyBuddy = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeChat, setActiveChat] = useState<number | null>(null);
  
  const studyBuddies = [
    {
      id: 1,
      name: "Alex Johnson",
      major: "Computer Science",
      courses: ["CMPT 120", "MATH 150", "PHYS 101"],
      availability: "Evenings & Weekends",
      bio: "Looking for study partners for programming projects and math help.",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&h=100&auto=format&fit=crop",
      status: "Online"
    },
    {
      id: 2,
      name: "Jamie Smith",
      major: "Business Administration",
      courses: ["BUS 201", "ECON 103", "STAT 270"],
      availability: "Weekday afternoons",
      bio: "Business student looking for study groups for economics and statistics courses.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100&auto=format&fit=crop",
      status: "Away"
    },
    {
      id: 3,
      name: "Taylor Wilson",
      major: "Psychology",
      courses: ["PSYC 100", "BIO 121", "COGS 100"],
      availability: "Mornings & Evenings",
      bio: "Psychology major interested in cognitive science. Enjoys collaborative learning.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&auto=format&fit=crop",
      status: "Online"
    },
    {
      id: 4,
      name: "Jordan Lee",
      major: "Engineering Science",
      courses: ["ENSC 220", "MATH 232", "PHYS 211"],
      availability: "Weekends only",
      bio: "Engineering student looking for study partners for circuit design and calculus.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop",
      status: "Offline"
    }
  ];
  
  const filteredBuddies = studyBuddies.filter(buddy => 
    buddy.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    buddy.major.toLowerCase().includes(searchQuery.toLowerCase()) ||
    buddy.courses.some(course => course.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-primary/5">
      <Navbar />
      
      <main className="container mx-auto px-6 py-24 pt-32">
        <div 
          className="text-center max-w-3xl mx-auto mb-12"
          style={{ opacity: 0, animation: 'fade-in 0.6s ease-out forwards' }}
        >
          <h1 className="text-4xl font-display font-bold mb-4">
            Find Your Perfect <span className="text-gradient">Study Buddy</span>
          </h1>
          <p className="text-muted-foreground">
            Connect with fellow students who share your academic interests and schedule.
            Study together, share notes, and ace your exams!
          </p>
        </div>
        
        {/* Search and Filter */}
        <div 
          className="glass-card rounded-xl p-4 mb-8 max-w-3xl mx-auto"
          style={{ opacity: 0, animation: 'fade-in 0.6s ease-out 0.2s forwards' }}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Search by name, course, or major..."
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/50 dark:bg-black/20 border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="flex items-center justify-center gap-2 px-5 py-3 bg-white dark:bg-black/50 rounded-lg border border-white/20 hover:bg-primary/5 transition-colors">
              <Filter className="w-5 h-5" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        {/* Chat Modal */}
        {activeChat !== null && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-white/10 dark:bg-black/50 backdrop-blur-md rounded-xl w-full max-w-2xl h-[600px] shadow-xl flex flex-col">
              <div className="flex justify-between items-center p-4 border-b border-white/10">
                <h2 className="font-semibold">Chat with {studyBuddies.find(b => b.id === activeChat)?.name}</h2>
                <button 
                  onClick={() => setActiveChat(null)}
                  className="p-1 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1 overflow-hidden">
                <Chat />
              </div>
            </div>
          </div>
        )}
        
        {/* Study Buddies List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBuddies.map((buddy, index) => (
            <div 
              key={buddy.id}
              className="glass-card rounded-xl overflow-hidden hover-scale"
              style={{ 
                opacity: 0, 
                animation: `fade-in 0.6s ease-out ${0.3 + index * 0.1}s forwards` 
              }}
            >
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative">
                    <img 
                      src={buddy.avatar} 
                      alt={buddy.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div 
                      className={cn(
                        "absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white",
                        buddy.status === "Online" ? "bg-green-500" :
                        buddy.status === "Away" ? "bg-yellow-500" :
                        "bg-gray-400"
                      )}
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg">{buddy.name}</h3>
                    <p className="text-sm text-muted-foreground">{buddy.major}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">Courses</h4>
                  <div className="flex flex-wrap gap-2">
                    {buddy.courses.map((course) => (
                      <span 
                        key={course} 
                        className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-1">Availability</h4>
                  <p className="text-sm text-muted-foreground">{buddy.availability}</p>
                </div>
                
                <p className="text-sm text-muted-foreground mb-5">{buddy.bio}</p>
                
                <div className="flex gap-2">
                  <button 
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-primary text-white rounded-lg text-sm hover:bg-primary/90 transition-colors"
                    onClick={() => setActiveChat(buddy.id)}
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Message</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-white dark:bg-black/50 text-foreground rounded-lg text-sm border border-white/20 hover:bg-primary/5 transition-colors">
                    <UserPlus className="w-4 h-4" />
                    <span>Connect</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredBuddies.length === 0 && (
          <div 
            className="text-center py-16"
            style={{ opacity: 0, animation: 'fade-in 0.6s ease-out 0.3s forwards' }}
          >
            <Users className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-display font-semibold mb-2">No Study Buddies Found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search criteria or check back later.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default StudyBuddy;
