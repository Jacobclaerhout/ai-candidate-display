
import { useState } from "react";
import { file, download } from "lucide-react";
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

      <div className="relative glass-card bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-card mb-8 animate-scale-in">
        <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/95 rounded-2xl -z-10"></div>
        
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 rounded-full bg-candidate-accent flex items-center justify-center">
            {file({ className: "w-6 h-6 text-candidate-secondary" })}
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-medium">AI Assessment</h3>
            <p className="text-candidate-muted text-sm">Candidate evaluation and match report</p>
          </div>
        </div>
        
        <div className="bg-candidate-accent/30 rounded-lg p-4 mb-6 border border-candidate-accent/50">
          <p className="text-candidate-primary">{recommendation}</p>
        </div>
        
        <button 
          className={cn(
            "button-primary w-full sm:w-auto",
            isLoading && "opacity-80 cursor-not-allowed"
          )}
          onClick={handleDownloadResume}
          disabled={isLoading || !resumeUrl}
        >
          {isLoading ? (
            <span className="inline-block w-4 h-4 mr-2 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
          ) : (
            download({ className: "w-4 h-4 mr-2" })
          )}
          {isLoading ? "Downloading..." : "Download Resume"}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <ContactCard 
            name={name}
            email={email}
            phone={phone}
            location={location}
            position={position}
          />
        </div>
        
        <div className="md:col-span-2">
          <div className="grid grid-cols-1 gap-6">
            <ResumeAnalysis 
              recommendation={recommendation}
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
