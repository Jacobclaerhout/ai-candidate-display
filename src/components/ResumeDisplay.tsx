
import React from "react";
import { Briefcase, GraduationCap } from "lucide-react";

interface Job {
  title: string;
  company: string;
  period: string;
  location: string;
  description?: string;
  logo?: string;
}

interface Education {
  institution: string;
  degree?: string;
  period?: string;
  location?: string;
  logo?: string;
}

interface ResumeDisplayProps {
  about: string;
  experience: Job[];
  education: Education[];
}

const ResumeDisplay = ({ about, experience, education }: ResumeDisplayProps) => {
  return (
    <div className="candidate-card animate-fade-in">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">About</h2>
        <p className="text-candidate-primary leading-relaxed">{about}</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Experience</h2>
        <div className="space-y-8">
          {experience.map((job, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden flex items-center justify-center bg-candidate-light">
                {job.logo ? (
                  <img src={job.logo} alt={job.company} className="w-10 h-10 object-contain" />
                ) : (
                  <Briefcase className="w-6 h-6 text-candidate-secondary" />
                )}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{job.title}</h3>
                <p className="text-candidate-secondary font-medium">{job.company}</p>
                <p className="text-candidate-muted mt-1">{job.period}</p>
                <p className="text-candidate-muted">{job.location}</p>
                {job.description && (
                  <p className="mt-2 text-candidate-primary">{job.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden flex items-center justify-center bg-candidate-light">
                {edu.logo ? (
                  <img src={edu.logo} alt={edu.institution} className="w-10 h-10 object-contain" />
                ) : (
                  <GraduationCap className="w-6 h-6 text-candidate-secondary" />
                )}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{edu.institution}</h3>
                {edu.degree && <p className="text-candidate-secondary font-medium">{edu.degree}</p>}
                {edu.period && <p className="text-candidate-muted mt-1">{edu.period}</p>}
                {edu.location && <p className="text-candidate-muted">{edu.location}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResumeDisplay;
