import { User, Briefcase, MapPin, Check, Info, HelpCircle, X } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

interface CandidateCardProps {
  id: string;
  name: string;
  position: string;
  location?: string;
  logo?: string;
  tagline?: string;
  requirements?: {
    met: number;
    inferred: number;
    unsure: number;
    notMet: number;
  };
}

const CandidateCard = ({ 
  id, 
  name, 
  position, 
  location, 
  logo,
  tagline = "Experienced professional with a passion for driving results",
  requirements = { met: 5, inferred: 2, unsure: 1, notMet: 1 }
}: CandidateCardProps) => {
  const navigate = useNavigate();

  const handleViewProfile = () => {
    navigate(`/candidate/${id}`);
  };

  const totalRequirements = requirements.met + requirements.inferred + requirements.unsure + requirements.notMet;

  return (
    <Card className="h-full hover:shadow-md transition-shadow overflow-hidden">
      <div className="h-2 bg-gradient-to-r from-candidate-accent to-candidate-secondary" />
      <CardContent className="pt-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-candidate-accent flex items-center justify-center">
            {logo ? (
              <img src={logo} alt={name} className="w-full h-full rounded-full object-cover" />
            ) : (
              <User className="w-6 h-6 text-candidate-secondary" />
            )}
          </div>
          <div>
            <h3 className="font-medium text-lg">{name}</h3>
            {location && (
              <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                <MapPin className="w-3 h-3" />
                <span>{location}</span>
              </div>
            )}
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {tagline}
        </p>

        <div>
          <div className="flex items-center justify-between text-xs">
            <div className="font-medium">Requirements</div>
            <div className="text-muted-foreground">
              {requirements.met + requirements.inferred}/{totalRequirements}
            </div>
          </div>
          
          <div className="flex items-center gap-2 mt-2">
            <RequirementBadge count={requirements.met} type="met" />
            <RequirementBadge count={requirements.inferred} type="inferred" />
            <RequirementBadge count={requirements.unsure} type="unsure" />
            <RequirementBadge count={requirements.notMet} type="notMet" />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleViewProfile} 
          variant="outline" 
          className="w-full border-candidate-accent hover:bg-candidate-accent/40 text-candidate-secondary"
        >
          View Profile
        </Button>
      </CardFooter>
    </Card>
  );
};

type RequirementType = "met" | "inferred" | "unsure" | "notMet";

interface RequirementBadgeProps {
  count: number;
  type: RequirementType;
}

const RequirementBadge = ({ count, type }: RequirementBadgeProps) => {
  const getIcon = () => {
    switch (type) {
      case "met": 
        return <Check className="w-2 h-2" />;
      case "inferred":
        return <Info className="w-2 h-2" />;
      case "unsure":
        return <HelpCircle className="w-2 h-2" />;
      case "notMet":
        return <X className="w-2 h-2" />;
    }
  };

  const getBgColor = () => {
    switch (type) {
      case "met": 
        return "bg-green-100";
      case "inferred":
        return "bg-blue-100";
      case "unsure":
        return "bg-amber-100";
      case "notMet":
        return "bg-red-100";
    }
  };

  const getTextColor = () => {
    switch (type) {
      case "met": 
        return "text-green-600";
      case "inferred":
        return "text-blue-600";
      case "unsure":
        return "text-amber-500";
      case "notMet":
        return "text-red-600";
    }
  };

  return (
    <div className={cn("flex items-center gap-1", getTextColor())}>
      <div className={cn("w-4 h-4 rounded-full flex items-center justify-center", getBgColor())}>
        {getIcon()}
      </div>
      <span>{count}</span>
    </div>
  );
};

export default CandidateCard;
