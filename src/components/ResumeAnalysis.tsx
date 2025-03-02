
import { File, Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ResumeAnalysisProps {
  strengths?: string[];
  weaknesses?: string[];
  analysis?: string;
  className?: string;
}

const ResumeAnalysis = ({
  strengths = [],
  weaknesses = [],
  analysis,
  className
}: ResumeAnalysisProps) => {
  return (
    <div className={cn("candidate-card animate-fade-in", className)}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-candidate-accent flex items-center justify-center">
          <File className="w-5 h-5 text-candidate-secondary" />
        </div>
        <h3 className="font-medium text-lg">Resume Analysis</h3>
      </div>
      
      {analysis && (
        <div className="mb-4">
          <h4 className="font-medium text-sm uppercase text-candidate-muted mb-2">Analysis</h4>
          <p className="text-sm text-candidate-primary">{analysis}</p>
        </div>
      )}
      
      {strengths.length > 0 && (
        <div className="mb-4">
          <h4 className="font-medium text-sm uppercase text-candidate-muted mb-2">Strengths</h4>
          <ul className="space-y-2">
            {strengths.map((strength, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="w-3 h-3 text-green-600" />
                </span>
                <span className="text-sm">{strength}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {weaknesses.length > 0 && (
        <div>
          <h4 className="font-medium text-sm uppercase text-candidate-muted mb-2">Areas for Improvement</h4>
          <ul className="space-y-2">
            {weaknesses.map((weakness, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                  <X className="w-3 h-3 text-red-600" />
                </span>
                <span className="text-sm">{weakness}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ResumeAnalysis;
