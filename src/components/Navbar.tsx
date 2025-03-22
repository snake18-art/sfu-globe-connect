
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Globe, Menu, X, Layout } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Study Buddy", path: "/study-buddy" },
    { name: "Club Activities", path: "/club-activities" },
    { name: "Quiz", path: "/quiz" },
    { name: "Attendance", path: "/attendance" },
    { name: "Ranking", path: "/ranking" },
    { name: "Games", path: "/games" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass-nav",
        isScrolled ? "py-3" : "py-5"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 font-display font-semibold text-xl"
        >
          <Globe className="w-6 h-6 text-primary animate-pulse-subtle" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            SFU Globe
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-all duration-200",
                location.pathname === link.path
                  ? "text-primary bg-primary/5"
                  : "text-foreground/70 hover:text-primary hover:bg-primary/5"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center text-foreground"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 transition-transform duration-200 animate-fade-in" />
          ) : (
            <Menu className="w-6 h-6 transition-transform duration-200" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-nav border-t border-white/10 animate-slide-in-right">
          <div className="container mx-auto px-6 py-4">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "px-4 py-3 rounded-md text-sm font-medium transition-all duration-200",
                    location.pathname === link.path
                      ? "text-primary bg-primary/5"
                      : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
