
import { File, Check, AlertTriangle, Briefcase, Info, X, HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { toast } from "sonner";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

// Define possible requirement statuses
type RequirementStatus = "met" | "notMet" | "inferred" | "unsure";

interface Requirement {
  id: string;
  text: string;
  status: RequirementStatus;
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
      status: "met",
      details: "Candidate is located in Mountain View, California, which is within a 50 miles radius of the Bay Area."
    },
    {
      id: "workAuth",
      text: "Must have a right to work in the US.",
      status: "inferred",
      details: "Holding several positions in the United States implies the right to work in the US."
    },
    {
      id: "experience",
      text: "Must have 5+ years of experience in AI/ML engineering.",
      status: "met",
      details: "Candidate has been an AI/ML engineer with positions at Cruise (1.5 years), Rivian (3.5 years), and Walmart Global Tech (5 months), totaling over 5 years."
    },
    {
      id: "startup",
      text: "Must have proven experience working with AI-focused startups.",
      status: "met",
      details: "Candidate worked at Rivian, an AI-focused startup."
    },
    {
      id: "frameworks",
      text: "Must have strong knowledge of machine learning frameworks such as TensorFlow, PyTorch, etc.",
      status: "met",
      details: "Listed frameworks such as TensorFlow and Keras in skills."
    },
    {
      id: "languages",
      text: "Must have proficiency with programming languages like Python, R, or Java.",
      status: "met",
      details: "Python and R listed under skills."
    },
    {
      id: "problemSolving",
      text: "Must have excellent problem-solving skills.",
      status: "unsure",
      details: "Resume suggests problem-solving skills, but should be confirmed in interview."
    },
    {
      id: "learning",
      text: "Must demonstrate a proactive approach to learning new technologies.",
      status: "inferred",
      details: "Continuously contributes to diverse AI and machine learning projects."
    },
    {
      id: "environment",
      text: "Must have the ability to work in a fast-paced, collaborative, and innovative environment.",
      status: "notMet",
      details: "Prior experience mostly in established companies. Fast-paced startup experience limited."
    },
  ]
}: ResumeAnalysisProps) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  const handleUpdateRequirements = () => {
    setIsUpdating(true);
    
    // Simulate an API call
    setTimeout(() => {
      setIsUpdating(false);
      toast.success("Job requirements updated successfully");
    }, 1500);
  };
  
  // Count requirements by status
  const metCount = requirements.filter(req => req.status === "met").length;
  const inferredCount = requirements.filter(req => req.status === "inferred").length;
  const unsureCount = requirements.filter(req => req.status === "unsure").length;
  const notMetCount = requirements.filter(req => req.status === "notMet").length;
  const totalRequirements = requirements.length;
  
  // Render the appropriate icon based on requirement status
  const renderStatusIcon = (status: RequirementStatus) => {
    switch (status) {
      case "met":
        return <Check className="w-3 h-3 text-green-600" />;
      case "inferred":
        return <Info className="w-3 h-3 text-blue-600" />;
      case "unsure":
        return <HelpCircle className="w-3 h-3 text-amber-500" />;
      case "notMet":
        return <X className="w-3 h-3 text-red-600" />;
      default:
        return null;
    }
  };
  
  // Get the appropriate background color for the status icon
  const getStatusBgColor = (status: RequirementStatus) => {
    switch (status) {
      case "met":
        return "bg-green-100";
      case "inferred":
        return "bg-blue-100";
      case "unsure":
        return "bg-amber-100";
      case "notMet":
        return "bg-red-100";
      default:
        return "bg-slate-100";
    }
  };
  
  return (
    <Card className={cn(className)}>
      <CardHeader className="flex flex-row justify-between items-center pb-2 pt-4 px-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
            <File className="w-4 h-4 text-slate-600" />
          </div>
          <h3 className="font-medium">Application Review</h3>
        </div>
        
        <Button 
          variant="outline"
          size="sm"
          onClick={handleUpdateRequirements}
          disabled={isUpdating}
        >
          <Briefcase className="w-4 h-4 mr-2" />
          {isUpdating ? "Updating..." : "Update Requirements"}
        </Button>
      </CardHeader>
      
      <CardContent className="pt-0 px-4 pb-4">
        <p className="text-muted-foreground mb-3 text-sm">{analysis}</p>
        
        {/* Collapsible requirements section */}
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger className="w-full">
            {/* Summary of requirements as clickable trigger */}
            <div className="flex items-center justify-between py-2 hover:bg-slate-50 rounded-md px-2 transition-colors">
              <div className="flex items-center gap-2 text-sm">
                <span className="font-medium">Requirements:</span>
                <span className="text-green-600 flex items-center gap-1">
                  <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="w-2 h-2" />
                  </div>
                  {metCount}
                </span>
                <span className="text-blue-600 flex items-center gap-1">
                  <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center">
                    <Info className="w-2 h-2" />
                  </div>
                  {inferredCount}
                </span>
                <span className="text-amber-500 flex items-center gap-1">
                  <div className="w-4 h-4 rounded-full bg-amber-100 flex items-center justify-center">
                    <HelpCircle className="w-2 h-2" />
                  </div>
                  {unsureCount}
                </span>
                <span className="text-red-600 flex items-center gap-1">
                  <div className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center">
                    <X className="w-2 h-2" />
                  </div>
                  {notMetCount}
                </span>
              </div>
              <div className="text-sm font-medium text-slate-700">
                {metCount + inferredCount}/{totalRequirements}
                {isOpen ? (
                  <ChevronUp className="inline-block ml-1 w-4 h-4 text-slate-500" />
                ) : (
                  <ChevronDown className="inline-block ml-1 w-4 h-4 text-slate-500" />
                )}
              </div>
            </div>
          </CollapsibleTrigger>
          
          <CollapsibleContent className="space-y-4 pt-2 px-2">
            {requirements.map((requirement) => (
              <div key={requirement.id} className="space-y-1">
                <div className="flex items-start gap-2">
                  <span className={cn("mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center", getStatusBgColor(requirement.status))}>
                    {renderStatusIcon(requirement.status)}
                  </span>
                  <span className="font-medium text-sm">{requirement.text}</span>
                </div>
                <p className="text-muted-foreground text-xs ml-7">{requirement.details}</p>
              </div>
            ))}
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
};

export default ResumeAnalysis;
