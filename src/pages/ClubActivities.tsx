
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Calendar, MapPin, Clock, Users, Heart, Share2, Filter } from "lucide-react";
import { cn } from "@/lib/utils";

const ClubActivities = () => {
  const [filter, setFilter] = useState("all");
  
  const activities = [
    {
      id: 1,
      title: "Hackathon 2023",
      club: "Computing Science Student Society",
      description: "Join our annual 24-hour hackathon and build amazing projects with fellow students!",
      type: "tech",
      date: "Oct 15, 2023",
      time: "10:00 AM - 10:00 AM (Next day)",
      location: "Applied Sciences Building",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=300&auto=format&fit=crop",
      attendees: 87
    },
    {
      id: 2,
      title: "Business Case Competition",
      club: "Business Administration Student Society",
      description: "Showcase your business acumen and problem-solving skills in this exciting competition.",
      type: "business",
      date: "Oct 22, 2023",
      time: "9:00 AM - 5:00 PM",
      location: "West Mall Centre",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=300&auto=format&fit=crop",
      attendees: 42
    },
    {
      id: 3,
      title: "Cultural Night",
      club: "International Students Association",
      description: "Experience diverse cultures through food, performances, and activities from around the world.",
      type: "cultural",
      date: "Nov 5, 2023",
      time: "6:00 PM - 10:00 PM",
      location: "Convocation Mall",
      image: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=300&auto=format&fit=crop",
      attendees: 120
    },
    {
      id: 4,
      title: "Environmental Cleanup Day",
      club: "SFU Sustainability Club",
      description: "Join us for a day of environmental stewardship as we clean up our beautiful campus.",
      type: "environmental",
      date: "Nov 12, 2023",
      time: "11:00 AM - 3:00 PM",
      location: "Burnaby Mountain Park",
      image: "https://images.unsplash.com/photo-1618477202872-2c23a2a2709d?q=80&w=300&auto=format&fit=crop",
      attendees: 35
    },
    {
      id: 5,
      title: "Open Mic Night",
      club: "SFU Music Club",
      description: "Showcase your musical talent or come enjoy performances by fellow students in a relaxed atmosphere.",
      type: "arts",
      date: "Nov 19, 2023",
      time: "7:00 PM - 10:00 PM",
      location: "Student Union Building",
      image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=300&auto=format&fit=crop",
      attendees: 56
    },
    {
      id: 6,
      title: "Basketball Tournament",
      club: "SFU Athletics",
      description: "Join our 3-on-3 basketball tournament. Open to all skill levels!",
      type: "sports",
      date: "Nov 25, 2023",
      time: "1:00 PM - 6:00 PM",
      location: "SFU Recreation Centre",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=300&auto=format&fit=crop",
      attendees: 72
    }
  ];
  
  const filteredActivities = filter === "all" 
    ? activities 
    : activities.filter(activity => activity.type === filter);
  
  const categories = [
    { id: "all", name: "All Activities" },
    { id: "tech", name: "Technology" },
    { id: "business", name: "Business" },
    { id: "cultural", name: "Cultural" },
    { id: "environmental", name: "Environmental" },
    { id: "arts", name: "Arts & Music" },
    { id: "sports", name: "Sports" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-primary/5">
      <Navbar />
      
      <main className="container mx-auto px-6 py-24 pt-32">
        <div 
          className="text-center max-w-3xl mx-auto mb-12"
          style={{ opacity: 0, animation: 'fade-in 0.6s ease-out forwards' }}
        >
          <h1 className="text-4xl font-display font-bold mb-4">
            Discover <span className="text-gradient">Club Activities</span>
          </h1>
          <p className="text-muted-foreground">
            Explore a wide range of events and activities organized by various 
            student clubs and organizations at SFU.
          </p>
        </div>
        
        {/* Categories */}
        <div 
          className="flex flex-wrap gap-2 justify-center mb-10 overflow-x-auto pb-2"
          style={{ opacity: 0, animation: 'fade-in 0.6s ease-out 0.2s forwards' }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                filter === category.id
                  ? "bg-primary text-white"
                  : "bg-white/50 dark:bg-white/10 hover:bg-primary/10"
              )}
              onClick={() => setFilter(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Activities List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredActivities.map((activity, index) => (
            <div 
              key={activity.id}
              className="glass-card rounded-xl overflow-hidden hover-scale"
              style={{ 
                opacity: 0, 
                animation: `fade-in 0.6s ease-out ${0.3 + index * 0.1}s forwards` 
              }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/90 text-white">
                    {activity.type.charAt(0).toUpperCase() + activity.type.slice(1)}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="font-display font-semibold text-xl mb-1">{activity.title}</h3>
                  <p className="text-sm text-primary">{activity.club}</p>
                </div>
                
                <p className="text-sm text-muted-foreground mb-5">{activity.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{activity.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{activity.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{activity.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4 text-primary" />
                    <span>{activity.attendees} attending</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-primary text-white rounded-lg text-sm hover:bg-primary/90 transition-colors">
                    Join Activity
                  </button>
                  <button className="flex items-center justify-center w-10 h-10 rounded-lg border border-white/20 hover:bg-primary/5 transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="flex items-center justify-center w-10 h-10 rounded-lg border border-white/20 hover:bg-primary/5 transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredActivities.length === 0 && (
          <div 
            className="text-center py-16"
            style={{ opacity: 0, animation: 'fade-in 0.6s ease-out 0.3s forwards' }}
          >
            <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-display font-semibold mb-2">No Activities Found</h3>
            <p className="text-muted-foreground">
              Try selecting a different category or check back later.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default ClubActivities;
