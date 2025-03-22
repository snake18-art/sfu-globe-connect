
import { motion } from 'framer-motion';
import { GraduationCap, Globe } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20 pt-32">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-400/10 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-indigo-400/10 blur-3xl" />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="flex flex-col items-start text-left">
            <div 
              className="inline-flex items-center px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6"
              style={{ opacity: 0, animation: 'fade-in 0.6s ease-out 0.2s forwards' }}
            >
              <GraduationCap className="w-4 h-4 mr-2" />
              <span>Connect with your campus community</span>
            </div>
            
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight"
              style={{ opacity: 0, animation: 'fade-in 0.6s ease-out 0.4s forwards' }}
            >
              Welcome to
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                SFU Globe
              </span>
            </h1>
            
            <p 
              className="text-lg text-muted-foreground mt-6 max-w-lg"
              style={{ opacity: 0, animation: 'fade-in 0.6s ease-out 0.6s forwards' }}
            >
              Your all-in-one platform for connecting with study buddies, discovering club activities, 
              participating in quizzes, tracking attendance, and more.
            </p>
            
            <div 
              className="mt-8 flex flex-wrap gap-4"
              style={{ opacity: 0, animation: 'fade-in 0.6s ease-out 0.8s forwards' }}
            >
              <a 
                href="#features" 
                className="px-6 py-3 rounded-full bg-primary text-white font-medium button-glow shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
              >
                Explore Features
              </a>
              <a 
                href="/study-buddy" 
                className="px-6 py-3 rounded-full bg-white dark:bg-black border border-primary/20 text-foreground font-medium hover:bg-primary/5 transition-all duration-300"
              >
                Find a Study Buddy
              </a>
            </div>
          </div>
          
          <div 
            className="relative flex items-center justify-center"
            style={{ opacity: 0, animation: 'fade-in 0.6s ease-out 1s forwards' }}
          >
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-indigo-500/30 rounded-full blur-3xl" />
              <div className="relative glass-card rounded-3xl overflow-hidden border-2 border-white/30 shadow-2xl">
                <div className="aspect-square flex items-center justify-center">
                  <Globe className="w-32 h-32 text-primary animate-float" />
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 to-indigo-500/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
