
import CandidateProfile from "@/components/CandidateProfile";

const Index = () => {
  // This would typically come from an API or database
  const candidateData = {
    name: "Adu Melkie",
    position: "Data Consultant",
    email: "adu.melkie@example.com",
    phone: "+1 240 389 2080",
    location: "San Francisco, CA",
    // In a real application, these would be actual URLs
    resumeUrl: "#",
    recordingUrl: "#",
    recommendation: "Great news! Adu Melkie has shown strong interest in the Data Consultant position and their profile looks very promising. I highly recommend reaching out soon to discuss next steps - this could be an excellent match.",
    strengths: [
      "Strong background in data analytics and visualization",
      "5+ years experience with SQL, Python, and data migration",
      "Experience with cloud transformation initiatives",
      "Excellent communication skills demonstrated in interview",
      "Proven track record of optimizing data management systems"
    ],
    weaknesses: [
      "Limited experience with specific industry regulations",
      "Some gaps in knowledge of newest cloud technologies",
      "May require additional training on proprietary systems"
    ],
    analysis: "Adu demonstrates excellent technical capabilities in data management, with particular strength in data migration and architecture planning. The candidate has a solid understanding of information management systems and could quickly adapt to our organization's evolving data requirements. Their expertise in cloud transformation aligns well with our current initiatives."
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-candidate-light to-white">
      <CandidateProfile {...candidateData} />
    </div>
  );
};

export default Index;
