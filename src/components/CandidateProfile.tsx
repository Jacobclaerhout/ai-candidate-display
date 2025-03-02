import { useState } from "react";
import { File, Download } from "lucide-react";
import ContactCard from "./ContactCard";
import ResumeAnalysis from "./ResumeAnalysis";
import RecordingPlayer from "./RecordingPlayer";
import ResumeDisplay from "./ResumeDisplay";
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
  );
};

export default CandidateProfile;
