
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CandidateCard from "@/components/CandidateCard";
import RequirementsModal from "@/components/RequirementsModal";

const Home = () => {
  const [showModal, setShowModal] = useState(true);
  const [showCandidates, setShowCandidates] = useState(false);
  const navigate = useNavigate();

  // Mock candidate data
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
        "Excellent communication skills demonstrated in interview"
      ],
      applicationDate: "2 days ago",
      status: "new" as const
    },
    {
      id: "2",
      name: "Sarah Johnson",
      position: "Frontend Developer",
      location: "New York, NY",
      email: "sarah.johnson@example.com",
      phone: "+1 555 123 4567",
      recommendation: "Sarah has excellent React and TypeScript skills with 4+ years of experience. Her portfolio demonstrates clean, accessible code and modern design principles.",
      strengths: [
        "Expert in React and TypeScript",
        "Strong UI/UX design skills",
        "Experience with accessibility standards",
        "Excellent problem-solving abilities"
      ],
      applicationDate: "1 day ago",
      status: "reviewed" as const
    },
    {
      id: "3",
      name: "Michael Chen",
      position: "Backend Engineer",
      location: "Seattle, WA",
      email: "michael.chen@example.com",
      phone: "+1 555 987 6543",
      recommendation: "Michael brings 6+ years of experience in Node.js and cloud architecture. His background in microservices and AWS makes him a strong candidate for our platform.",
      strengths: [
        "Expert in Node.js and Python",
        "AWS certified solutions architect",
        "Experience with microservices architecture",
        "Strong database optimization skills"
      ],
      applicationDate: "3 days ago",
      status: "interview" as const
    }
  ];

  const handleRequirementsComplete = (requirements: string, email: string) => {
    console.log("Requirements:", requirements);
    console.log("Email:", email);
    setShowModal(false);
    setShowCandidates(true);
  };

  const handleCandidateClick = (candidateId: string) => {
    if (candidateId === "1") {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Candidate tiles - blurred when modal is open */}
      <div className={`py-8 transition-all duration-300 ${showModal ? 'blur-sm pointer-events-none' : ''}`}>
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Your Perfect Candidate</h1>
            <p className="text-gray-600">Browse through our curated list of qualified candidates</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {candidates.map((candidate) => (
              <CandidateCard
                key={candidate.id}
                {...candidate}
                onClick={() => handleCandidateClick(candidate.id)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Requirements Modal */}
      <RequirementsModal
        isOpen={showModal}
        onComplete={handleRequirementsComplete}
      />
    </div>
  );
};

export default Home;
