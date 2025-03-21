
import React from "react";
import { Briefcase, GraduationCap, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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
    <Card className="animate-fade-in">
      <CardHeader className="flex flex-row items-center gap-2 pb-2">
        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
          <FileText className="w-4 h-4 text-slate-600" />
        </div>
        <CardTitle className="text-xl">Resume</CardTitle>
      </CardHeader>
      
      <CardContent className="pt-2 space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-2">About</h3>
          <p className="text-muted-foreground leading-relaxed">{about}</p>
        </div>

        <Separator />

        <div>
          <h3 className="text-lg font-medium mb-4">Experience</h3>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-slate-100">
                  {job.logo ? (
                    <img src={job.logo} alt={job.company} className="w-8 h-8 object-contain" />
                  ) : (
                    <Briefcase className="w-5 h-5 text-slate-600" />
                  )}
                </div>
                <div>
                  <h4 className="text-base font-semibold">{job.title}</h4>
                  <p className="text-slate-700 font-medium">{job.company}</p>
                  <p className="text-muted-foreground text-sm mt-1">{job.period}</p>
                  <p className="text-muted-foreground text-sm">{job.location}</p>
                  {job.description && (
                    <p className="mt-2 text-slate-600 text-sm">{job.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        <div>
          <h3 className="text-lg font-medium mb-4">Education</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-slate-100">
                  {edu.logo ? (
                    <img src={edu.logo} alt={edu.institution} className="w-8 h-8 object-contain" />
                  ) : (
                    <GraduationCap className="w-5 h-5 text-slate-600" />
                  )}
                </div>
                <div>
                  <h4 className="text-base font-semibold">{edu.institution}</h4>
                  {edu.degree && <p className="text-slate-700 font-medium">{edu.degree}</p>}
                  {edu.period && <p className="text-muted-foreground text-sm mt-1">{edu.period}</p>}
                  {edu.location && <p className="text-muted-foreground text-sm">{edu.location}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResumeDisplay;
