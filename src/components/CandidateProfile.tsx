
import { useState } from "react";
import { File, Download } from "lucide-react";
import ContactCard from "./ContactCard";
import ResumeAnalysis from "./ResumeAnalysis";
import RecordingPlayer from "./RecordingPlayer";
import { cn } from "@/lib/utils";

interface CandidateProfileProps {
  name: string;
  position: string;
  email?: string;
  phone?: string;
  location?: string;
  resumeUrl?: string;
  recordingUrl?: string;
  recommendation: string;
  strengths?: string[];
  weaknesses?: string[];
  analysis?: string;
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
  recommendation,
  strengths,
  weaknesses,
  analysis,
  className
}: CandidateProfileProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownloadResume = () => {
    if (!resumeUrl) return;
    
    setIsLoading(true);
    
    // Simulate download delay
    setTimeout(() => {
      // In a real app, you'd handle the actual download here
      // For now, just simulate opening the URL
      window.open(resumeUrl, "_blank");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className={cn("w-full max-w-6xl mx-auto px-4 py-8", className)}>
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2 animate-fade-in">{name}</h1>
        <div className="highlight-chip">{position}</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <ContactCard 
            name={name}
            email={email}
            phone={phone}
            location={location}
            position={position}
            resumeUrl={resumeUrl}
          />
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
              title={`${name} - Interview Recording`}
              duration="15:42"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateProfile;
