
import { User, Briefcase, MapPin } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface CandidateCardProps {
  id: string;
  name: string;
  position: string;
  location?: string;
  logo?: string;
}

const CandidateCard = ({ id, name, position, location, logo }: CandidateCardProps) => {
  const navigate = useNavigate();

  const handleViewProfile = () => {
    navigate(`/candidate/${id}`);
  };

  return (
    <Card className="h-full hover:shadow-md transition-shadow">
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
            <div className="highlight-chip mt-1">{position}</div>
          </div>
        </div>

        {location && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
        )}
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

export default CandidateCard;
