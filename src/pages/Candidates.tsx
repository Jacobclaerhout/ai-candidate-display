
import { useState } from "react";
import { Search, Filter, Plus, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CandidateCard from "@/components/CandidateCard";
import { useNavigate } from "react-router-dom";

const Candidates = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  // Mock candidates data
  const candidates = [
    {
      id: "1",
      name: "Adu Melkie",
      position: "Data Consultant",
      location: "San Francisco, CA",
      email: "adu.melkie@example.com",
      phone: "+1 240 389 2080",
      recommendation: "Great news! Adu Melkie has shown strong interest in the Data Consultant position and their profile looks very promising. I highly recommend reaching out soon to discuss next steps - this could be an excellent match.",
      strengths: [
        "Strong background in data analytics and visualization",
        "5+ years experience with SQL, Python, and data migration",
        "Experience with cloud transformation initiatives",
        "Excellent communication skills demonstrated in interview",
        "Proven track record of optimizing data management systems"
      ],
      applicationDate: "2 days ago",
      status: "reviewed" as const
    },
    {
      id: "2",
      name: "Sarah Chen",
      position: "Senior Software Engineer",
      location: "Seattle, WA",
      email: "sarah.chen@example.com",
      phone: "+1 206 555 0123",
      recommendation: "Exceptional candidate with strong technical skills and leadership experience. Has led multiple successful projects at scale.",
      strengths: [
        "Full-stack development expertise",
        "Team leadership experience",
        "Microservices architecture",
        "React and Node.js proficiency"
      ],
      applicationDate: "1 day ago",
      status: "new" as const
    },
    {
      id: "3",
      name: "Marcus Johnson",
      position: "Product Manager",
      location: "Austin, TX",
      email: "marcus.johnson@example.com",
      phone: "+1 512 555 0456",
      recommendation: "Strong product management background with excellent stakeholder communication skills. Experience in both B2B and B2C products.",
      strengths: [
        "Product strategy and roadmapping",
        "Cross-functional team leadership",
        "Data-driven decision making",
        "Agile methodology expertise"
      ],
      applicationDate: "3 days ago",
      status: "interview" as const
    },
    {
      id: "4",
      name: "Emily Rodriguez",
      position: "UX Designer",
      location: "New York, NY",
      email: "emily.rodriguez@example.com",
      phone: "+1 212 555 0789",
      recommendation: "Creative designer with a strong portfolio and user-centered design approach. Great collaboration skills with engineering teams.",
      strengths: [
        "User research and testing",
        "Prototyping and wireframing",
        "Design systems",
        "Figma and Adobe Creative Suite"
      ],
      applicationDate: "1 week ago",
      status: "hired" as const
    }
  ];

  const filteredCandidates = candidates.filter(candidate =>
    candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    candidate.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
    candidate.location?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCandidateClick = (candidateId: string) => {
    if (candidateId === "1") {
      navigate("/");
    } else {
      // For other candidates, we could navigate to their individual pages
      // For now, just navigate to the main candidate (Adu Melkie)
      navigate("/");
    }
  };

  const statusCounts = {
    new: candidates.filter(c => c.status === "new").length,
    reviewed: candidates.filter(c => c.status === "reviewed").length,
    interview: candidates.filter(c => c.status === "interview").length,
    hired: candidates.filter(c => c.status === "hired").length,
    rejected: candidates.filter(c => c.status === "rejected").length,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white py-8">
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
              <Users className="w-5 h-5 text-slate-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Candidates</h1>
              <p className="text-muted-foreground">Manage and review job applications</p>
            </div>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Candidate
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{statusCounts.new}</div>
              <div className="text-sm text-muted-foreground">New</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-yellow-600">{statusCounts.reviewed}</div>
              <div className="text-sm text-muted-foreground">Reviewed</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">{statusCounts.interview}</div>
              <div className="text-sm text-muted-foreground">Interview</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">{statusCounts.hired}</div>
              <div className="text-sm text-muted-foreground">Hired</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-red-600">{statusCounts.rejected}</div>
              <div className="text-sm text-muted-foreground">Rejected</div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search candidates by name, position, or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Candidates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCandidates.map((candidate) => (
            <CandidateCard
              key={candidate.id}
              {...candidate}
              onClick={() => handleCandidateClick(candidate.id)}
            />
          ))}
        </div>

        {filteredCandidates.length === 0 && (
          <Card className="p-8 text-center">
            <CardContent>
              <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">No candidates found</h3>
              <p className="text-muted-foreground">Try adjusting your search criteria</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Candidates;
