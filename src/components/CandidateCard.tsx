
import { User, MapPin, Briefcase, Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface CandidateCardProps {
  id: string;
  name: string;
  position: string;
  location?: string;
  email?: string;
  phone?: string;
  recommendation: string;
  strengths?: string[];
  applicationDate?: string;
  status?: "new" | "reviewed" | "interview" | "hired" | "rejected";
  onClick?: () => void;
  className?: string;
}

const CandidateCard = ({
  id,
  name,
  position,
  location,
  email,
  phone,
  recommendation,
  strengths = [],
  applicationDate = "2 days ago",
  status = "new",
  onClick,
  className
}: CandidateCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-blue-100 text-blue-800";
      case "reviewed":
        return "bg-yellow-100 text-yellow-800";
      case "interview":
        return "bg-purple-100 text-purple-800";
      case "hired":
        return "bg-green-100 text-green-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-slate-100 text-slate-800";
    }
  };

  return (
    <Card className={cn("hover:shadow-md transition-shadow cursor-pointer", className)} onClick={onClick}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
              <User className="w-5 h-5 text-slate-600" />
            </div>
            <div>
              <h3 className="font-medium text-lg">{name}</h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Briefcase className="w-3 h-3" />
                <span>{position}</span>
              </div>
            </div>
          </div>
          <Badge className={getStatusColor(status)}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3">
        {location && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-3 h-3" />
            <span>{location}</span>
          </div>
        )}
        
        <p className="text-sm text-muted-foreground line-clamp-2">
          {recommendation}
        </p>
        
        {strengths.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {strengths.slice(0, 2).map((strength, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {strength.length > 25 ? `${strength.substring(0, 25)}...` : strength}
              </Badge>
            ))}
            {strengths.length > 2 && (
              <Badge variant="secondary" className="text-xs">
                +{strengths.length - 2} more
              </Badge>
            )}
          </div>
        )}
        
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Calendar className="w-3 h-3" />
            <span>Applied {applicationDate}</span>
          </div>
          <Button variant="ghost" size="sm" className="h-auto p-1">
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CandidateCard;
