
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  to: string;
  className?: string;
  delay?: number;
}

const FeatureCard = ({ 
  title, 
  description, 
  icon, 
  to, 
  className,
  delay = 0
}: FeatureCardProps) => {
  return (
    <Link
      to={to}
      className={cn(
        "glass-card p-6 rounded-2xl hover-scale group transition-all duration-300",
        "opacity-0 translate-y-8",
        className
      )}
      style={{
        animation: `slide-up 0.6s ease-out ${delay}s forwards`
      }}
    >
      <div className="h-14 w-14 rounded-xl flex items-center justify-center bg-primary/10 text-primary mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
        {icon}
      </div>
      <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors duration-200">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm">
        {description}
      </p>
    </Link>
  );
};

export default FeatureCard;
