
import { useState } from "react";
import { FileText, Users, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import CandidateCard from "@/components/CandidateCard";
import { useNavigate } from "react-router-dom";

const Candidates = () => {
  const navigate = useNavigate();
  const [jobDescription, setJobDescription] = useState("");
  const [email, setEmail] = useState("");
  const [showCandidates, setShowCandidates] = useState(false);

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

  const handleCandidateClick = (candidateId: string) => {
    if (candidateId === "1") {
      navigate("/");
    } else {
      navigate("/");
    }
  };

  const handleSubmit = () => {
    if (jobDescription.trim() && email.trim()) {
      setShowCandidates(true);
    }
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
              <h1 className="text-3xl font-bold">Find Candidates</h1>
              <p className="text-muted-foreground">Match candidates to your job requirements</p>
            </div>
          </div>
        </div>

        {!showCandidates ? (
          /* Job Description Form */
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Job Requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="jobDescription">
                    Paste your job description or requirements
                  </Label>
                  <Textarea
                    id="jobDescription"
                    placeholder="Paste your job description, requirements, or ideal candidate profile here..."
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    className="min-h-[200px] mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Your email address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2"
                  />
                </div>

                <Button 
                  onClick={handleSubmit}
                  disabled={!jobDescription.trim() || !email.trim()}
                  className="w-full"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Find Matching Candidates
                </Button>
              </CardContent>
            </Card>
          </div>
        ) : (
          /* Candidates Results */
          <>
            <div className="mb-6">
              <Button 
                variant="outline" 
                onClick={() => setShowCandidates(false)}
                className="mb-4"
              >
                ← Back to Search
              </Button>
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-4">
                  <p className="text-sm text-blue-800">
                    <strong>Matching candidates for:</strong> {jobDescription.substring(0, 100)}...
                  </p>
                  <p className="text-xs text-blue-600 mt-1">
                    Results will be sent to: {email}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Candidates Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {candidates.map((candidate) => (
                <CandidateCard
                  key={candidate.id}
                  {...candidate}
                  onClick={() => handleCandidateClick(candidate.id)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Candidates;
