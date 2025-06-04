import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Mail, Phone, Calendar, Star, Download, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ResumeDisplay from "./ResumeDisplay";
import ContactCard from "./ContactCard";
import RecordingPlayer from "./RecordingPlayer";
import ResumeAnalysis from "./ResumeAnalysis";

interface CandidateProfileProps {
  candidate: {
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
    introVideo?: string;
    prescreeningVideo?: string;
    introTranscript?: string;
    prescreeningTranscript?: string;
  };
}

const CandidateProfile = ({ candidate }: CandidateProfileProps) => {
  const navigate = useNavigate();

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

  const videoTabs = [
    {
      id: "intro",
      label: "Introduction Video",
      videoUrl: candidate.introVideo || "/placeholder-video.mp4",
      transcript: candidate.introTranscript || "This is a sample transcript for the introduction video. The candidate introduces themselves and explains their background and motivation for applying to this position."
    },
    {
      id: "prescreening",
      label: "Pre-screening Interview",
      videoUrl: candidate.prescreeningVideo || "/placeholder-video.mp4", 
      transcript: candidate.prescreeningTranscript || "This is a sample transcript for the pre-screening interview. The candidate answers technical questions and discusses their experience in detail."
    }
  ];

  return (
    
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white py-8">
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => navigate("/candidates")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Candidates
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Candidate Header */}
            <Card>
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold">{candidate.name}</h1>
                    <p className="text-xl text-muted-foreground">{candidate.position}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      {candidate.location && (
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{candidate.location}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>Applied {candidate.applicationDate || "2 days ago"}</span>
                      </div>
                    </div>
                  </div>
                  <Badge className={getStatusColor(candidate.status || "new")}>
                    {(candidate.status || "new").charAt(0).toUpperCase() + (candidate.status || "new").slice(1)}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{candidate.recommendation}</p>
                {candidate.strengths && candidate.strengths.length > 0 && (
                  <div>
                    <h3 className="font-medium mb-2">Key Strengths</h3>
                    <div className="flex flex-wrap gap-2">
                      {candidate.strengths.map((strength, index) => (
                        <Badge key={index} variant="secondary">
                          {strength}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <RecordingPlayer tabs={videoTabs} />
            <ResumeAnalysis />
            <ResumeDisplay />
          </div>

          {/* Right Column - Contact & Actions */}
          <div className="space-y-6">
            <ContactCard
              email={candidate.email || "adu.melkie@example.com"}
              phone={candidate.phone || "+1 240 389 2080"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateProfile;
