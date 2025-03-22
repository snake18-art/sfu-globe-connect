
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import StudyBuddy from "./pages/StudyBuddy";
import ClubActivities from "./pages/ClubActivities";
import NotFound from "./pages/NotFound";

// Let's install the needed dependency
import { MotionConfig } from "framer-motion";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <MotionConfig reducedMotion="user">
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/study-buddy" element={<StudyBuddy />} />
            <Route path="/club-activities" element={<ClubActivities />} />
            {/* Add paths for other features (simplified for now) */}
            <Route path="/quiz" element={<StudyBuddy />} />
            <Route path="/attendance" element={<StudyBuddy />} />
            <Route path="/ranking" element={<StudyBuddy />} />
            <Route path="/games" element={<StudyBuddy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </MotionConfig>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
