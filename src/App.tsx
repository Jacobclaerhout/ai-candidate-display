
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Candidates from "./pages/Candidates";
import NotFound from "./pages/NotFound";
import CandidateProfile from "./components/CandidateProfile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/candidate/:id" element={<CandidateProfile 
            name="Adu Melkie"
            position="Data Consultant"
            email="adu.melkie@example.com"
            phone="+1 (555) 123-4567"
            location="San Francisco, CA"
            recommendation="Highly Recommended"
            strengths={["Data Analysis", "Machine Learning", "Communication"]}
            weaknesses={["Limited Experience with Legacy Systems"]}
            about="Software engineer experienced in working within a high-paced startup setting and collaborating with a large agile team delivering under tight deadlines. Displaying conscientiousness in leadership situations. Demonstrated perseverance, great communication skills, and an eye for detail."
            experience={[
              {
                title: "Software Developer",
                company: "Fintech",
                period: "Oct 2022 - Present · 2 yrs 5 mo",
                location: "London, England, United Kingdom"
              },
              {
                title: "Course Instructor",
                company: "Code First Girls",
                period: "Apr 2022 - Present · 2 yrs 11 mo",
                location: "",
                description: "Teaching Data and SQL and Web development courses"
              }
            ]}
            education={[
              {
                institution: "Lycée Pilote de Monastir",
                degree: "Computer Science"
              }
            ]}
          />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
