
import { useState } from "react";
import { Users, Search } from "lucide-react";
import CandidateCard from "@/components/CandidateCard";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Candidates = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  // This would typically come from an API or database
  const candidatesData = [
    {
      id: "1",
      name: "Adu Melkie",
      position: "Data Consultant",
      location: "San Francisco, CA",
    },
    {
      id: "2",
      name: "Sarah Johnson",
      position: "Frontend Developer",
      location: "New York, NY",
    },
    {
      id: "3",
      name: "Michael Chen",
      position: "Product Manager",
      location: "Chicago, IL",
    },
    {
      id: "4",
      name: "Jessica Williams",
      position: "UX Designer",
      location: "Austin, TX",
    },
    {
      id: "5",
      name: "David Rodriguez",
      position: "Backend Engineer",
      location: "Seattle, WA",
    },
    {
      id: "6",
      name: "Emma Thompson",
      position: "Data Scientist",
      location: "Boston, MA",
    }
  ];

  const filteredCandidates = candidatesData.filter(candidate => 
    candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    candidate.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (candidate.location && candidate.location.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-candidate-light to-white">
      <div className="w-full max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Candidates</h1>
            <p className="text-muted-foreground">Browse and review candidate profiles</p>
          </div>
          
          <div className="relative w-full md:w-auto">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-muted-foreground" />
            </div>
            <input
              type="text"
              placeholder="Search candidates..."
              className="pl-10 pr-4 py-2 rounded-md border border-input bg-background w-full md:w-64"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCandidates.map((candidate) => (
            <CandidateCard
              key={candidate.id}
              id={candidate.id}
              name={candidate.name}
              position={candidate.position}
              location={candidate.location}
            />
          ))}
        </div>
        
        {filteredCandidates.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12">
            <Users className="w-12 h-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium mb-2">No candidates found</h3>
            <p className="text-muted-foreground text-center max-w-md">
              {searchQuery 
                ? "Try adjusting your search criteria to find more candidates." 
                : "There are no candidates to display at this time."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Candidates;
