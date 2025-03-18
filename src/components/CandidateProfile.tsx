
import { useState } from "react";
import { File, Download, Calendar, Users, FileText } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import ContactCard from "./ContactCard";
import ResumeAnalysis from "./ResumeAnalysis";
import RecordingPlayer from "./RecordingPlayer";
import ResumeDisplay from "./ResumeDisplay";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface CandidateProfileProps {
  name: string;
  position: string;
  email?: string;
  phone?: string;
  location?: string;
  resumeUrl?: string;
  recordingUrl?: string;
  prescreeningUrl?: string;
  recommendation: string;
  strengths?: string[];
  weaknesses?: string[];
  analysis?: string;
  about?: string;
  experience?: Array<{
    title: string;
    company: string;
    period: string;
    location: string;
    description?: string;
    logo?: string;
  }>;
  education?: Array<{
    institution: string;
    degree?: string;
    period?: string;
    location?: string;
    logo?: string;
  }>;
  className?: string;
}

const CandidateProfile = ({
  name,
  position,
  email,
  phone,
  location,
  resumeUrl,
  recordingUrl,
  prescreeningUrl,
  recommendation,
  strengths,
  weaknesses,
  analysis,
  about,
  experience = [],
  education = [],
  className
}: CandidateProfileProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  
  const handleScheduleInterview = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      toast.success(`Interview scheduled with ${name}`);
      setIsLoading(false);
    }, 1000);
  };

  const handleViewAllCandidates = () => {
    navigate('/candidates');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-candidate-light to-white">
      <div className={cn("w-full max-w-6xl mx-auto px-4 py-8", className)}>
        <div className="flex justify-start mb-6 md:w-1/3">
          <Button 
            variant="outline" 
            onClick={handleViewAllCandidates}
            className="w-full border-candidate-accent hover:bg-candidate-accent/40 text-candidate-secondary"
          >
            <Users className="mr-2 h-4 w-4" />
            View All Candidates
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1 md:sticky md:top-8 md:self-start">
            <ContactCard 
              name={name}
              email={email}
              phone={phone}
              location={location}
              position={position}
              resumeUrl={resumeUrl}
            />
            
            <div className="mt-4">
              <Button 
                variant="outline" 
                className="w-full border-candidate-accent hover:bg-candidate-accent/40 text-candidate-secondary" 
                onClick={handleScheduleInterview}
                disabled={isLoading}
              >
                <Calendar className="mr-1" />
                Schedule an interview
              </Button>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 gap-6">
              <ResumeAnalysis 
                strengths={strengths}
                weaknesses={weaknesses}
                analysis={analysis}
              />
              
              <RecordingPlayer 
                src={recordingUrl}
                prescreeningSrc={prescreeningUrl}
                title={`${name} - Interview Recording`}
                duration="15:42"
              />
              
              {(about || experience.length > 0 || education.length > 0) && (
                <ResumeDisplay
                  about={about || `Software engineer experienced in working within a high-paced startup setting and collaborating with a large agile team delivering under tight deadlines. Displaying conscientiousness in leadership situations. Demonstrated perseverance, great communication skills, and an eye for detail.`}
                  experience={experience.length > 0 ? experience : [
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
                    },
                    {
                      title: "Software Developer",
                      company: "3RDi",
                      period: "May 2021 - Oct 2022 · 1 yr 5 mo",
                      location: "London, England, United Kingdom"
                    },
                    {
                      title: "Software Engineer",
                      company: "Quicktext",
                      period: "Oct 2019 - May 2021 · 1 yr 7 mo",
                      location: "Sousse Governorate, Tunisia"
                    }
                  ]}
                  education={education.length > 0 ? education : [
                    {
                      institution: "Lycée Pilote de Monastir",
                      degree: "Computer Science"
                    }
                  ]}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateProfile;
