
import { GraduationCap, Users, BookOpen, CheckSquare, Trophy, Gamepad } from "lucide-react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";

const Index = () => {
  const features = [
    {
      title: "Study Buddy",
      description: "Find the perfect study partner to help you succeed in your courses",
      icon: <GraduationCap className="w-6 h-6" />,
      to: "/study-buddy",
      delay: 0.2
    },
    {
      title: "Club Activities",
      description: "Discover and join exciting club events and activities around campus",
      icon: <Users className="w-6 h-6" />,
      to: "/club-activities",
      delay: 0.3
    },
    {
      title: "Quiz",
      description: "Test your knowledge with interactive quizzes on various subjects",
      icon: <BookOpen className="w-6 h-6" />,
      to: "/quiz",
      delay: 0.4
    },
    {
      title: "Attendance",
      description: "Track your attendance and never miss an important class or event",
      icon: <CheckSquare className="w-6 h-6" />,
      to: "/attendance",
      delay: 0.5
    },
    {
      title: "Ranking System",
      description: "Compete with friends and climb the leaderboard in various categories",
      icon: <Trophy className="w-6 h-6" />,
      to: "/ranking",
      delay: 0.6
    },
    {
      title: "Mini Games",
      description: "Take a break and enjoy some fun mini-games with fellow students",
      icon: <Gamepad className="w-6 h-6" />,
      to: "/games",
      delay: 0.7
    }
  ];
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <HeroSection />
        
        <section id="features" className="py-20 px-6 relative">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 
                className="text-3xl md:text-4xl font-display font-bold mb-6"
                style={{ opacity: 0, animation: 'fade-in 0.6s ease-out forwards' }}
              >
                Explore Our <span className="text-gradient">Features</span>
              </h2>
              <p 
                className="text-muted-foreground max-w-2xl mx-auto"
                style={{ opacity: 0, animation: 'fade-in 0.6s ease-out 0.1s forwards' }}
              >
                Discover all the ways SFU Globe can enhance your university experience 
                and help you connect with the campus community.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  to={feature.to}
                  delay={feature.delay}
                />
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-20 px-6 bg-gradient-to-b from-background to-primary/5">
          <div className="container mx-auto text-center">
            <h2 
              className="text-3xl md:text-4xl font-display font-bold mb-8"
              style={{ opacity: 0, animation: 'fade-in 0.6s ease-out forwards' }}
            >
              Ready to Get Started?
            </h2>
            <a 
              href="/study-buddy" 
              className="inline-flex px-8 py-4 rounded-full bg-primary text-white font-medium button-glow shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
              style={{ opacity: 0, animation: 'fade-in 0.6s ease-out 0.2s forwards' }}
            >
              Find Your Study Buddy Now
            </a>
          </div>
        </section>
      </main>
      
      <footer className="py-10 px-6 border-t border-border/50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <span className="text-lg font-display font-semibold">SFU Globe</span>
              <span className="text-sm text-muted-foreground">© {new Date().getFullYear()}</span>
            </div>
            <div className="flex space-x-8">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
