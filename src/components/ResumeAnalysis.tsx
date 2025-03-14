
import { File, Check, AlertTriangle, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { toast } from "sonner";
import { Card } from "./ui/card";
import { Separator } from "./ui/separator";

interface Requirement {
  id: string;
  text: string;
  isMet: boolean;
  details: string;
}

interface ResumeAnalysisProps {
  strengths?: string[];
  weaknesses?: string[];
  analysis?: string;
  className?: string;
  requirements?: Requirement[];
}

const ResumeAnalysis = ({
  strengths = [],
  weaknesses = [],
  analysis = "Extensive AI/ML experience demonstrated through roles at Cruise, Rivian, and Walmart Global Tech, as well as substantial academic contributions. Met 9/9 criteria - Candidate is significantly overqualified for the role.",
  className,
  requirements = [
    {
      id: "location",
      text: "Must be in a 50 miles radius around Bay Area, United States.",
      isMet: true,
      details: "Candidate is located in Mountain View, California, which is within a 50 miles radius of the Bay Area."
    },
    {
      id: "workAuth",
      text: "Must have a right to work in the US.",
      isMet: true,
      details: "Holding several positions in the United States implies the right to work in the US."
    },
    {
      id: "experience",
      text: "Must have 5+ years of experience in AI/ML engineering.",
      isMet: true,
      details: "Candidate has been an AI/ML engineer with positions at Cruise (1.5 years), Rivian (3.5 years), and Walmart Global Tech (5 months), totaling over 5 years."
    },
    {
      id: "startup",
      text: "Must have proven experience working with AI-focused startups.",
      isMet: true,
      details: "Candidate worked at Rivian, an AI-focused startup."
    },
    {
      id: "frameworks",
      text: "Must have strong knowledge of machine learning frameworks such as TensorFlow, PyTorch, etc.",
      isMet: true,
      details: "Listed frameworks such as TensorFlow and Keras in skills."
    },
    {
      id: "languages",
      text: "Must have proficiency with programming languages like Python, R, or Java.",
      isMet: true,
      details: "Python and R listed under skills."
    },
    {
      id: "problemSolving",
      text: "Must have excellent problem-solving skills.",
      isMet: true,
      details: "Successful completion of complex AI projects indicates strong problem-solving capabilities."
    },
    {
      id: "learning",
      text: "Must demonstrate a proactive approach to learning new technologies.",
      isMet: true,
      details: "Continuously contributes to diverse AI and machine learning projects."
    },
    {
      id: "environment",
      text: "Must have the ability to work in a fast-paced, collaborative, and innovative environment.",
      isMet: true,
      details: "Collaborative work at dynamic environments like Cruise and Walmart Global Tech."
    },
  ]
}: ResumeAnalysisProps) => {
  const [isUpdating, setIsUpdating] = useState(false);
  
  const handleUpdateRequirements = () => {
    setIsUpdating(true);
    
    // Simulate an API call
    setTimeout(() => {
      setIsUpdating(false);
      toast.success("Job requirements updated successfully");
    }, 1500);
  };
  
  // Count met requirements
  const metRequirementsCount = requirements.filter(req => req.isMet).length;
  const totalRequirements = requirements.length;
  
  return (
    <Card className={cn("shadow-md rounded-lg border-gray-100 overflow-hidden bg-white", className)}>
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-candidate-accent flex items-center justify-center">
              <File className="w-5 h-5 text-candidate-secondary" />
            </div>
            <h3 className="font-medium text-lg">Application Review</h3>
          </div>
          
          <button 
            onClick={handleUpdateRequirements}
            disabled={isUpdating}
            className="flex items-center gap-2 text-sm text-candidate-secondary hover:text-candidate-primary transition-colors p-2 bg-candidate-accent/40 rounded-md"
          >
            <Briefcase className="w-4 h-4" />
            <span>{isUpdating ? "Updating..." : "Update Requirements"}</span>
          </button>
        </div>
        
        <p className="text-gray-700 mb-3 text-sm">{analysis}</p>
        
        <Separator className="my-3 bg-gray-200" />
        
        <div className="space-y-4">
          {requirements.map((requirement) => (
            <div key={requirement.id} className="space-y-1">
              <div className="flex items-start gap-2">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                  {requirement.isMet ? (
                    <Check className="w-3 h-3 text-green-600" />
                  ) : (
                    <AlertTriangle className="w-3 h-3 text-amber-500" />
                  )}
                </span>
                <span className="font-medium text-sm">{requirement.text}</span>
              </div>
              <p className="text-gray-500 text-xs ml-7">{requirement.details}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ResumeAnalysis;
